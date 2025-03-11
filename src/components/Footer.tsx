"use client";
import Link from "next/link";
import { Logo } from "./Logo"; // Import your existing Logo component

export function Footer() {
  return (
    <footer className="border-t mt-8 py-8 bg-gray-200/80">
      <div className="container mx-auto px-4">
        {/* Top section: branding and quick links */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand / Logo Section */}
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering learners worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-2 font-semibold uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-2 font-semibold uppercase">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@youredomain.com</li>
              <li>Phone: +1-123-456-7890</li>
              <li>Address: 123 Learning St, Knowledge City</li>
            </ul>
          </div>
        </div>

        {/* Bottom section: copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EduTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
