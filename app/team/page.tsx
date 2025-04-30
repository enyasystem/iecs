import Image from "next/image"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Team - Meet the Experts Behind IECS",
  description:
    "Meet our team of experienced education consultants dedicated to helping students achieve their academic goals in Canada. Learn about our leadership and specialists in various fields.",
  alternates: {
    canonical: "/team",
  },
}

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Team", item: "https://www.iecservices.org/team" },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Meet Our Team</h1>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experienced education consultants is dedicated to helping students achieve their academic
              goals in Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the experienced professionals who lead our organization with passion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/Mrs. Linda U. Okpala.jpg"
                  alt="Linda U. Okpala LL.B (Hons)"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-1">Linda U. Okpala LL.B (Hons)</h3>
                <p className="text-[#D4AF37] font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-700 mb-4">
                  With over 20 years of experience in international education, Linda U. Okpala (Hons) founded IECS to help students
                  navigate the complex process of studying abroad.
                </p>
                <div className="flex space-x-4">
                  <Link href="mailto:linda@iecservices.org" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </Link>
                  <Link href="https://wa.me/12345678901" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Jeremy Lee Card */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/Jeremy Lee.jpg"
                  alt="Jeremy Lee"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-1">Jeremy Lee</h3>
                <p className="text-[#D4AF37] font-medium mb-4">Director, Business Development (Asia)</p>
                <p className="text-gray-700 mb-4">
                  Jeremy leads our business development initiatives across Asia, building strong partnerships and expanding our reach in the region.
                </p>
                <div className="flex space-x-4">
                  <Link href="mailto:jeremy@iecservices.org" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </Link>
                  <Link href="https://wa.me/19876543210" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/Amie Okpala.jpg"
                  alt="Amie Okpala"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-1">Amie Okpala</h3>
                <p className="text-[#D4AF37] font-medium mb-4">Chief Operations Officer</p>
                <p className="text-gray-700 mb-4">
                  Amie oversees the day-to-day operations of IECS, ensuring that our services are delivered
                  efficiently and effectively to all clients.
                </p>
                <div className="flex space-x-4">
                  <Link href="mailto:amie@iecservices.org" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </Link>
                  <Link href="https://wa.me/11223344556" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Consultants */}
      <section className="w-full flex justify-center py-20 bg-blue-50">
        <div className="container flex flex-col items-center mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Consultants
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Education Consultants</h2>
            <p className="text-lg text-gray-700">
              Our team of specialized consultants will guide you through every step of your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="James Wilson"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">James Wilson</h3>
                <p className="text-[#D4AF37] font-medium mb-3">Undergraduate Admissions</p>
                <p className="text-gray-700 text-sm mb-4">
                  Specializes in undergraduate admissions for top Canadian universities.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Aisha Mohammed"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">Aisha Mohammed</h3>
                <p className="text-[#D4AF37] font-medium mb-3">Graduate Studies Specialist</p>
                <p className="text-gray-700 text-sm mb-4">
                  Expert in graduate program admissions and scholarship applications.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="David Kim"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">David Kim</h3>
                <p className="text-[#D4AF37] font-medium mb-3">International Student Advisor</p>
                <p className="text-gray-700 text-sm mb-4">
                  Provides guidance to international students on visa applications and cultural adaptation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Support Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Administrative Staff</h2>
            <p className="text-lg text-gray-700">
              Meet the dedicated professionals who ensure smooth operations and excellent service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Rebecca Taylor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">Rebecca Taylor</h3>
                <p className="text-[#D4AF37] font-medium mb-3">Office Manager</p>
                <p className="text-gray-700 text-sm mb-4">
                  Oversees daily operations and ensures excellent client service.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Thomas Nguyen"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">Thomas Nguyen</h3>
                <p className="text-[#D4AF37] font-medium mb-3">Document Specialist</p>
                <p className="text-gray-700 text-sm mb-4">
                  Assists with document preparation and verification for applications.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sophia Lee"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">Sophia Lee</h3>
                <p className="text-[#D4AF37] font-medium mb-3">Student Support Coordinator</p>
                <p className="text-gray-700 text-sm mb-4">
                  Provides ongoing support to students throughout their educational journey.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mt-8 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Marcus Johnson"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-1">Marcus Johnson</h3>
                <p className="text-[#D4AF37] font-medium mb-3">IT Support Specialist</p>
                <p className="text-gray-700 text-sm mb-4">
                  Manages our technology infrastructure and digital resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our experienced consultants are ready to help you achieve your educational goals in Canada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C27] text-blue-950">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-transparent">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

