import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ShieldCheck, Briefcase, FileText } from 'lucide-react';

export default function EvictionInfoPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-gradient-to-b from-white to-neutral-100 text-black">

      {/* Hero Section */}
      <section className="bg-red-50 border-b border-red-200 py-16 text-center">
        <h1 className="text-5xl font-bold text-red-700 mb-4">Eviction Notice</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Learn what an eviction notice is, the types of notices used by landlords, and how to create one properly and legally.
        </p>
        <Link href="/documents/eviction-notice/create">
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
            <h2 className="text-2xl font-semibold mb-2 text-red-600">What is an Eviction Notice?</h2>
            <p className="text-gray-700 leading-relaxed">
              An eviction notice is a formal letter a landlord sends to a tenant to inform them that they must vacate the rental property within a certain timeframe.
              It is the first step in the legal eviction process and typically outlines the reason for eviction and any actions the tenant can take to avoid being removed.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <Briefcase className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">Common Types of Eviction Notices</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li><strong>Pay or Quit Notice:</strong> Used when the tenant fails to pay rent. It gives them a short period to pay or leave the property.</li>
              <li><strong>Cure or Quit Notice:</strong> Issued for lease violations, giving the tenant a chance to correct the issue or move out.</li>
              <li><strong>Unconditional Quit Notice:</strong> Requires the tenant to leave without an opportunity to fix the issue. Typically used for severe or repeated violations.</li>
              <li><strong>Notice of Termination:</strong> Ends a month-to-month lease without fault, providing required notice under state law.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex gap-6 items-start">
          <FileText className="text-red-500 w-10 h-10 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">How to Write an Eviction Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              A proper eviction notice should include the tenant's name, property address, reason for eviction, date of service, deadline to act, and landlord's signature.
              Different states have specific requirements and timeframes, so be sure to use a compliant template. Our form helps you generate a valid eviction notice in minutes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
