import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building, GraduationCap, CheckCircle, Search, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Partner Institutions - Our Network of Educational Partners",
  description:
    "Explore our extensive network of partner institutions across Canada, including top universities, colleges, and high schools that offer quality education to international students.",
  alternates: {
    canonical: "/partners",
  },
}

export default function PartnersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Partner Institutions", item: "https://www.iecservices.org/partners" },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Our Partner Institutions</h1>
            <p className="text-lg text-gray-700 mb-8">
              We collaborate with leading educational institutions across Canada to provide our students with access to
              quality education and exceptional learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search institutions..." className="pl-10" />
              </div>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Location..." className="pl-10" />
              </div>
              <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                Find Institutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Top Collaborations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Featured Partner Institutions</h2>
            <p className="text-lg text-gray-700">
              These prestigious institutions have established strong relationships with IECS, offering special benefits
              to our students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "University of Toronto",
                type: "University",
                location: "Toronto, Ontario",
                description:
                  "One of Canada's most prestigious universities, offering a wide range of undergraduate and graduate programs across various disciplines.",
                image:
                  "https://www.trinity.utoronto.ca/wp-content/uploads/2019/01/trinity-home-wide-01.jpg",
                benefits: [
                  "Priority application processing",
                  "Exclusive scholarship opportunities",
                  "Pre-arrival orientation",
                ],
                ranking: "#1 in Canada",
                programs: 700,
              },
              {
                name: "McGill University",
                type: "University",
                location: "Montreal, Quebec",
                description:
                  "A world-renowned institution known for its excellence in research and education, offering programs in both English and French.",
                image:
                  "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                benefits: ["Application fee waivers", "Dedicated international student support", "Housing priority"],
                ranking: "#2 in Canada",
                programs: 400,
              },
              {
                name: "Seneca College",
                type: "College",
                location: "Toronto, Ontario",
                description:
                  "One of Canada's largest colleges, offering career-focused programs with strong industry connections and pathways to university degrees.",
                image:
                  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80",
                benefits: ["Guaranteed admission pathways", "Co-op opportunities", "Career placement services"],
                ranking: "Top 5 Colleges in Ontario",
                programs: 290,
              },
              {
                name: "Mohawk College",
                type: "College",
                location: "Hamilton, Ontario",
                description:
                  "A leading college known for its innovative programs, applied research, and strong industry partnerships, providing hands-on learning experiences.",
                image:
                  "https://www.mohawkcollege.ca/sites/default/files/Campuses%20and%20Maps/ff-fennell-exterior2-820x370.png",
                benefits: [
                  "Industry-connected programs",
                  "Work-integrated learning",
                  "Student success services",
                ],
                ranking: "Top Ontario College",
                programs: 150,
              },
            ].map((institution, index) => (
              <Card key={index} className="overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={institution.image || "/placeholder.svg"}
                    alt={institution.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-950 hover:bg-blue-100">
                      {institution.type}
                    </Badge>
                    <Badge variant="secondary" className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                      {institution.ranking}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-950">{institution.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Globe className="h-4 w-4 mr-1 text-gray-500" />
                    {institution.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{institution.description}</p>
                  <div className="space-y-2 mb-4">
                    <p className="font-medium text-blue-950">Key Benefits:</p>
                    {institution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">{institution.programs}+</span> programs available
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Link href={`/partners/${institution.name.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                    <Button className="w-full bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                      View Institution Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Browse by Type
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Network</h2>
            <p className="text-lg text-gray-700">
              Explore our extensive network of educational institutions across different categories.
            </p>
          </div>

          <Tabs defaultValue="universities" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="universities">Universities</TabsTrigger>
              <TabsTrigger value="colleges">Colleges</TabsTrigger>
              <TabsTrigger value="highschools">High Schools</TabsTrigger>
            </TabsList>

            <TabsContent value="universities" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "University of Toronto",
                    location: "Toronto, Ontario",
                    image:
                      "https://www.trinity.utoronto.ca/wp-content/uploads/2019/01/trinity-home-wide-01.jpg",
                    programs: ["Business", "Engineering", "Medicine", "Arts & Science"],
                  },
                  {
                    name: "McGill University",
                    location: "Montreal, Quebec",
                    image:
                      "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Law", "Medicine", "Engineering", "Business"],
                  },
                  {
                    name: "University of British Columbia",
                    location: "Vancouver, British Columbia",
                    image:
                      "https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI_g.jpg",
                    programs: ["Computer Science", "Environmental Studies", "Business", "Arts"],
                  },
                  {
                    name: "University of Waterloo",
                    location: "Waterloo, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                    programs: ["Computer Science", "Engineering", "Mathematics", "Health Sciences"],
                  },
                  {
                    name: "McMaster University",
                    location: "Hamilton, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Health Sciences", "Engineering", "Business", "Humanities"],
                  },
                  {
                    name: "University of Alberta",
                    location: "Edmonton, Alberta",
                    image:
                      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Engineering", "Business", "Sciences", "Arts"],
                  },
                  {
                    name: "Queen's University",
                    location: "Kingston, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    programs: ["Commerce", "Engineering", "Arts", "Health Sciences"],
                  },
                  {
                    name: "Western University",
                    location: "London, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    programs: ["Business", "Medicine", "Law", "Engineering"],
                  },
                ].map((university, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={university.image || "/placeholder.svg"}
                        alt={university.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-blue-950">{university.name}</CardTitle>
                      <CardDescription className="flex items-center text-xs">
                        <Globe className="h-3 w-3 mr-1 text-gray-500" />
                        {university.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-wrap gap-1">
                        {university.programs.map((program, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs"
                          >
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link
                        href={`/partners/${university.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-blue-950 font-medium hover:text-[#D4AF37] text-sm inline-flex items-center"
                      >
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="colleges" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Seneca College",
                    location: "Toronto, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80",
                    programs: ["Business", "Technology", "Health Sciences", "Creative Arts"],
                  },
                  {
                    name: "Humber College",
                    location: "Toronto, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Media Studies", "Hospitality", "Engineering", "Business"],
                  },
                  {
                    name: "George Brown College",
                    location: "Toronto, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Culinary Arts", "Design", "Health Sciences", "Business"],
                  },
                  {
                    name: "Centennial College",
                    location: "Toronto, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    programs: ["Aviation", "Business", "Engineering", "Hospitality"],
                  },
                  {
                    name: "Conestoga College",
                    location: "Kitchener, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Engineering", "IT", "Business", "Health"],
                  },
                  {
                    name: "Algonquin College",
                    location: "Ottawa, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Media", "Technology", "Health", "Business"],
                  },
                  {
                    name: "Sheridan College",
                    location: "Oakville, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Animation", "Design", "Business", "Technology"],
                  },
                  {
                    name: "Fanshawe College",
                    location: "London, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1517245859790-0a3449d1df0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Media", "Design", "Health", "Technology"],
                  },
                ].map((college, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={college.image || "/placeholder.svg"}
                        alt={college.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-blue-950">{college.name}</CardTitle>
                      <CardDescription className="flex items-center text-xs">
                        <Globe className="h-3 w-3 mr-1 text-gray-500" />
                        {college.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-wrap gap-1">
                        {college.programs.map((program, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs"
                          >
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link
                        href={`/partners/${college.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-blue-950 font-medium hover:text-[#D4AF37] text-sm inline-flex items-center"
                      >
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="highschools" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Toronto International Academy",
                    location: "Toronto, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Ontario Curriculum", "University Preparation", "ESL"],
                  },
                  {
                    name: "Milton High School",
                    location: "Milton, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
                    programs: ["IB Program", "STEM Focus", "Arts Program"],
                  },
                  {
                    name: "Brampton Academy",
                    location: "Brampton, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["AP Courses", "University Preparation", "ESL"],
                  },
                  {
                    name: "Mississauga Secondary School",
                    location: "Mississauga, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Canadian Curriculum", "STEM", "Arts"],
                  },
                  {
                    name: "Vancouver College",
                    location: "Vancouver, British Columbia",
                    image:
                      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["BC Curriculum", "University Preparation", "ESL"],
                  },
                  {
                    name: "Calgary International Academy",
                    location: "Calgary, Alberta",
                    image:
                      "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Alberta Curriculum", "IB Program", "ESL"],
                  },
                  {
                    name: "Montreal Prep School",
                    location: "Montreal, Quebec",
                    image:
                      "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["Quebec Curriculum", "Bilingual Education", "University Prep"],
                  },
                  {
                    name: "Ottawa International School",
                    location: "Ottawa, Ontario",
                    image:
                      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    programs: ["IB Program", "Ontario Curriculum", "ESL"],
                  },
                ].map((school, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={school.image || "/placeholder.svg"}
                        alt={school.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-blue-950">{school.name}</CardTitle>
                      <CardDescription className="flex items-center text-xs">
                        <Globe className="h-3 w-3 mr-1 text-gray-500" />
                        {school.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-wrap gap-1">
                        {school.programs.map((program, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs"
                          >
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link
                        href={`/partners/${school.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-blue-950 font-medium hover:text-[#D4AF37] text-sm inline-flex items-center"
                      >
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
              Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Benefits of Our Partnerships</h2>
            <p className="text-lg text-gray-700">
              Our strong relationships with educational institutions provide numerous advantages for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Priority Admission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our students receive priority consideration for admission to our partner institutions, increasing
                  their chances of acceptance to their preferred programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Exclusive Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Many of our partner institutions offer exclusive scholarships and financial aid opportunities
                  specifically for students referred by IECS.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Housing Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our students often receive priority for on-campus housing and access to exclusive off-campus housing
                  options arranged through our partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Application Fee Waivers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Many partner institutions waive application fees for IECS students, saving you money during the
                  application process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Pre-Arrival Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our partner institutions provide specialized pre-arrival orientation and support services to help you
                  prepare for your studies in Canada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <CardTitle className="text-xl text-blue-950">Pathway Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We've established special pathway programs that allow students to transition smoothly from colleges to
                  universities or from language programs to academic studies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Partner Institution Testimonials</h2>
            <p className="text-lg text-gray-700">
              Hear what representatives from our partner institutions have to say about working with IECS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg relative">
              <div className="text-[#D4AF37] text-6xl absolute top-4 left-4 opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  "IECS has been an invaluable partner in our international recruitment efforts. The students they refer
                  are well-prepared, motivated, and have a high success rate in our programs. Their comprehensive
                  support services ensure a smooth transition for students coming to our institution."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Dr. Michael Chen"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Dr. Michael Chen</p>
                    <p className="text-sm text-gray-600">Director of International Admissions, University of Toronto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg relative">
              <div className="text-[#D4AF37] text-6xl absolute top-4 left-4 opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  "We've partnered with IECS for over a decade, and they consistently send us high-caliber students who
                  are well-matched to our programs. Their thorough understanding of our admission requirements and
                  program offerings ensures that students are set up for success from day one."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Sarah Johnson"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">International Student Coordinator, Seneca College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Study at One of Our Partner Institutions?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and take the first step towards achieving your educational goals at
            one of our prestigious partner institutions in Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white bg-transparent hover:bg-transparent">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

