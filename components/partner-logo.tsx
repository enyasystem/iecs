import { Building } from "lucide-react"

interface PartnerLogoProps {
  name: string
}

const PartnerLogo = ({ name }: PartnerLogoProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-32">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
        <Building className="h-8 w-8 text-blue-950" />
      </div>
      <p className="text-center text-blue-950 font-medium text-sm">{name}</p>
    </div>
  )
}

export default PartnerLogo

