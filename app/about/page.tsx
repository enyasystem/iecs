import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Globe, Users, Award, BookOpen, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { BreadcrumbStructuredData, OrganizationStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "About Us - Our Story and Mission",
  description:
    "Learn about International Education Consultancy Services (IECS) - our history, mission, values, and the team behind our success in guiding international students to quality education in Canada since 2006.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "About Us", item: "https://www.iecservices.org/about" },
        ]}
      />

      <OrganizationStructuredData
        url="https://www.iecservices.org"
        logo="https://www.iecservices.org/images/iecs_logo.png"
        name="International Education Consultancy Services"
        contactPoint={{
          telephone: "+1-905-226-7315",
          contactType: "Customer Service",
        }}
      />

      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                Bridging Global Education Gaps Since 2006
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                International Education Consultancy Services Inc. (IECS) was founded with a mission to connect ambitious
                international students with quality educational opportunities in Canada. For over 18 years, we've been
                guiding students through every step of their educational journey.
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
                    <Users className="h-6 w-6 text-blue-950" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-950">5000+</p>
                    <p className="text-gray-600">Students Placed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="IECS team members"
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

      {/* Our Story Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700">
              From humble beginnings to becoming a trusted name in international education consultancy.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {[
                {
                  year: "2006",
                  title: "Foundation",
                  description:
                    "IECS was founded in Toronto with a mission to help international students access quality education in Canada.",
                  image:
                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                },
                {
                  year: "2010",
                  title: "Expansion to Africa",
                  description:
                    "Opened our first international office in Nigeria to better serve students from West Africa.",
                  image:
                    "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                },
                {
                  year: "2014",
                  title: "Milestone: 1,000 Students",
                  description: "Successfully placed our 1,000th student in Canadian educational institutions.",
                  image:
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  year: "2018",
                  title: "Expansion to Asia",
                  description: "Extended our services to India and China, opening offices in New Delhi and Shanghai.",
                  image:
                    "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  year: "2022",
                  title: "Digital Transformation",
                  description:
                    "Launched our digital platform to provide virtual consultations and services to students worldwide.",
                  image:
                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                },
                {
                  year: "2024",
                  title: "Present Day",
                  description:
                    "Now serving students from 7 countries with a team of 30+ consultants and a network of 50+ partner institutions.",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                >
                  <div className="md:w-1/2 p-6">
                    <div className="relative">
                      <div
                        className={`absolute ${index % 2 === 0 ? "-right-4" : "-left-4"} -top-4 w-20 h-20 bg-[#D4AF37]/20 rounded-full z-0`}
                      ></div>
                      <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 relative">
                    {/* Timeline Dot */}
                    <div className="absolute top-1/2 left-1/2 md:left-auto md:right-auto md:top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 bg-[#D4AF37] rounded-full border-4 border-white z-10"></div>

                    <div className={`bg-blue-50 p-6 rounded-lg shadow-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-950 rounded-full font-bold text-sm mb-4">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-950 mb-3">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
                Our Purpose
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Mission & Vision</h2>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  To empower international students to achieve their educational and career goals by providing expert
                  guidance, personalized support, and access to quality educational opportunities in Canada.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  To be the most trusted international education consultancy, known for integrity, excellence, and
                  student success, bridging educational gaps across continents.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1 bg-white text-blue-950 rounded-full font-medium text-sm mb-4">
                What We Stand For
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Core Values</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Award className="h-6 w-6 text-[#D4AF37]" />,
                    title: "Excellence",
                    description:
                      "We strive for excellence in all our services, ensuring the highest standards of quality and professionalism.",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-[#D4AF37]" />,
                    title: "Integrity",
                    description: "We operate with honesty, transparency, and ethical conduct in all our interactions.",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-[#D4AF37]" />,
                    title: "Student-Centered",
                    description:
                      "We put students' needs and goals at the center of everything we do, providing personalized guidance.",
                  },
                  {
                    icon: <Heart className="h-6 w-6 text-[#D4AF37]" />,
                    title: "Compassion",
                    description:
                      "We approach each student with empathy, understanding the challenges of international education.",
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-[#D4AF37]" />,
                    title: "Cultural Sensitivity",
                    description:
                      "We respect and celebrate cultural diversity, adapting our services to meet diverse needs.",
                  },
                ].map((value, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          {value.icon}
                        </div>
                        <CardTitle className="text-xl text-blue-950">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-950 rounded-full font-medium text-sm mb-4">
              Global Reach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Countries We Serve</h2>
            <p className="text-lg text-gray-700">
              We provide specialized services to students from diverse cultural backgrounds across multiple countries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                country: "Nigeria",
                flag: "🇳🇬",
                students: "1,800+",
                image:
                  "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                country: "Ghana",
                flag: "🇬🇭",
                students: "950+",
                image:
                  "https://media.istockphoto.com/id/2189209990/photo/high-angle-view-of-townscape-against-sky.webp?s=2048x2048&w=is&k=20&c=ibtlJgOUjzayeZ1TNV-Hyq3KTfOHSy8xo64G9zdu66I=",
              },
              {
                country: "South Africa",
                flag: "🇿🇦",
                students: "450+",
                image:
                  "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
              },
              {
                country: "India",
                flag: "🇮🇳",
                students: "1,200+",
                image:
                  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
              },
              {
                country: "China",
                flag: "🇨🇳",
                students: "350+",
                image:
                  "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                country: "Philippines",
                flag: "🇵🇭",
                students: "180+",
                image:
                  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
              },
              {
                country: "Vietnam",
                flag: "🇻🇳",
                students: "120+",
                image:
                  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                country: "Other Countries",
                flag: "🌎",
                students: "250+",
                image:
                  "https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE90aGVyJTIwQ291bnRyaWVzfGVufDB8fDB8fHww",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.country}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-blue-950">{item.country}</h3>
                    <span className="text-2xl">{item.flag}</span>
                  </div>
                  <p className="text-gray-700">
                    Students Placed: <span className="font-medium">{item.students}</span>
                  </p>
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
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white bg-transparent hover:bg-transparent">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

