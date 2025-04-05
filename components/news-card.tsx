import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

const NewsCard = ({ title, excerpt, date, image, category }: NewsCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col group">
      <div className="h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-950 rounded-full text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-bold text-blue-950 group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href="/news" className="text-blue-950 font-medium hover:text-[#D4AF37] inline-flex items-center">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default NewsCard

