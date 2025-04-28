'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DocumentTypesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-red-700 mb-10">
          Create Legal Documents Easily
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NDA Card */}
          <a href="/documents/nda" className="block">
            <Card className="border-red-200 hover:shadow-md transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">📄</div>
                <CardTitle className="text-red-600 text-xl">NDA</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Protect confidential information with a Non-Disclosure Agreement.
              </CardContent>
            </Card>
          </a>

          {/* Eviction Notice Card */}
          <a href="/documents/eviction-notice" className="block">
            <Card className="border-red-200 hover:shadow-md transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">🏠</div>
                <CardTitle className="text-red-600 text-xl">Eviction Notice</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Create legal eviction notices to communicate clearly with tenants.
              </CardContent>
            </Card>
          </a>

          {/* Child Care Authorization Card */}
          <a href="/documents/child-care" className="block">
            <Card className="border-red-200 hover:shadow-md transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">🧒</div>
                <CardTitle className="text-red-600 text-xl">Child Care Authorization</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Assign temporary guardianship rights in just a few clicks.
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}
