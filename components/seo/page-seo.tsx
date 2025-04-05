import { OrganizationStructuredData, WebsiteStructuredData, BreadcrumbStructuredData } from "./structured-data"

interface PageSEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  breadcrumbs?: {
    name: string
    item: string
  }[]
}

export default function PageSEO({
  title,
  description,
  canonical,
  ogImage = "/images/og-image.jpg",
  breadcrumbs,
}: PageSEOProps) {
  const websiteUrl = "https://www.iecservices.org"
  const fullCanonical = canonical ? `${websiteUrl}${canonical}` : websiteUrl

  return (
    <>
      <OrganizationStructuredData
        url={websiteUrl}
        logo={`${websiteUrl}/images/iecs_logo.png`}
        name="International Education Consultancy Services"
        contactPoint={{
          telephone: "+1-905-226-7315",
          contactType: "Customer Service",
        }}
      />

      <WebsiteStructuredData
        url={websiteUrl}
        name="International Education Consultancy Services"
        description="Your trusted partner for educational opportunities in Canada since 2006. We provide comprehensive services for international students seeking quality education."
      />

      {breadcrumbs && <BreadcrumbStructuredData items={breadcrumbs} />}
    </>
  )
}

