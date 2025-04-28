'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function MyDocumentsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [documentUrls, setDocumentUrls] = useState<{ name: string; url: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pdf' | 'docx'>('all');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const path = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from('my-documents')
      .upload(path, file);

    if (error) {
      console.error('Upload failed:', error.message);
    } else {
      setFile(null);
      fetchDocuments(); // refresh
    }

    setUploading(false);
  };

  const handleDelete = async (filename: string) => {
    const confirm = window.confirm('Are you sure you want to delete this document?');
    if (!confirm) return;

    const { error } = await supabase.storage.from('my-documents').remove([filename]);

    if (error) {
      console.error('Delete failed:', error.message);
    } else {
      fetchDocuments(); // refresh
    }
  };

  const fetchDocuments = async () => {
    const { data, error } = await supabase.storage.from('my-documents').list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' },
    });

    if (error) {
      console.error('Error fetching documents:', error.message);
      return;
    }

    const filtered = (data || []).filter((doc) => {
      if (filter === 'all') return true;
      if (filter === 'pdf') return doc.name.toLowerCase().endsWith('.pdf');
      if (filter === 'docx') return doc.name.toLowerCase().endsWith('.docx');
      return true;
    });

    const urls = await Promise.all(
      filtered.map(async (doc) => {
        const { data: signedUrlData } = await supabase.storage
          .from('my-documents')
          .createSignedUrl(doc.name, 60 * 60); // 1 hour

        return {
          name: doc.name,
          url: signedUrlData?.signedUrl || '',
        };
      })
    );

    setDocumentUrls(urls);
  };

  useEffect(() => {
    fetchDocuments();
  }, [filter]);

  return (
    <div className="min-h-screen bg-white p-6 text-gray-900">
      <h1 className="text-2xl font-bold text-red-600 mb-4">My Documents</h1>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <Input type="file" onChange={handleFileChange} className="sm:flex-1" />
        <Button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'pdf' ? 'default' : 'outline'}
          onClick={() => setFilter('pdf')}
        >
          PDF
        </Button>
        <Button
          variant={filter === 'docx' ? 'default' : 'outline'}
          onClick={() => setFilter('docx')}
        >
          DOCX
        </Button>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documentUrls.map((doc, idx) => (
          <div
            key={idx}
            className="border rounded-xl shadow-sm p-4 bg-white flex flex-col justify-between relative"
          >
            <div className="flex flex-col space-y-1">
              <p className="font-medium text-sm truncate">{doc.name}</p>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 text-sm"
              >
                View Document
              </a>
            </div>
            <button
              onClick={() => handleDelete(doc.name)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        {documentUrls.length === 0 && (
          <p className="text-sm text-gray-500 col-span-full">No documents found for this filter.</p>
        )}
      </div>
    </div>
  );
}
