import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  country: string
  program: string
  image: string
}

const TestimonialCard = ({ quote, name, country, program, image }: TestimonialCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4 text-[#D4AF37]">
          <Quote className="h-8 w-8" />
        </div>
        <p className="text-gray-700 italic mb-6">{quote}</p>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-blue-950">{name}</p>
            <p className="text-sm text-gray-600">
              {country} • {program}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TestimonialCard

