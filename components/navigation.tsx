"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Admission Processing", href: "/services#admission" },
        { name: "Immigration Assistance", href: "/services#immigration" },
        { name: "Settlement Services", href: "/services#settlement" },
      ],
    },
    { name: "Our Team", href: "/team" },
    { name: "Partner Institutions", href: "/partners" },
    { name: "Programs", href: "/programs" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/" ? "bg-blue-950 shadow-md py-2" : "bg-blue-950/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-white rounded-md p-1 flex items-center">
              <Image src="/images/iecs_logo.png" alt="IECS Logo" width={120} height={40} className="h-8 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                        pathname === link.href ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href} className="w-full cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-md focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <div className="font-medium text-blue-950 py-2 border-b border-gray-100">{link.name}</div>
                    <div className="ml-4 mt-1 flex flex-col space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="py-1 text-gray-700 hover:text-[#D4AF37]"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2 ${
                      pathname === link.href ? "text-[#D4AF37] font-medium" : "text-blue-950 hover:text-[#D4AF37]"
                    } ${link.name !== "Home" ? "border-t border-gray-100" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Link href="/contact" className="mt-2" onClick={closeMenu}>
                <Button className="w-full bg-[#1E3A8A] hover:bg-blue-800 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation

