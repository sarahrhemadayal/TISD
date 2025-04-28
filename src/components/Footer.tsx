"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-spartan">NextGenLegal</span>
            </div>
          </Link>
          <p className="text-sm font-light leading-relaxed">
            Helping you draft, store, and manage legal documents online — faster, safer, and smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 font-spartan">Documents</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/documents/nda" className="hover:underline">Non-Disclosure Agreement</Link></li>
            <li><Link href="/documents/eviction-notice" className="hover:underline">Eviction Notice</Link></li>
            <li><Link href="/documents/child-care" className="hover:underline">Child Care Authorization</Link></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 font-spartan">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/my-documents" className="hover:underline">My Documents</Link></li>
            <li><Link href="/lawyers" className="hover:underline">Find a Lawyer</Link></li>
            <li><Link href="/legal-ai" className="hover:underline">Talk to Legal AI</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-700 mt-6 py-4 text-center text-xs text-red-200">
        © {new Date().getFullYear()} NextGenLegal. All rights reserved.
      </div>
    </footer>
  );
}
