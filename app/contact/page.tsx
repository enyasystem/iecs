import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin, Clock, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Our Team",
  description:
    "Contact International Education Consultancy Services for a free consultation. Our team of experienced consultants is ready to answer your questions and guide you through the process of studying in Canada.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Contact", item: "https://www.iecservices.org/contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Get In Touch</h1>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about studying in Canada? Contact us today for a free consultation and take the first step
              towards achieving your educational goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">We're Here to Help</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team of experienced consultants is ready to answer your questions and guide you through the process
                of studying in Canada.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950 text-lg">Call Us</p>
                    <p className="text-gray-700">Phone: (905) 226-7315</p>
                    <p className="text-gray-700">WhatsApp: 09099555573</p>
                    <p className="text-gray-700 text-sm mt-1">Monday to Friday, 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950 text-lg">Email Us</p>
                    <p className="text-gray-700">General Inquiries: info@iecservices.org</p>
                    <p className="text-gray-700">Admissions: admissions@iecservices.org</p>
                    <p className="text-gray-700">Immigration: immigration@iecservices.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950 text-lg">Visit Us</p>
                    <p className="text-gray-700">
                    125 Lakeshore Road East, Suite 300
                      <br />
Oakville, Ontario L6J1H3
                      <br />
                      Canada
                    </p>
                    <p className="text-gray-700 text-sm mt-1">By appointment only</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950 text-lg">Office Hours</p>
                    <p className="text-gray-700">Monday to Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-950 mb-4">International Offices</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-950">Lagos, Nigeria</p>
                      <p className="text-gray-700">59A Muritala Eletu way Osapa London</p>
                      <p className="text-gray-700">Lekki, Lagos</p>
                      <p className="text-gray-700">Phone: +234 812 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-950">Accra, Ghana</p>
                      <p className="text-gray-700">25 Independence Avenue, Osu</p>
                      <p className="text-gray-700">Phone: +233 24 567 8901</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-950">New Delhi, India</p>
                      <p className="text-gray-700">42 Connaught Place, Central Delhi</p>
                      <p className="text-gray-700">Phone: +91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Locations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Find Us</h2>
            <p className="text-lg text-gray-700">Visit our offices in Canada and around the world.</p>
          </div>

          <Tabs defaultValue="toronto" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="toronto">Toronto</TabsTrigger>
              <TabsTrigger value="lagos">Lagos</TabsTrigger>
              <TabsTrigger value="delhi">New Delhi</TabsTrigger>
            </TabsList>
            <TabsContent value="toronto" className="w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video relative w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Toronto Office Map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Toronto Office</h3>
                  <p className="text-gray-700 mb-4">
                    125 Lakeshore Road East
                    <br />
                    suite 300
                    <br />
                    Oakvile, Ontario L6J1H3
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="lagos" className="w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video relative w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Lagos Office Map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Lagos Office</h3>
                  <p className="text-gray-700 mb-4">
59 Muriatala Eletu way Osapa London                    <br />
                    Victoria Island
                    <br />
                    Lekki, Lagos
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="delhi" className="w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video relative w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="New Delhi Office Map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-2">New Delhi Office</h3>
                  <p className="text-gray-700 mb-4">
                    42 Connaught Place
                    <br />
                    Central Delhi
                    <br />
                    New Delhi, India
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Common Questions</h2>
            <p className="text-lg text-gray-700">
              Find answers to common questions about contacting and working with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                  <span>How do I schedule a consultation?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You can schedule a consultation by filling out our contact form, calling our office, or sending us an
                  email. We offer both in-person and virtual consultations to accommodate your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                  <span>Are consultations free?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we offer a free initial 30-minute consultation to discuss your educational goals and determine
                  how we can best assist you. Subsequent consultations may have fees depending on the services required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                  <span>How quickly will I receive a response?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend
                  calling our office directly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0" />
                  <span>Do I need to visit your office in person?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  No, all of our services can be provided virtually. We offer video consultations, phone calls, and
                  email communication to accommodate clients from around the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Canadian Education Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today and take the first step towards achieving your educational and career goals in Canada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C27] text-blue-950">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-transparent">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

