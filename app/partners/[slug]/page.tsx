import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Calendar,
  GraduationCap,
  Award,
  Building,
  Users,
  CheckCircle,
  Clock,
  FileText,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"
import type { Metadata } from "next"

// This would typically come from a database or API
// For this example, we're hardcoding the data for University of Toronto
const partnerData = {
  name: "University of Toronto",
  slug: "university-of-toronto",
  type: "University",
  location: "Toronto, Ontario",
  established: "1827",
  students: "93,000+",
  international: "25%",
  ranking: "#1 in Canada, #18 Worldwide",
  description:
    "The University of Toronto is a globally top-ranked public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for influential movements and curricula in literary criticism and communication theory, known collectively as the Toronto School.",
  longDescription:
    "The University of Toronto has evolved into Canada's leading institution of learning, discovery and knowledge creation. We are proud to be one of the world's top research-intensive universities, driven to invent and innovate. Our students have the opportunity to learn from and work with preeminent thought leaders through our multidisciplinary network of teaching and research faculty, alumni and partners. The ideas, innovations and actions of more than 600,000 graduates continue to have a positive impact on the world.",
  image:
    "https://images.unsplash.com/photo-1569523276741-567df2a69a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  campusImages: [
    "https://images.unsplash.com/photo-1569523276741-567df2a69a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ],
  faculties: [
    "Arts & Science",
    "Applied Science & Engineering",
    "Architecture",
    "Music",
    "Medicine",
    "Law",
    "Management",
    "Education",
    "Information",
    "Public Health",
    "Nursing",
  ],
  programs: [
    {
      name: "Computer Science",
      level: "Undergraduate",
      duration: "4 years",
      tuition: "$58,680/year",
      description:
        "The Computer Science program at the University of Toronto is designed to give students a broad foundation in the field, with opportunities to specialize in areas such as artificial intelligence, computer systems, and theory of computation.",
    },
    {
      name: "Business Administration",
      level: "Undergraduate",
      duration: "4 years",
      tuition: "$62,250/year",
      description:
        "The Business Administration program provides students with a comprehensive understanding of business principles and practices, with specializations available in finance, marketing, management, and accounting.",
    },
    {
      name: "Engineering Science",
      level: "Undergraduate",
      duration: "4 years",
      tuition: "$64,810/year",
      description:
        "The Engineering Science program is an elite program that provides students with a rigorous foundation in mathematics, science, and engineering, with opportunities to specialize in various engineering disciplines.",
    },
    {
      name: "MBA",
      level: "Graduate",
      duration: "2 years",
      tuition: "$95,000/year",
      description:
        "The MBA program at Rotman School of Management is designed to develop innovative leaders who can transform business and society. The program emphasizes integrative thinking, responsible leadership, and global perspective.",
    },
    {
      name: "Master of Computer Science",
      level: "Graduate",
      duration: "1-2 years",
      tuition: "$59,320/year",
      description:
        "The Master of Computer Science program allows students to deepen their knowledge in specific areas of computer science, with research opportunities in cutting-edge fields such as artificial intelligence, machine learning, and data science.",
    },
    {
      name: "PhD in Medicine",
      level: "Graduate",
      duration: "4-5 years",
      tuition: "$28,290/year",
      description:
        "The PhD in Medicine program prepares students for careers in medical research, with opportunities to work with world-renowned researchers on groundbreaking medical discoveries and innovations.",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed secondary education equivalent to Canadian Grade 12",
      "Minimum GPA of 3.6 on a 4.0 scale (or equivalent)",
      "English language proficiency (IELTS: 6.5+, TOEFL iBT: 100+)",
      "Specific subject prerequisites depending on the program",
      "Statement of purpose",
      "Letters of recommendation",
    ],
    graduate: [
      "Completed undergraduate degree from a recognized institution",
      "Minimum GPA of 3.3 on a 4.0 scale (or equivalent)",
      "English language proficiency (IELTS: 7.0+, TOEFL iBT: 93+)",
      "Statement of purpose",
      "Letters of recommendation",
      "CV/Resume",
      "GRE/GMAT scores (for some programs)",
      "Research proposal (for research-based programs)",
    ],
  },
  scholarships: [
    {
      name: "Lester B. Pearson International Scholarship",
      amount: "Full tuition + living expenses",
      eligibility: "International students with exceptional academic achievement and leadership",
    },
    {
      name: "University of Toronto International Scholar Award",
      amount: "$10,000 - $25,000",
      eligibility: "International students with outstanding academic achievement",
    },
    {
      name: "Faculty of Arts & Science International Scholarship",
      amount: "$5,000 - $20,000",
      eligibility: "International students admitted to the Faculty of Arts & Science",
    },
    {
      name: "Engineering International Scholarship",
      amount: "$5,000 - $15,000",
      eligibility: "International students admitted to Engineering programs",
    },
  ],
  facilities: [
    "State-of-the-art research laboratories",
    "Multiple libraries with extensive collections",
    "Modern lecture halls and classrooms",
    "Athletic facilities including gyms, pools, and sports fields",
    "Student residences and housing",
    "Health and wellness centers",
    "Career centers and job placement services",
    "International student support services",
  ],
  studentLife: [
    "400+ student clubs and organizations",
    "Vibrant campus community with events throughout the year",
    "Diverse cultural associations and international student groups",
    "Competitive varsity sports teams",
    "Recreational sports and fitness programs",
    "Arts and cultural performances",
    "Volunteer and community service opportunities",
  ],
  testimonials: [
    {
      quote:
        "Studying at the University of Toronto has been a transformative experience. The academic rigor, diverse community, and abundant resources have prepared me well for my future career.",
      name: "Priya Sharma",
      program: "Computer Science",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "The MBA program at Rotman has exceeded my expectations. The faculty are world-class, the networking opportunities are invaluable, and the curriculum is cutting-edge.",
      name: "Daniel Adeyemi",
      program: "MBA",
      country: "Nigeria",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ],
  iecsPartnershipBenefits: [
    "Priority application processing for IECS students",
    "Application fee waivers",
    "Exclusive scholarship opportunities",
    "Pre-arrival orientation sessions",
    "Guaranteed housing for first-year students",
    "Dedicated academic advisor for IECS students",
  ],
}

// This would be a dynamic function in a real application
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  // In a real app, you would fetch the data based on the slug
  return {
    title: `${partnerData.name} - Partner Institution Profile`,
    description: `Learn about ${partnerData.name}, one of our prestigious partner institutions. Explore programs, admission requirements, scholarships, and more.`,
    alternates: {
      canonical: `/partners/${params.slug}`,
    },
  }
}

