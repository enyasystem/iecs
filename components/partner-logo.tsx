import { Building } from "lucide-react"
import Link from "next/link"

interface PartnerLogoProps {
  name: string
  logo?: string
  link?: string
}

const PartnerLogo = ({ name, logo, link }: PartnerLogoProps) => {
  const logoImage = (
    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 overflow-hidden">
      {logo ? (
        <img src={logo} alt={name + ' logo'} className="object-cover w-16 h-16 rounded-full" />
      ) : (
        <Building className="h-8 w-8 text-blue-950" />
      )}
    </div>
  )
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-32">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
          {logoImage}
        </Link>
      ) : logoImage}
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="text-center text-blue-950 font-medium text-sm mt-1 hover:underline">
          {name}
        </Link>
      ) : (
        <p className="text-center text-blue-950 font-medium text-sm mt-1">{name}</p>
      )}
    </div>
  )
}

export default PartnerLogo

