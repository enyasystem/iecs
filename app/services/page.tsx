import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, FileText, Home, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"
import { BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Our Services - Comprehensive Support for International Students",
  description:
    "Explore our comprehensive services for international students including admission processing, immigration assistance, and settlement services to ensure your educational journey to Canada is smooth and successful.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Services", item: "https://www.iecservices.org/services" },
        ]}
      />

      <FAQStructuredData
        questions={[
          {
            question: "How do you select the right programs and institutions for me?",
            answer:
              "We conduct a thorough assessment of your academic background, career goals, budget, and preferences. Based on this information, we recommend programs and institutions that align with your profile and aspirations.",
          },
          {
            question: "How many institutions can I apply to?",
            answer:
              "The number of institutions depends on the service package you choose. Our Basic package includes applications to 2 institutions, Comprehensive to 5 institutions, and Premium offers unlimited applications.",
          },
          {
            question: "What is your success rate for admissions?",
            answer:
              "We maintain a 95% success rate for admissions. This high rate is achieved through careful selection of programs that match your profile and thorough preparation of application materials.",
          },
          {
            question: "What is your success rate for study permit applications?",
            answer:
              "Our success rate for study permit applications is approximately 90%. We achieve this by ensuring all documentation is complete and accurate, and by preparing students thoroughly for the application process.",
          },
          {
            question: "What type of accommodation assistance do you provide?",
            answer:
              "We help you find suitable accommodation based on your preferences and budget. Options include on-campus housing, homestays, shared apartments, and private rentals. We provide information on different neighborhoods, proximity to campus, and cost of living.",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                Comprehensive Services for International Students
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                From application to arrival, we provide end-to-end support to ensure your educational journey to Canada
                is smooth and successful.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#admission">
                  <Button
                    variant="outline"
                    className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                  >
                    Admission Processing
                  </Button>
                </Link>
                <Link href="#immigration">
                  <Button
                    variant="outline"
                    className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                  >
                    Immigration Assistance
                  </Button>
                </Link>
                <Link href="#settlement">
                  <Button
                    variant="outline"
                    className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                  >
                    Settlement Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Students receiving guidance"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-950/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Offerings
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">How We Help You Succeed</h2>
            <p className="text-lg text-gray-700">
              Our comprehensive suite of services is designed to support you at every stage of your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Admission Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We guide you through the entire admission process, from selecting the right program to securing your
                  acceptance letter.
                </p>
                <Link
                  href="#admission"
                  className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-10 w-10 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Immigration Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We provide expert guidance on study permits, documentation preparation, and pre-departure briefings.
                </p>
                <Link
                  href="#immigration"
                  className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Home className="h-10 w-10 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Settlement Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We help with accommodation, airport pickup, banking setup, and local orientation to ensure a smooth
                  transition.
                </p>
                <Link
                  href="#settlement"
                  className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Processing Section */}
      <section id="admission" className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
                Service 1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Admission Processing</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our admission processing service provides comprehensive support to help you secure placement in your
                desired program at a Canadian institution.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Free Eligibility Assessment</h3>
                    <p className="text-gray-700">
                      We evaluate your academic background, language proficiency, and career goals to identify suitable
                      programs and institutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Application Submission</h3>
                    <p className="text-gray-700">
                      We prepare and submit applications to your chosen institutions, ensuring all requirements are met
                      and deadlines are respected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Scholarship Guidance</h3>
                    <p className="text-gray-700">
                      We identify scholarship opportunities you're eligible for and assist with the application process
                      to maximize your chances of receiving financial aid.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Documentation Verification</h3>
                    <p className="text-gray-700">
                      We review and verify all your documents to ensure they meet the requirements of Canadian
                      institutions and immigration authorities.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Student receiving admission guidance"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-950/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Assistance Section */}
      <section id="immigration" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Immigration documents and passport"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-950/10 rounded-full z-0"></div>
            </div>

            <div>
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
                Service 2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Immigration Assistance</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our immigration assistance service helps you navigate the complex process of obtaining a Canadian study
                permit and preparing for your journey.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Study Permit Guidance</h3>
                    <p className="text-gray-700">
                      We provide step-by-step guidance on the study permit application process, ensuring you understand
                      all requirements and procedures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Documentation Preparation</h3>
                    <p className="text-gray-700">
                      We help you prepare all necessary documents for your study permit application, including financial
                      proof, statement of purpose, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Immigration Lawyer Referrals</h3>
                    <p className="text-gray-700">
                      For complex cases, we can refer you to certified immigration lawyers who specialize in student
                      visas and immigration matters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Pre-departure Briefings</h3>
                    <p className="text-gray-700">
                      We conduct comprehensive briefings to prepare you for arrival in Canada, including what to expect
                      at immigration, what to pack, and more.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement Services Section */}
      <section id="settlement" className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
                Service 3
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Settlement Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our settlement services ensure a smooth transition to life in Canada, helping you adjust to your new
                environment with ease.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Accommodation Assistance</h3>
                    <p className="text-gray-700">
                      We help you find suitable temporary and long-term accommodation options based on your preferences
                      and budget.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Airport Pickup</h3>
                    <p className="text-gray-700">
                      We arrange for someone to meet you at the airport upon arrival and transport you to your
                      accommodation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Banking & SIM Card Setup</h3>
                    <p className="text-gray-700">
                      We assist you in opening a Canadian bank account and obtaining a local SIM card for your phone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-950 text-lg">Local Orientation</h3>
                    <p className="text-gray-700">
                      We provide orientation to help you navigate your new city, including transportation, shopping,
                      healthcare, and more.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Students exploring Toronto"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-950/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">How It Works</h2>
            <p className="text-lg text-gray-700">
              Our streamlined process ensures you receive comprehensive support at every step of your educational
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We begin with a free consultation to understand your educational goals, preferences, and requirements.",
                icon: <Clock className="h-8 w-8 text-white" />,
              },
              {
                step: "2",
                title: "Personalized Plan",
                description:
                  "We develop a customized plan outlining suitable programs, institutions, and a timeline for your application process.",
                icon: <FileText className="h-8 w-8 text-white" />,
              },
              {
                step: "3",
                title: "Application & Admission",
                description:
                  "We guide you through the application process and help you secure admission to your chosen institution.",
                icon: <GraduationCap className="h-8 w-8 text-white" />,
              },
              {
                step: "4",
                title: "Pre-departure & Settlement",
                description:
                  "We assist with visa applications, pre-departure preparations, and settlement services upon arrival in Canada.",
                icon: <Home className="h-8 w-8 text-white" />,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-xl z-10">
                  {item.step}
                </div>

                {/* Content */}
                <div className="bg-blue-50 rounded-lg p-8 pt-12 h-full relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-blue-950 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>

                  {/* Connector Line (except for last item) */}
                  {index < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-[#D4AF37]"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Packages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Service Packages</h2>
            <p className="text-lg text-gray-700">Choose the package that best suits your needs and budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                description: "Essential services for students who need guidance with the admission process.",
                price: "Contact for pricing",
                features: [
                  "Eligibility assessment",
                  "Program selection guidance",
                  "Application to 2 institutions",
                  "Basic document review",
                  "Email support",
                ],
                recommended: false,
              },
              {
                name: "Comprehensive",
                description: "Our most popular package, covering admission and immigration assistance.",
                price: "Contact for pricing",
                features: [
                  "Everything in Basic package",
                  "Application to 5 institutions",
                  "Scholarship application assistance",
                  "Study permit guidance",
                  "Document preparation",
                  "Pre-departure briefing",
                  "Priority email & phone support",
                ],
                recommended: true,
              },
              {
                name: "Premium",
                description: "Complete end-to-end support from application to settlement in Canada.",
                price: "Contact for pricing",
                features: [
                  "Everything in Comprehensive package",
                  "Unlimited institution applications",
                  "Accommodation assistance",
                  "Airport pickup",
                  "Banking & SIM card setup",
                  "Local orientation",
                  "24/7 support for first month in Canada",
                ],
                recommended: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${pkg.recommended ? "transform scale-105 shadow-xl" : "shadow-md"}`}
              >
                {pkg.recommended && (
                  <div className="bg-[#D4AF37] text-white text-center py-2 font-medium">Most Popular</div>
                )}
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">{pkg.name}</h3>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <p className="text-xl font-bold text-blue-950 mb-6">{pkg.price}</p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button
                      className={`w-full ${pkg.recommended ? "bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950" : "bg-blue-950 hover:bg-blue-900 text-white"}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">What Our Students Say</h2>
            <p className="text-lg text-gray-700">
              Hear from students who have successfully achieved their educational goals with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg relative">
              <div className="text-[#D4AF37] text-6xl absolute top-4 left-4 opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  "IECS made my dream of studying in Canada a reality. Their guidance throughout the admission and visa
                  process was invaluable. I'm now pursuing my MBA at the University of Toronto, and I couldn't have done
                  it without their support."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Priya Sharma"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Priya Sharma</p>
                    <p className="text-sm text-gray-600">India • MBA, University of Toronto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg relative">
              <div className="text-[#D4AF37] text-6xl absolute top-4 left-4 opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  "The personalized attention and detailed guidance I received from IECS was exceptional. They helped me
                  secure a scholarship that made my education affordable. Their settlement services also made my
                  transition to Canada smooth and stress-free."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90o-1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Kwame Osei"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Kwame Osei</p>
                    <p className="text-sm text-gray-600">Ghana • Engineering, McGill University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white">
                Read More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">Find answers to common questions about our services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="admission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="admission">Admission</TabsTrigger>
                <TabsTrigger value="immigration">Immigration</TabsTrigger>
                <TabsTrigger value="settlement">Settlement</TabsTrigger>
              </TabsList>

              <TabsContent value="admission" className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      How do you select the right programs and institutions for me?
                    </h3>
                    <p className="text-gray-700">
                      We conduct a thorough assessment of your academic background, career goals, budget, and
                      preferences. Based on this information, we recommend programs and institutions that align with
                      your profile and aspirations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">How many institutions can I apply to?</h3>
                    <p className="text-gray-700">
                      The number of institutions depends on the service package you choose. Our Basic package includes
                      applications to 2 institutions, Comprehensive to 5 institutions, and Premium offers unlimited
                      applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      What is your success rate for admissions?
                    </h3>
                    <p className="text-gray-700">
                      We maintain a 95% success rate for admissions. This high rate is achieved through careful
                      selection of programs that match your profile and thorough preparation of application materials.
                      We also maintain strong relationships with admissions officers at various institutions, which
                      helps us understand their requirements and preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      Do you offer scholarship application assistance?
                    </h3>
                    <p className="text-gray-700">
                      Yes, we provide comprehensive scholarship guidance as part of our Comprehensive and Premium
                      packages. We identify scholarship opportunities you're eligible for and assist with the
                      application process to maximize your chances of receiving financial aid.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="immigration" className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      What is your success rate for study permit applications?
                    </h3>
                    <p className="text-gray-700">
                      Our success rate for study permit applications is approximately 90%. We achieve this by ensuring
                      all documentation is complete and accurate, and by preparing students thoroughly for the
                      application process.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      How long does the study permit application process take?
                    </h3>
                    <p className="text-gray-700">
                      Processing times vary by country, but generally range from 4 to 12 weeks. We recommend starting
                      the process at least 3-4 months before your intended start date to allow for any delays.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      Do you provide assistance with visa interviews?
                    </h3>
                    <p className="text-gray-700">
                      Yes, we conduct mock interviews and provide guidance on how to answer common questions. We also
                      advise on appropriate documentation to bring to the interview and proper etiquette.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      What happens if my study permit application is rejected?
                    </h3>
                    <p className="text-gray-700">
                      In the rare event of a rejection, we analyze the reasons provided and develop a strategy for
                      reapplication or appeal. This may involve strengthening certain aspects of your application or
                      addressing specific concerns raised by immigration officials.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settlement" className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      What type of accommodation assistance do you provide?
                    </h3>
                    <p className="text-gray-700">
                      We help you find suitable accommodation based on your preferences and budget. Options include
                      on-campus housing, homestays, shared apartments, and private rentals. We provide information on
                      different neighborhoods, proximity to campus, and cost of living.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">
                      How does the airport pickup service work?
                    </h3>
                    <p className="text-gray-700">
                      Once you provide us with your flight details, we arrange for a representative to meet you at the
                      airport upon arrival. They will be holding a sign with your name and will transport you directly
                      to your accommodation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">What banking assistance do you provide?</h3>
                    <p className="text-gray-700">
                      We help you understand the Canadian banking system, compare different banks and account options,
                      and accompany you to open a bank account. We also assist with setting up online banking and
                      understanding banking fees and services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-950 mb-2">What does the local orientation include?</h3>
                    <p className="text-gray-700">
                      Our local orientation includes familiarizing you with your neighborhood, public transportation,
                      shopping areas, healthcare facilities, and campus surroundings. We also provide information on
                      cultural norms, weather preparation, and emergency services.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Educational Journey?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and take the first step towards achieving your educational goals in
            Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white bg-transparent hover:bg-transparent">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