export default function PartnerDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the data based on the slug
  // For this example, we're using the hardcoded data for University of Toronto

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Partner Institutions", item: "https://www.iecservices.org/partners" },
          { name: partnerData.name, item: `https://www.iecservices.org/partners/${params.slug}` },
        ]}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Partner Institutions", href: "/partners" },
          { label: partnerData.name, href: `/partners/${params.slug}`, isCurrent: true },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/partners" className="inline-flex items-center text-blue-950 hover:text-[#D4AF37] mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Partners
              </Link>
              <div className="flex items-center mb-4">
                <Badge variant="outline" className="bg-blue-100 text-blue-950 border-blue-200 mr-2">
                  {partnerData.type}
                </Badge>
                <Badge variant="secondary" className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                  {partnerData.ranking}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">{partnerData.name}</h1>
              <p className="flex items-center text-gray-700 mb-6">
                <Globe className="h-5 w-5 mr-2 text-[#D4AF37]" />
                {partnerData.location}
              </p>
              <p className="text-lg text-gray-700 mb-8">{partnerData.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Established</p>
                  <p className="text-lg font-bold text-blue-950">{partnerData.established}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Students</p>
                  <p className="text-lg font-bold text-blue-950">{partnerData.students}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">International</p>
                  <p className="text-lg font-bold text-blue-950">{partnerData.international}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Faculties</p>
                  <p className="text-lg font-bold text-blue-950">{partnerData.faculties.length}+</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#programs">
                  <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#admission">
                  <Button
                    variant="outline"
                    className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                  >
                    Admission Requirements
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={partnerData.image || "/placeholder.svg"}
                  alt={partnerData.name}
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

      {/* Overview Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
                About
              </div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Institution Overview</h2>
              <p className="text-lg text-gray-700 mb-6">{partnerData.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-4">Faculties & Schools</h3>
                  <ul className="space-y-2">
                    {partnerData.faculties.map((faculty, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{faculty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-4">Campus Facilities</h3>
                  <ul className="space-y-2">
                    {partnerData.facilities.slice(0, 8).map((facility, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partnerData.campusImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${partnerData.name} Campus ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-md mb-6">
                <h3 className="text-xl font-bold text-blue-950 mb-4">IECS Partnership Benefits</h3>
                <p className="text-gray-700 mb-4">
                  As an IECS student, you'll enjoy these exclusive benefits when applying to {partnerData.name}:
                </p>
                <ul className="space-y-3">
                  {partnerData.iecsPartnershipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-950 rounded-lg p-6 shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <p className="mb-4">
                  Contact IECS today to start your application process to {partnerData.name}. Our consultants will guide
                  you through every step.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Academic Offerings
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Featured Programs</h2>
            <p className="text-lg text-gray-700">
              Explore some of the popular programs offered at {partnerData.name} for international students.
            </p>
          </div>

          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
            </TabsList>

            <TabsContent value="undergraduate" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {partnerData.programs
                  .filter((p) => p.level === "Undergraduate")
                  .map((program, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-950">{program.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-gray-700">{program.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Duration</p>
                              <p className="font-medium flex items-center">
                                <Clock className="h-3 w-3 mr-1 text-[#D4AF37]" />
                                {program.duration}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Tuition</p>
                              <p className="font-medium flex items-center">
                                <DollarSign className="h-3 w-3 mr-1 text-[#D4AF37]" />
                                {program.tuition}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="graduate" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {partnerData.programs
                  .filter((p) => p.level === "Graduate")
                  .map((program, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-950">{program.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-gray-700">{program.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Duration</p>
                              <p className="font-medium flex items-center">
                                <Clock className="h-3 w-3 mr-1 text-[#D4AF37]" />
                                {program.duration}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Tuition</p>
                              <p className="font-medium flex items-center">
                                <DollarSign className="h-3 w-3 mr-1 text-[#D4AF37]" />
                                {program.tuition}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">
              This is just a small selection of the programs available at {partnerData.name}. Contact IECS for
              information about other programs.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white">
                Inquire About Other Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section id="admission" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Application Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Admission Requirements</h2>
            <p className="text-lg text-gray-700">
              Learn about the requirements for admission to {partnerData.name} as an international student.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-[#D4AF37]" />
                Undergraduate Requirements
              </h3>
              <ul className="space-y-3 mb-8">
                {partnerData.admissionRequirements.undergraduate.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-950 mb-4">Application Timeline</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">Early Admission</p>
                      <p className="text-gray-700">Application Deadline: November 7</p>
                      <p className="text-gray-700">Decision By: December 15</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">Regular Admission</p>
                      <p className="text-gray-700">Application Deadline: January 15</p>
                      <p className="text-gray-700">Decision By: March 31</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">International Students</p>
                      <p className="text-gray-700">Recommended Application Deadline: December 15</p>
                      <p className="text-gray-700">To allow time for visa processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-[#D4AF37]" />
                Graduate Requirements
              </h3>
              <ul className="space-y-3 mb-8">
                {partnerData.admissionRequirements.graduate.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-950 mb-4">Application Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">Step 1: Research Programs</p>
                      <p className="text-gray-700">
                        Explore graduate programs and identify your areas of interest and potential supervisors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">Step 2: Prepare Documents</p>
                      <p className="text-gray-700">
                        Gather all required documents, including transcripts, test scores, and letters of
                        recommendation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">Step 3: Submit Application</p>
                      <p className="text-gray-700">Complete the online application and pay the application fee.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-950">Step 4: Interview (if required)</p>
                      <p className="text-gray-700">
                        Some programs may require an interview as part of the application process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              IECS can guide you through the entire application process, from document preparation to submission.
            </p>
            <Link href="/contact">
              <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                Get Application Assistance <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Financial Aid
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Scholarships & Funding</h2>
            <p className="text-lg text-gray-700">
              Explore scholarship opportunities available for international students at {partnerData.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerData.scholarships.map((scholarship, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Award className="h-6 w-6 text-[#D4AF37] mr-2" />
                    <CardTitle className="text-xl text-blue-950">{scholarship.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-500">Award Amount</p>
                      <p className="text-lg font-medium text-blue-950">{scholarship.amount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Eligibility</p>
                      <p className="text-gray-700">{scholarship.eligibility}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Scholarship Application Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Apply early to maximize your chances of receiving funding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Prepare a strong personal statement highlighting your achievements and goals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Secure strong letters of recommendation from academic references
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Research and apply for multiple scholarships to increase your chances
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Highlight your extracurricular activities and community involvement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Work with IECS consultants to strengthen your scholarship applications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Campus Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Student Life</h2>
            <p className="text-lg text-gray-700">Discover what life is like for students at {partnerData.name}.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Campus Activities</h3>
              <ul className="space-y-3 mb-8">
                {partnerData.studentLife.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-blue-950 mb-6">International Student Support</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-950">International Student Center</p>
                    <p className="text-gray-700">
                      Dedicated support services for international students, including orientation, immigration
                      advising, and cultural adjustment assistance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-950">Cultural Associations</p>
                    <p className="text-gray-700">
                      Numerous cultural clubs and associations to help you connect with students from your home country
                      and region.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-950">Housing Assistance</p>
                    <p className="text-gray-700">
                      Help finding on-campus or off-campus housing that meets your needs and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Student Testimonials</h3>
              <div className="space-y-6">
                {partnerData.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg relative">
                    <div className="text-[#D4AF37] text-4xl absolute top-4 left-4 opacity-20">"</div>
                    <div className="relative z-10">
                      <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-blue-950">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">
                            {testimonial.country} • {testimonial.program}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">City Life</h3>
                <p className="text-gray-700 mb-4">
                  {partnerData.name} is located in the vibrant city of Toronto, offering students access to a diverse
                  range of cultural, recreational, and professional opportunities. From world-class museums and theaters
                  to beautiful parks and a thriving food scene, Toronto provides an exciting backdrop for your
                  educational journey.
                </p>
                <p className="text-gray-700">
                  The city is also a major business hub, providing excellent internship and networking opportunities for
                  students across various fields of study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Find answers to common questions about studying at {partnerData.name}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-blue-200">
                <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                  What are the English language requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  For undergraduate programs, the minimum requirements are typically IELTS 6.5 (with no band below 6.0)
                  or TOEFL iBT 100. For graduate programs, the requirements are typically higher, with IELTS 7.0 (with
                  no band below 6.5) or TOEFL iBT 93. Some programs may have higher requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-blue-200">
                <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                  How competitive is admission for international students?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  Admission to {partnerData.name} is competitive, particularly for popular programs. International
                  students typically need strong academic records, with GPAs of 3.6+ for undergraduate programs and 3.3+
                  for graduate programs. However, as an IECS student, you'll benefit from our strong partnership with
                  the university, which can improve your chances of admission.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-blue-200">
                <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                  What housing options are available for international students?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {partnerData.name} offers various housing options for international students, including on-campus
                  residences and off-campus housing assistance. First-year students are often given priority for
                  on-campus housing. As an IECS student, you'll receive guaranteed housing for your first year through
                  our partnership agreement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-blue-200">
                <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                  Are there work opportunities for international students?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  Yes, international students can work up to 20 hours per week during academic sessions and full-time
                  during scheduled breaks. {partnerData.name} also offers various on-campus employment opportunities,
                  co-op programs, and internships to help students gain valuable work experience while studying.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-blue-200">
                <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                  What post-graduation opportunities are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  After graduating from {partnerData.name}, international students are eligible for a Post-Graduation
                  Work Permit (PGWP), allowing them to work in Canada for up to 3 years, depending on the length of
                  their program. This provides valuable Canadian work experience and can be a pathway to permanent
                  residency through programs like Express Entry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply to {partnerData.name}?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact IECS today to start your application process. Our experienced consultants will guide you through
            every step, from document preparation to visa application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/partners">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Other Partners
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

