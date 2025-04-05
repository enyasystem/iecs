import React from "react"
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Globe,
  Users,
  Building,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CounterAnimation from "@/components/counter-animation"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import NewsCard from "@/components/news-card"
import PartnerLogo from "@/components/partner-logo"
import ContactForm from "@/components/contact-form"
import HeroCarousel from "@/components/hero-carousel"
import ScrollToTop from "@/components/scroll-to-top"
import type { Metadata } from "next"
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
  FAQStructuredData,
  EducationalOrganizationStructuredData,
} from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Home - Your Pathway to World-Class Education in Canada",
  description:
    "International Education Consultancy Services has been guiding students to quality education in Canada since 2006. Get expert guidance for admissions, immigration, and settlement.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <OrganizationStructuredData
        url="https://www.iecservices.org"
        logo="https://www.iecservices.org/images/iecs_logo.png"
        name="International Education Consultancy Services"
        contactPoint={{
          telephone: "+1-905-226-7315",
          contactType: "Customer Service",
        }}
      />

      <WebsiteStructuredData
        url="https://www.iecservices.org"
        name="International Education Consultancy Services"
        description="Your trusted partner for educational opportunities in Canada since 2006. We provide comprehensive services for international students seeking quality education."
      />

      <EducationalOrganizationStructuredData
        name="International Education Consultancy Services"
        url="https://www.iecservices.org"
        description="Your trusted partner for educational opportunities in Canada since 2006. We provide comprehensive services for international students seeking quality education."
        address={{
          streetAddress: "123 Education Avenue, Suite 200",
          addressLocality: "Toronto",
          addressRegion: "ON",
          postalCode: "M5V 2K7",
          addressCountry: "Canada",
        }}
        telephone="+1-905-226-7315"
        email="info@iecservices.org"
      />

      <FAQStructuredData
        questions={[
          {
            question: "What services does IECS provide?",
            answer:
              "IECS provides comprehensive education consultancy services including admission processing, immigration assistance, and settlement services. We guide students through the entire process from choosing the right program and institution to settling in Canada.",
          },
          {
            question: "How much does it cost to study in Canada?",
            answer:
              "Tuition fees in Canada vary by institution and program. Undergraduate programs typically range from $20,000 to $35,000 per year, while postgraduate programs can range from $18,000 to $45,000 per year. High school programs generally cost between $15,000 and $20,000 per year. Living expenses will add approximately $12,000 to $15,000 per year.",
          },
          {
            question: "What are the requirements for a Canadian study permit?",
            answer:
              "To obtain a Canadian study permit, you need an acceptance letter from a designated learning institution, proof of financial support, and a clean criminal record. You may also need to undergo a medical examination and provide biometrics. Our immigration assistance service helps you navigate these requirements.",
          },
          {
            question: "How long does the application process take?",
            answer:
              "The application process timeline varies depending on the institution and program. Generally, it takes 2-3 months for admission processing and an additional 2-3 months for the study permit application. We recommend starting the process at least 6-8 months before your intended start date.",
          },
          {
            question: "Can I work while studying in Canada?",
            answer:
              "Yes, international students in Canada can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. This allows you to gain valuable work experience and supplement your income while studying.",
          },
          {
            question: "Does IECS offer scholarship guidance?",
            answer:
              "Yes, we provide comprehensive scholarship guidance as part of our admission processing service. We help identify scholarship opportunities you're eligible for and assist with the application process to maximize your chances of receiving financial aid.",
          },
        ]}
      />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Introduction Section */}
      <section id="introduction" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Diverse group of international students"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-950/10 rounded-full z-0"></div>
            </div>
            <div>
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
                About IECS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Guiding International Students to Success
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                For over 18 years, International Education Consultancy Services has been the trusted partner for
                students seeking quality education in Canada. With expertise spanning across 7 countries and
                comprehensive services from admission processing to settlement assistance, we've helped over 5,000
                students achieve their educational dreams.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of experienced consultants provides personalized guidance throughout your educational journey,
                ensuring a smooth transition to studying and living in Canada.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-blue-950" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-950">18+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-blue-950" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-950">7+</p>
                    <p className="text-gray-600">Countries Served</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-blue-950" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-950">95%</p>
                    <p className="text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-700">
              We provide comprehensive support throughout your educational journey, from application to arrival and
              beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: <GraduationCap className="h-10 w-10 text-[#D4AF37]" />,
                title: "Expert Guidance",
                description:
                  "Our consultants have in-depth knowledge of Canadian education systems and immigration processes to provide accurate, up-to-date advice.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#D4AF37]" />,
                title: "Global Reach",
                description:
                  "With experience serving students from 7+ countries, we understand the unique needs and challenges of international students.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-[#D4AF37]" />,
                title: "Proven Success",
                description:
                  "Our 95% success rate in admissions and visa approvals speaks to our commitment to excellence and attention to detail.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#D4AF37]" />,
                title: "Personalized Service",
                description:
                  "We create customized education plans tailored to your academic background, career goals, and personal preferences.",
              },
              {
                icon: <Building className="h-10 w-10 text-[#D4AF37]" />,
                title: "Institutional Partnerships",
                description:
                  "Our strong relationships with Canadian institutions ensure you have access to the best programs and scholarship opportunities.",
              },
              {
                icon: <ArrowRight className="h-10 w-10 text-[#D4AF37]" />,
                title: "End-to-End Support",
                description:
                  "From application to arrival, we provide comprehensive assistance at every step of your educational journey.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-2">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-blue-950">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Services</h2>
            <p className="text-lg text-gray-700">
              Comprehensive support for international students at every stage of their educational journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <ServiceCard
              title="Admission Processing"
              description="From eligibility assessment to application submission and scholarship guidance, we handle the entire admission process."
              icon="GraduationCap"
              href="/services#admission"
              features={[
                "Free eligibility assessment",
                "Application submission",
                "Scholarship guidance",
                "Documentation verification",
              ]}
            />
            <ServiceCard
              title="Immigration Assistance"
              description="Get expert guidance on study permits, documentation preparation, and pre-departure briefings."
              icon="FileText"
              href="/services#immigration"
              features={[
                "Study permit guidance",
                "Documentation preparation",
                "Immigration lawyer referrals",
                "Pre-departure briefings",
              ]}
            />
            <ServiceCard
              title="Settlement Services"
              description="We help with accommodation, airport pickup, banking setup, and local orientation to ensure a smooth transition."
              icon="Home"
              href="/services#settlement"
              features={["Accommodation assistance", "Airport pickup", "Banking & SIM setup", "Local orientation"]}
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Educational Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Featured Programs</h2>
            <p className="text-lg text-gray-700">
              Explore top educational programs across various fields and institutions in Canada.
            </p>
          </div>

          <Tabs defaultValue="undergraduate" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              <TabsTrigger value="highschool">High School</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Business Administration",
                    institution: "University of Toronto",
                    duration: "4 years",
                    tuition: "$28,000/year",
                    image:
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Computer Science",
                    institution: "University of Waterloo",
                    duration: "4 years",
                    tuition: "$32,000/year",
                    image:
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Engineering",
                    institution: "McGill University",
                    duration: "4 years",
                    tuition: "$30,000/year",
                    image:
                      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Health Sciences",
                    institution: "McMaster University",
                    duration: "4 years",
                    tuition: "$29,000/year",
                    image:
                      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                ].map((program, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">{program.title}</CardTitle>
                      <CardDescription>{program.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Tuition</p>
                          <p className="font-medium">{program.tuition}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/programs"
                        className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="postgraduate" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "MBA",
                    institution: "Rotman School of Management",
                    duration: "2 years",
                    tuition: "$45,000/year",
                    image:
                      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Data Science",
                    institution: "University of British Columbia",
                    duration: "1.5 years",
                    tuition: "$38,000/year",
                    image:
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Public Health",
                    institution: "University of Alberta",
                    duration: "2 years",
                    tuition: "$32,000/year",
                    image:
                      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Environmental Science",
                    institution: "Dalhousie University",
                    duration: "2 years",
                    tuition: "$30,000/year",
                    image:
                      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                ].map((program, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">{program.title}</CardTitle>
                      <CardDescription>{program.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Tuition</p>
                          <p className="font-medium">{program.tuition}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/programs"
                        className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="highschool" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "International Baccalaureate",
                    institution: "Milton High School",
                    duration: "2 years",
                    tuition: "$18,000/year",
                    image:
                      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
                  },
                  {
                    title: "Ontario Secondary School Diploma",
                    institution: "Toronto International Academy",
                    duration: "2-4 years",
                    tuition: "$16,000/year",
                    image:
                      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Advanced Placement Program",
                    institution: "Brampton Academy",
                    duration: "2 years",
                    tuition: "$17,000/year",
                    image:
                      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "Canadian High School Diploma",
                    institution: "Mississauga Secondary School",
                    duration: "2-4 years",
                    tuition: "$15,000/year",
                    image:
                      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                ].map((program, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">{program.title}</CardTitle>
                      <CardDescription>{program.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Tuition</p>
                          <p className="font-medium">{program.tuition}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/programs"
                        className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                Explore All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="w-full py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-900 text-white rounded-full font-medium text-sm mb-4">
              Our Track Record
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-lg text-white/80">We take pride in our achievements and the success of our students.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 5000, label: "Students Placed", suffix: "+", icon: <Users className="h-10 w-10" /> },
              { value: 7, label: "Countries Served", suffix: "", icon: <Globe className="h-10 w-10" /> },
              { value: 50, label: "Partner Institutions", suffix: "+", icon: <Building className="h-10 w-10" /> },
              { value: 95, label: "Success Rate", suffix: "%", icon: <CheckCircle className="h-10 w-10" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-blue-900/50 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    {React.cloneElement(stat.icon, { className: "h-8 w-8 text-[#D4AF37]" })}
                  </div>
                </div>
                <div className="flex justify-center">
                  <CounterAnimation
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2"
                  />
                </div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="IECS made my dream of studying in Canada a reality. Their guidance throughout the admission and visa process was invaluable."
              name="Priya Sharma"
              country="India"
              program="MBA, University of Toronto"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <TestimonialCard
              quote="The personalized attention and detailed guidance I received from IECS was exceptional. They helped me secure a scholarship that made my education affordable."
              name="Kwame Osei"
              country="Ghana"
              program="Engineering, McGill University"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <TestimonialCard
              quote="From application to arrival, IECS was with me every step of the way. Their settlement services made my transition to Canada smooth and stress-free."
              name="Daniel Adeyemi"
              country="Nigeria"
              program="Computer Science, University of Waterloo"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Network
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Partner Institutions</h2>
            <p className="text-lg text-gray-700">We collaborate with leading educational institutions across Canada.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <PartnerLogo name="University of Toronto" />
            <PartnerLogo name="McGill University" />
            <PartnerLogo name="University of British Columbia" />
            <PartnerLogo name="University of Waterloo" />
            <PartnerLogo name="McMaster University" />
            <PartnerLogo name="University of Alberta" />
            <PartnerLogo name="Queen's University" />
            <PartnerLogo name="Western University" />
            <PartnerLogo name="Dalhousie University" />
            <PartnerLogo name="York University" />
            <PartnerLogo name="Ryerson University" />
            <PartnerLogo name="Milton High School" />
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Stay Informed
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Latest News & Updates</h2>
            <p className="text-lg text-gray-700">
              Keep up with the latest developments in Canadian education and immigration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              title="New Scholarship Opportunities for International Students"
              excerpt="The Canadian government has announced new scholarship programs for international students in STEM fields."
              date="June 15, 2024"
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Scholarships"
            />
            <NewsCard
              title="Changes to Student Visa Requirements"
              excerpt="Important updates to the documentation requirements for Canadian study permits effective September 2024."
              date="May 28, 2024"
              image="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Immigration"
            />
            <NewsCard
              title="IECS Expands Services to Vietnam"
              excerpt="We're excited to announce the expansion of our consultancy services to students from Vietnam."
              date="April 10, 2024"
              image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Company News"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/news">
              <Button variant="outline" className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
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
            <p className="text-lg text-gray-700">
              Find answers to common questions about studying in Canada and our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What services does IECS provide?",
                  answer:
                    "IECS provides comprehensive education consultancy services including admission processing, immigration assistance, and settlement services. We guide students through the entire process from choosing the right program and institution to settling in Canada.",
                },
                {
                  question: "How much does it cost to study in Canada?",
                  answer:
                    "Tuition fees in Canada vary by institution and program. Undergraduate programs typically range from $20,000 to $35,000 per year, while postgraduate programs can range from $18,000 to $45,000 per year. High school programs generally cost between $15,000 and $20,000 per year. Living expenses will add approximately $12,000 to $15,000 per year.",
                },
                {
                  question: "What are the requirements for a Canadian study permit?",
                  answer:
                    "To obtain a Canadian study permit, you need an acceptance letter from a designated learning institution, proof of financial support, and a clean criminal record. You may also need to undergo a medical examination and provide biometrics. Our immigration assistance service helps you navigate these requirements.",
                },
                {
                  question: "How long does the application process take?",
                  answer:
                    "The application process timeline varies depending on the institution and program. Generally, it takes 2-3 months for admission processing and an additional 2-3 months for the study permit application. We recommend starting the process at least 6-8 months before your intended start date.",
                },
                {
                  question: "Can I work while studying in Canada?",
                  answer:
                    "Yes, international students in Canada can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. This allows you to gain valuable work experience and supplement your income while studying.",
                },
                {
                  question: "Does IECS offer scholarship guidance?",
                  answer:
                    "Yes, we provide comprehensive scholarship guidance as part of our admission processing service. We help identify scholarship opportunities you're eligible for and assist with the application process to maximize your chances of receiving financial aid.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-blue-200">
                  <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Ready to Start Your Educational Journey?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact us today for a free consultation and take the first step towards achieving your educational
                goals in Canada.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Call Us</p>
                    <p className="text-gray-700">Phone: (905) 226-7315</p>
                    <p className="text-gray-700">
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
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Email Us</p>
                    <p className="text-gray-700">info@iecservices.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blue-950" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Visit Us</p>
                    <p className="text-gray-700">
                      123 Education Avenue, Suite 200
                      <br />
                      Toronto, ON M5V 2K7
                      <br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-950 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-950 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-950 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Canadian Education Journey Today</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you navigate the path to quality education in Canada. Our expert consultants are ready to guide
            you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-transparent hover:bg-gray-500 hover:border-gray-500 hover:text-white"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}

