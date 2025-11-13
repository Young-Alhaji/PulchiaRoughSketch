"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = window.innerWidth >= 768 ? 85 : 70;
        const elementPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If we're on a different page, use Next.js router for fast navigation
      router.push(`/#${sectionId}`);
    }
    closeMenu();
  };

  const navLinks = [
    { name: "Home", href: "/", isExternal: false, icon: "fas fa-home" },
    {
      name: "About",
      href: "/#about-me",
      onClick: () => scrollToSection("about-me"),
      icon: "fas fa-heart",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      isExternal: false,
      icon: "fas fa-camera",
    },
    {
      name: "Pricing",
      href: "/#investment",
      onClick: () => scrollToSection("investment"),
      icon: "fas fa-gem",
    },
    {
      name: "Policies",
      href: "/#policies",
      onClick: () => scrollToSection("policies"),
      icon: "fas fa-clipboard-list",
    },
    {
      name: "Contact",
      href: "/#contact",
      onClick: () => scrollToSection("contact"),
      icon: "fas fa-envelope",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent font-dancing-script">
                The Pulchia Lab
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        pathname === link.href
                          ? "bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white"
                          : "text-gray-700 hover:text-rose-500 hover:bg-rose-50"
                      }`}
                      prefetch={true}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.onClick}
                      className="px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300 hover:scale-105"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-rose-50 inline-flex items-center justify-center p-2 rounded-full text-rose-500 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:via-rose-300 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <i className="fas fa-bars text-lg"></i>
              ) : (
                <i className="fas fa-times text-lg"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-rose-100">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white"
                      : "text-gray-700 hover:text-rose-500 hover:bg-rose-50"
                  }`}
                  onClick={closeMenu}
                  prefetch={true}
                >
                  <i className={`${link.icon} mr-3 text-sm w-4`}></i>
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    closeMenu();
                  }}
                  className="w-full text-left block px-3 py-2 rounded-full text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300"
                >
                  <i className={`${link.icon} mr-3 text-sm w-4`}></i>
                  {link.name}
                </button>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-4 pb-2">
            <a
              href="https://wa.me/2349030406284?text=Hi%20Pulchia!%20I'm%20interested%20in%20booking%20a%20photography%20session.%20Can%20we%20discuss%20the%20details?"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white px-4 py-3 rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300"
              onClick={closeMenu}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
