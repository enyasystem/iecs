import { partnerData } from './data'

export function generateStaticParams() {
  return [{
    slug: 'university-of-toronto'
  }]
}

export default function PartnerPage(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div className="container mx-auto px-4">
        <div className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-8">University of Toronto</h1>
          <p className="text-lg mb-4">
            Welcome to our partner institution page. We are currently updating our content.
          </p>
        </div>
      </div>
    </main>
  )
}

