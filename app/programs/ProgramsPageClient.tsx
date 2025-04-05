"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, GraduationCap, BookOpen, Building, Clock, CheckCircle, Star, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"

export default function ProgramsPageClient() {
  // Sample program data - in a real application, this would come from a database or API
  const featuredPrograms = [
    {
      title: "Master of Business Administration (MBA)",
      institution: "Rotman School of Management, University of Toronto",
      duration: "2 years",
      tuition: "$45,000/year",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      level: "Postgraduate",
      tags: ["Business", "Management", "Finance"],
      rating: 4.8,
      reviews: 124,
      description:
        "The Rotman MBA is a transformative experience that will prepare you for the challenges and opportunities of a rapidly changing world. Through a rigorous curriculum and experiential learning opportunities, you'll develop the skills, knowledge, and mindset needed to lead with confidence.",
    },
    {
      title: "Computer Science",
      institution: "University of Waterloo",
      duration: "4 years",
      tuition: "$32,000/year",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      level: "Undergraduate",
      tags: ["Technology", "Programming", "Computer Science"],
      rating: 4.9,
      reviews: 156,
      description:
        "Waterloo's Computer Science program is renowned for its co-op opportunities and cutting-edge curriculum. You'll gain hands-on experience through paid internships while learning from leading researchers in artificial intelligence, data science, cybersecurity, and more.",
    },
    {
      title: "International Baccalaureate (IB) Diploma",
      institution: "Toronto International Academy",
      duration: "2 years",
      tuition: "$18,000/year",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
      level: "High School",
      tags: ["International Curriculum", "University Preparation"],
      rating: 4.7,
      reviews: 89,
      description:
        "The IB Diploma is a globally recognized qualification that prepares students for success at university and beyond. The program emphasizes critical thinking, research skills, and international-mindedness, providing an excellent foundation for higher education.",
    },
  ]

  const undergraduatePrograms = [
    {
      title: "Business Administration",
      institution: "University of Toronto",
      duration: "4 years",
      tuition: "$28,000/year",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Business", "Management", "Finance"],
    },
    {
      title: "Computer Science",
      institution: "University of Waterloo",
      duration: "4 years",
      tuition: "$32,000/year",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Technology", "Programming", "Computer Science"],
    },
    {
      title: "Engineering",
      institution: "McGill University",
      duration: "4 years",
      tuition: "$30,000/year",
      image:
        "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Engineering", "Technology", "Design"],
    },
    {
      title: "Health Sciences",
      institution: "McMaster University",
      duration: "4 years",
      tuition: "$29,000/year",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Healthcare", "Medicine", "Biology"],
    },
    {
      title: "Psychology",
      institution: "University of British Columbia",
      duration: "4 years",
      tuition: "$27,000/year",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      tags: ["Psychology", "Social Sciences", "Research"],
    },
    {
      title: "Environmental Science",
      institution: "Dalhousie University",
      duration: "4 years",
      tuition: "$26,000/year",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Environment", "Science", "Sustainability"],
    },
  ]

  const postgraduatePrograms = [
    {
      title: "MBA",
      institution: "Rotman School of Management",
      duration: "2 years",
      tuition: "$45,000/year",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Business", "Management", "Leadership"],
    },
    {
      title: "Data Science",
      institution: "University of British Columbia",
      duration: "1.5 years",
      tuition: "$38,000/year",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Data Science", "Analytics", "AI"],
    },
    {
      title: "Public Health",
      institution: "University of Alberta",
      duration: "2 years",
      tuition: "$32,000/year",
      image:
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Healthcare", "Public Health", "Policy"],
    },
    {
      title: "Environmental Science",
      institution: "Dalhousie University",
      duration: "2 years",
      tuition: "$30,000/year",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Environment", "Science", "Research"],
    },
    {
      title: "Artificial Intelligence",
      institution: "University of Montreal",
      duration: "2 years",
      tuition: "$36,000/year",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      tags: ["AI", "Machine Learning", "Technology"],
    },
    {
      title: "International Relations",
      institution: "Carleton University",
      duration: "2 years",
      tuition: "$29,000/year",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Politics", "International Affairs", "Diplomacy"],
    },
  ]

  const highSchoolPrograms = [
    {
      title: "International Baccalaureate",
      institution: "Milton High School",
      duration: "2 years",
      tuition: "$18,000/year",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
      tags: ["International Curriculum", "University Preparation"],
    },
    {
      title: "Ontario Secondary School Diploma",
      institution: "Toronto International Academy",
      duration: "2-4 years",
      tuition: "$16,000/year",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Canadian Curriculum", "Ontario Education"],
    },
    {
      title: "Advanced Placement Program",
      institution: "Brampton Academy",
      duration: "2 years",
      tuition: "$17,000/year",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["AP Courses", "College Preparation"],
    },
    {
      title: "Canadian High School Diploma",
      institution: "Mississauga Secondary School",
      duration: "2-4 years",
      tuition: "$15,000/year",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Canadian Education", "High School"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Programs", item: "https://www.iecservices.org/programs" },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Educational Programs</h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore a wide range of educational programs across various fields and institutions in Canada, from high
              school to postgraduate studies.
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
                <Input
                  placeholder="Search programs..."
                  className="pl-10"
                  id="program-search"
                  onChange={(e) => {
                    const searchInput = document.getElementById("program-search") as HTMLInputElement
                    const searchTerm = searchInput.value.toLowerCase()

                    // Get all program cards
                    const programCards = document.querySelectorAll("[data-program-card]")

                    // Filter the cards based on search term
                    programCards.forEach((card) => {
                      const cardElement = card as HTMLElement
                      const programTitle = cardElement.getAttribute("data-program-title")?.toLowerCase() || ""
                      const programInstitution =
                        cardElement.getAttribute("data-program-institution")?.toLowerCase() || ""
                      const programTags = cardElement.getAttribute("data-program-tags")?.toLowerCase() || ""

                      // Check if the card matches the search term
                      const matches =
                        programTitle.includes(searchTerm) ||
                        programInstitution.includes(searchTerm) ||
                        programTags.includes(searchTerm)

                      // Show or hide the card
                      cardElement.style.display = matches ? "block" : "none"
                    })
                  }}
                />
              </div>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Institution name..."
                  className="pl-10"
                  id="institution-search"
                  onChange={(e) => {
                    const searchInput = document.getElementById("institution-search") as HTMLInputElement
                    const searchTerm = searchInput.value.toLowerCase()

                    // Get all program cards
                    const programCards = document.querySelectorAll("[data-program-card]")

                    // Filter the cards based on institution name
                    programCards.forEach((card) => {
                      const cardElement = card as HTMLElement
                      const programInstitution =
                        cardElement.getAttribute("data-program-institution")?.toLowerCase() || ""

                      // Check if the card matches the search term
                      const matches = programInstitution.includes(searchTerm)

                      // Show or hide the card
                      cardElement.style.display = matches ? "block" : "none"
                    })
                  }}
                />
              </div>
              <Button
                className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950"
                onClick={() => {
                  // Reset all filters
                  const programSearch = document.getElementById("program-search") as HTMLInputElement
                  const institutionSearch = document.getElementById("institution-search") as HTMLInputElement

                  programSearch.value = ""
                  institutionSearch.value = ""

                  // Show all program cards
                  const programCards = document.querySelectorAll("[data-program-card]")
                  programCards.forEach((card) => {
                    const cardElement = card as HTMLElement
                    cardElement.style.display = "block"
                  })
                }}
              >
                Reset Filters <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Top Choices
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Featured Programs</h2>
            <p className="text-lg text-gray-700">
              Discover our most popular and highly-rated educational programs across different levels of study.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden h-full flex flex-col"
                data-program-card
                data-program-title={program.title}
                data-program-institution={program.institution}
                data-program-tags={program.tags.join(",")}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-950 hover:bg-blue-100">
                      {program.level}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#D4AF37] mr-1" />
                      <span className="text-sm font-medium">{program.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({program.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-blue-950">{program.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Building className="h-4 w-4 mr-1 text-gray-500" />
                    {program.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
                      <p className="font-medium">{program.tuition}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Link href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                    <Button className="w-full bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                      View Program Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Browse by Level
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Program Categories</h2>
            <p className="text-lg text-gray-700">
              Explore educational programs by level of study to find the perfect fit for your academic journey.
            </p>
          </div>

          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              <TabsTrigger value="highschool">High School</TabsTrigger>
            </TabsList>

            <TabsContent value="undergraduate" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {undergraduatePrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group"
                    data-program-card
                    data-program-title={program.title}
                    data-program-institution={program.institution}
                    data-program-tags={program.tags.join(", ")}
                  >
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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
                      <Link href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="postgraduate" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postgraduatePrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group"
                    data-program-card
                    data-program-title={program.title}
                    data-program-institution={program.institution}
                    data-program-tags={program.tags.join(", ")}
                  >
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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
                      <Link href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="highschool" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highSchoolPrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group"
                    data-program-card
                    data-program-title={program.title}
                    data-program-institution={program.institution}
                    data-program-tags={program.tags.join(", ")}
                  >
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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
                      <Link href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
                What You Need
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Admission Requirements</h2>
              <p className="text-lg text-gray-700 mb-8">
                Understanding the admission requirements for Canadian educational institutions is crucial for a
                successful application. Requirements vary by program level and institution, but here are some general
                guidelines.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-blue-200">
                  <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                    Undergraduate Requirements
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>High school diploma or equivalent</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Minimum GPA (typically 3.0 or higher)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>English proficiency (IELTS, TOEFL, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Specific subject prerequisites for certain programs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Statement of purpose or personal essay</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Letters of recommendation</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-blue-200">
                  <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                    Postgraduate Requirements
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Bachelor's degree from an accredited institution</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Minimum GPA (typically 3.0 or higher)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>English proficiency (IELTS, TOEFL, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Standardized test scores (GRE, GMAT, etc. for certain programs)</span>
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Standardized test scores (GRE, GMAT, etc. for certain programs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Research proposal (for research-based programs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Statement of purpose</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Letters of recommendation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>CV or resume</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-blue-200">
                  <AccordionTrigger className="text-left text-blue-950 hover:text-[#D4AF37] font-medium py-4">
                    High School Requirements
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Academic transcripts from previous schools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>English proficiency (IELTS, TOEFL, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Entrance examination (for some schools)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Interview (in-person or virtual)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Personal statement or essay</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Letters of recommendation</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Student reviewing application materials"
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

      {/* Application Process */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Step by Step
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Application Process</h2>
            <p className="text-lg text-gray-700">
              Our streamlined application process ensures you receive comprehensive support at every step of your
              educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Program Selection",
                description:
                  "We help you identify suitable programs based on your academic background, career goals, and preferences.",
                icon: <BookOpen className="h-8 w-8 text-white" />,
              },
              {
                step: "2",
                title: "Document Preparation",
                description:
                  "We guide you through preparing all necessary documents, including transcripts, test scores, and personal statements.",
                icon: <FileText className="h-8 w-8 text-white" />,
              },
              {
                step: "3",
                title: "Application Submission",
                description:
                  "We review your application materials and submit them to your chosen institutions on your behalf.",
                icon: <GraduationCap className="h-8 w-8 text-white" />,
              },
              {
                step: "4",
                title: "Admission & Visa",
                description:
                  "Once accepted, we assist with the study permit application and pre-departure preparations.",
                icon: <CheckCircle className="h-8 w-8 text-white" />,
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
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

