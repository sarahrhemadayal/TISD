import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ShieldCheck, Briefcase, FileText } from 'lucide-react';

export default function NDAInfoPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-gradient-to-b from-white to-neutral-100 text-black">

      {/* Hero Section */}
      <section className="bg-red-50 border-b border-red-200 py-16 text-center">
        <h1 className="text-5xl font-bold text-red-700 mb-4">Non-Disclosure Agreement (NDA)</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Protect your business secrets and sensitive information. Learn what NDAs are, when to use them, and how to create one effortlessly.
        </p>
        <Link href="/documents/nda/create">
          <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white text-md px-6 py-3 rounded-xl shadow-lg">
            Make Document
          </Button>
        </Link>
      </section>

      {/* Info Sections */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <ShieldCheck className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">What is a Non-Disclosure Agreement?</h2>
            <p className="text-gray-700 leading-relaxed">
              A Non-Disclosure Agreement (NDA) is a legally enforceable contract that establishes confidentiality between two parties—
              the owner of protected information and the recipient of that information. By signing an NDA, participants agree to not disclose,
              copy, or use the shared information without consent.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <Briefcase className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">When Can You Use an NDA?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>When sharing proprietary business information with a third party.</li>
              <li>If you’re a consultant accessing client data and want to define confidentiality terms.</li>
              <li>When hiring employees or contractors who’ll have access to sensitive materials.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <FileText className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">How to Write an NDA</h2>
            <p className="text-gray-700 leading-relaxed">
              An NDA includes the definition of confidential information, the obligations of the recipient, and the duration of confidentiality.
              For instance, a company sharing customer insights with a marketing consultant would use an NDA to ensure that data isn’t misused
              or disclosed to others. You can easily create one using our template-based form.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
