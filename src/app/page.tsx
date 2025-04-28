'use client';

import Hero from "@/components/Hero";
import DocumentTypesSection from "@/components/DocumentTypesSection";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { FileText, User, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white text-black space-y-20">
      {/* Hero Section */}
      <Hero />

      {/* Document Types (Make Documents) */}
      <section id="make-documents">
        <DocumentTypesSection />
      </section>

      {/* Documents Vault */}
      <section id="my-documents" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 mb-8 flex items-center gap-2">
            <FileText /> Your Documents Vault
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {["nda.pdf", "eviction-notice.pdf", "child-care.pdf", "contract.docx"].map((name) => (
              <Card key={name} className="hover:shadow-lg transition">
                <CardHeader className="flex items-center gap-3">
                  <FileText className="text-red-600 w-6 h-6" />
                  <CardTitle className="text-sm truncate">{name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-xs">Uploaded 2 days ago</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/my-documents">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl">
                View All Documents
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Find a Lawyer */}
      <section id="find-lawyer" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 mb-8 flex items-center gap-2">
            <User /> Find a Lawyer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { name: "Sarah Johnson", spec: "Family Law" },
              { name: "Michael Rodriguez", spec: "Criminal Defense" },
            ].map((lawyer) => (
              <Card key={lawyer.name} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-lg">{lawyer.name}</CardTitle>
                  <p className="text-red-600 text-sm">{lawyer.spec}</p>
                </CardHeader>
                <CardContent className="text-gray-700 text-sm">
                  <p>Rating: ★★★★☆</p>
                  <p>Location: City, State</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/lawyers">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl">
                Browse All Lawyers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Talk to Legal AI */}
      <section id="talk-to-legal-ai" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-red-700 flex items-center justify-center gap-2">
            <MessageCircle /> Talk to Legal AI
          </h2>
          <p className="text-gray-700 text-lg">
            Have a quick question? Our AI assistant can help you understand basic legal concepts in under 100 words.
          </p>
          <div className="border border-gray-300 rounded-lg p-4 text-left bg-white shadow-inner">
            <p className="italic text-gray-500">“What is an NDA?”</p>
            <p className="mt-2 text-gray-800">
              A Non‑Disclosure Agreement is a contract that protects confidential information by legally binding recipients not to share or misuse it.
            </p>
          </div>
          <Link href="/legal-ai">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl">
              Open Chat
            </Button>
          </Link>
        </div>
      </section>

      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  );
}
