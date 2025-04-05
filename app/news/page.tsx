import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewsCard from "@/components/news-card"
import type { Metadata } from "next"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "News & Updates - Latest Information for International Students",
  description:
    "Stay informed about the latest developments in Canadian education, immigration policies, and IECS services. Browse our collection of articles and announcements for international students.",
  alternates: {
    canonical: "/news",
  },
}

export default function NewsPage() {
  // Sample news data - in a real application, this would come from a database or API
  const featuredNews = {
    title: "New Scholarship Opportunities for International Students",
    excerpt:
      "The Canadian government has announced new scholarship programs for international students in STEM fields, offering up to $40,000 per year for undergraduate and graduate studies.",
    date: "June 15, 2024",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Scholarships",
  }

  const newsItems = [
    {
      title: "Changes to Student Visa Requirements",
      excerpt:
        "Important updates to the documentation requirements for Canadian study permits effective September 2024. Learn how these changes might affect your application.",
      date: "May 28, 2024",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Immigration",
    },
    {
      title: "IECS Expands Services to Vietnam",
      excerpt:
        "We're excited to announce the expansion of our consultancy services to students from Vietnam, with a new office opening in Ho Chi Minh City.",
      date: "April 10, 2024",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Company News",
    },
    {
      title: "Top 10 Universities in Canada for 2024",
      excerpt:
        "Discover the highest-ranked Canadian universities according to the latest global university rankings and what makes them stand out.",
      date: "March 22, 2024",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Education",
    },
    {
      title: "Post-Graduation Work Permit Program Updates",
      excerpt:
        "Recent changes to Canada's Post-Graduation Work Permit Program offer international students more flexibility and opportunities after completing their studies.",
      date: "February 15, 2024",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      category: "Immigration",
    },
    {
      title: "IECS Celebrates 18 Years of Excellence",
      excerpt:
        "Join us as we celebrate 18 years of helping international students achieve their educational dreams in Canada.",
      date: "January 30, 2024",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      category: "Company News",
    },
    {
      title: "New Healthcare Programs for International Students",
      excerpt:
        "Several Canadian universities have launched innovative healthcare programs specifically designed for international students.",
      date: "December 12, 2023",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Education",
    },
    {
      title: "Cost of Living Guide for Students in Canada",
      excerpt:
        "A comprehensive guide to help international students understand and plan for the cost of living in different Canadian cities.",
      date: "November 5, 2023",
      image:
        "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Student Life",
    },
    {
      title: "Success Story: From Nigeria to McGill University",
      excerpt:
        "Read about how one of our students from Nigeria successfully navigated the application process and is now thriving at McGill University.",
      date: "October 18, 2023",
      image:
        "https://images.unsplash.com/photo-1594228734226-4d3b339c7d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "Success Stories",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "News", item: "https://www.iecservices.org/news" },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">News & Updates</h1>
            <p className="text-lg text-gray-700 mb-8">
              Stay informed about the latest developments in Canadian education, immigration policies, and IECS
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Featured Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Latest Highlight</h2>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-950 rounded-full text-xs font-medium">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredNews.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">{featuredNews.title}</h3>
                <p className="text-gray-700 mb-6">{featuredNews.excerpt}</p>
                <Link href={`/news/${featuredNews.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Listing */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-2">All News & Updates</h2>
              <p className="text-gray-700">Browse our collection of articles and announcements</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search news..." className="pl-10 w-full sm:w-64" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="immigration">Immigration</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                image={item.image}
                category={item.category}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                3
              </Button>
              <span className="mx-2">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8">
                8
              </Button>
              <Button variant="outline" className="h-8 px-3">
                Next <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">
              Stay updated with the latest news, educational opportunities, and immigration updates for international
              students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 max-w-md"
              />
              <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 whitespace-nowrap">Subscribe Now</Button>
            </div>
            <p className="text-white/60 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Ready to Begin Your Educational Journey?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today for a free consultation and take the first step towards achieving your educational goals
              in Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                  Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

