import Link from "next/link"
import { ArrowRight, GraduationCap, FileText, Home, Globe, Users, Building, Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type IconName = "GraduationCap" | "FileText" | "Home" | "Globe" | "Users" | "Building"

interface ServiceCardProps {
  title: string
  description: string
  icon: IconName
  href: string
  features?: string[]
}

const ServiceCard = ({ title, description, icon, href, features }: ServiceCardProps) => {
  const IconComponent = {
    GraduationCap,
    FileText,
    Home,
    Globe,
    Users,
    Building,
  }[icon]

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <CardHeader className="pb-2">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="h-10 w-10 text-[#D4AF37]" />
        </div>
        <CardTitle className="text-xl text-blue-950">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Link href={href} className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard

