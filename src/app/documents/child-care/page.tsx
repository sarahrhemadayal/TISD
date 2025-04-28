import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Baby, CalendarClock, FileText } from 'lucide-react';

export default function ChildCareInfoPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-gradient-to-b from-white to-neutral-100 text-black">

      {/* Hero Section */}
      <section className="bg-red-50 border-b border-red-200 py-16 text-center">
        <h1 className="text-5xl font-bold text-red-700 mb-4">Child Care Authorization</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Give a trusted adult the legal right to care for your child temporarily. Learn how Child Care Authorization works and create one quickly.
        </p>
        <Link href="/documents/child-care/create">
          <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white text-md px-6 py-3 rounded-xl shadow-lg">
            Make Document
          </Button>
        </Link>
      </section>

      {/* Info Sections */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <Baby className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">What is Child Care Authorization?</h2>
            <p className="text-gray-700 leading-relaxed">
              A Child Care Authorization form is a legal document that allows a parent or guardian to temporarily delegate caregiving rights
              to another adult. This can include decisions about school, medical care, and daily supervision while the parent is unavailable.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <CalendarClock className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">When Should You Use One?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>If you're traveling and leaving your child in someone else's care temporarily.</li>
              <li>When your child stays with relatives or friends for an extended period.</li>
              <li>In emergencies where you're unavailable and need someone else to make decisions for your child.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <FileText className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">How to Write It</h2>
            <p className="text-gray-700 leading-relaxed">
              Your Child Care Authorization should include the names of the parent and caregiver, specific permissions granted, and the
              duration of the agreement. Use our guided form to make sure all the necessary legal language is included—fast and hassle-free.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
