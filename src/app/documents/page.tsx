'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function DocumentsLanding() {
  const router = useRouter();

  const docs = [
    {
      title: 'Non-Disclosure Agreement (NDA)',
      route: '/documents/nda',
      description: 'Protect confidential information between parties.',
    },
    {
      title: 'Eviction Notice',
      route: '/documents/eviction-notice',
      description: 'Notify tenants of lease violations or intent to vacate.',
    },
    {
      title: 'Child Care Authorization',
      route: '/documents/child-care',
      description: 'Give temporary legal authority for child care decisions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-10 pt-[100px]">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Make a Legal Document</h1>
      <p className="text-gray-600 mb-10 text-sm max-w-md">
        Choose a document below to begin. You’ll be guided through a simple form and receive a finalized PDF.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc) => (
          <Card
            key={doc.route}
            className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
            onClick={() => router.push(doc.route)}
          >
            <CardContent className="p-6 space-y-2">
              <h2 className="text-lg font-semibold text-red-600">{doc.title}</h2>
              <p className="text-gray-700 text-sm">{doc.description}</p>
              <div className="flex items-center gap-1 text-sm text-red-500 font-medium">
                Start Now <ArrowRight size={16} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
