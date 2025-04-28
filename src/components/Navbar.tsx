'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";


export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); 
    setIsHovered(true);
  };

  const handleMouseLeave = () => {  
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 50); // Delay before hiding (200ms)
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status on load
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect to homepage
  };


  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="NextGenLegal Logo" width={64} height={64} />
          <span className="text-2xl font-bold text-red-600 font-heading">NextGenLegal</span>
        </Link>

    
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/my-documents">My Documents</Link></li>

          {/* Dropdown on hover */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover">Make Documents</button>
            {isHovered && (
               <div
               className={`absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-xl z-50 transition-opacity ${
                 isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link
                  href="/documents/nda"
                  className="block px-4 py-2 hover:bg-red-100 rounded-xl"
                >
                  NDA
                </Link>
                <Link
                  href="/documents/eviction-notice"
                  className="block px-4 py-2 hover:bg-red-100 rounded-xl"
                >
                  Eviction Notice
                </Link>
                <Link
                  href="/documents/child-care"
                  className="block px-4 py-2 hover:bg-red-100 rounded-xl"
                >
                  Child Care Authorization
                </Link>
              </div>
            )}
          </li>

          <li><Link href="/lawyers">Find a Lawyer</Link></li>
          <li><Link href="/legal-ai">Talk to Legal AI</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link href="/signin">
              <Button variant="outline" className="text-sm">Sign In</Button>
            </Link>
          ) : (
            <Button onClick={handleSignOut} variant="outline" className="text-sm">Sign Out</Button>
          )}
        </div>
      </nav>
    </header>
  );
}