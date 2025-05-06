import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center">
              <Image src="/images/iecs_logo.png" alt="IECS Logo" width={60} height={60} className="object-contain mr-3" />
              <h3 className="text-xl font-bold">IECS</h3>
            </div>
            <p className="mb-4 text-gray-300">
              International Education Consultancy Services Inc. has been guiding students to quality education in Canada
              since 2006.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-[#D4AF37]" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-[#D4AF37]" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-[#D4AF37]" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Programs", href: "/programs" },
                { name: "Partner Institutions", href: "/partners" },
                { name: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#D4AF37]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Admission Processing", href: "/services#admission" },
                { name: "Immigration Assistance", href: "/services#immigration" },
                { name: "Settlement Services", href: "/services#settlement" },
                { name: "Free Eligibility Assessment", href: "/contact" },
                { name: "Scholarship Guidance", href: "/services#scholarship" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-[#D4AF37]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                <div>
                  <p className="text-gray-300">Phone: (289) 644-2285</p>
                  <p className="text-gray-300">Phone: (289) 644-2288</p>
                  <p className="text-gray-300">
                    <a
                      href="https://wa.me/2349099555573"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37]"
                    >
                      WhatsApp: +234 909 955 5573
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                <p className="text-gray-300">info@iecservices.org</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                <p className="text-gray-300">
                125 Lakeshore Road East, Suite 300
                  <br />
                  Oakville, Ontario L6J1H3
                  <br />
                  Canada
                </p>
              </li>
              {/* India Address */}
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    2nd Floor, 5/1, 1st Main Road, 1st Block
                    <br />
                    Koramangala, Bangalore 560034
                    <br />
                    India
                  </p>
                  <p className="text-gray-300 mt-1">Phone: +91 80 1234 5678 <b>(WhatsApp Only)</b></p>
                </div>
              </li>
              {/* China Address */}
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Room 1801, Building 2, No. 333, Guoding Road
                    <br />
                    Yangpu District, Shanghai 200433
                    <br />
                    China
                  </p>
                  <p className="text-gray-300 mt-1">Phone: +86 21 8765 4321 <b>(WhatsApp Only)</b></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 text-center text-gray-400">
          <div className="mb-4">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] mx-3">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#D4AF37] mx-3">
              Terms of Service
            </Link>
          </div>
          <p>© {currentYear} International Education Consultancy Services Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

