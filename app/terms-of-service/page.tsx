import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Terms of Service - Our Agreement with You",
  description:
    "Read our terms of service to understand the agreement between you and International Education Consultancy Services when you use our website or services.",
  alternates: {
    canonical: "/terms-of-service",
  },
}

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Terms of Service", item: "https://www.iecservices.org/terms-of-service" },
        ]}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-950 hover:text-[#D4AF37] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">Last Updated: April 5, 2024</p>

            <p className="text-gray-700 mb-6">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website and
              services operated by International Education Consultancy Services Inc. ("IECS", "us", "we", or "our").
            </p>

            <p className="text-gray-700 mb-6">
              Your access to and use of our services is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use our services.
            </p>

            <p className="text-gray-700 mb-6">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Services</h2>

            <p className="text-gray-700 mb-4">
              IECS provides educational consultancy services to international students seeking to study in Canada. Our
              services include, but are not limited to:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Admission processing and application assistance</li>
              <li className="mb-2">Immigration assistance and documentation support</li>
              <li className="mb-2">Settlement services and orientation</li>
              <li className="mb-2">Educational counseling and program selection</li>
              <li className="mb-2">Scholarship guidance and financial planning</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Service Fees</h2>

            <p className="text-gray-700 mb-4">
              Our service fees vary depending on the specific services requested and the complexity of your case. All
              fees will be clearly communicated to you before any services are rendered. Payment terms and methods will
              be specified in your service agreement.
            </p>

            <p className="text-gray-700 mb-4">
              Please note that our service fees do not include third-party costs such as application fees, visa fees,
              medical examination fees, or any other fees payable directly to educational institutions, government
              agencies, or other service providers.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Refund Policy</h2>

            <p className="text-gray-700 mb-4">Our refund policy is as follows:</p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Initial consultation fees are non-refundable.</li>
              <li className="mb-2">
                If you cancel our services before we begin processing your application, you may be eligible for a
                partial refund, less an administrative fee.
              </li>
              <li className="mb-2">
                Once we have begun processing your application, refunds will be provided on a pro-rated basis for
                services not yet rendered, less an administrative fee.
              </li>
              <li className="mb-2">No refunds will be provided for completed services.</li>
              <li className="mb-2">
                Refunds are not provided for application rejections or visa denials, as our services are based on
                professional guidance and not on guaranteed outcomes.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Client Responsibilities</h2>

            <p className="text-gray-700 mb-4">As a client of IECS, you agree to:</p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Provide accurate and truthful information for all applications and documentation.
              </li>
              <li className="mb-2">Respond promptly to requests for information or documentation.</li>
              <li className="mb-2">Review all applications and documents before submission.</li>
              <li className="mb-2">Pay all required fees according to the agreed-upon schedule.</li>
              <li className="mb-2">
                Comply with all laws, regulations, and requirements related to your education and immigration process.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Limitation of Liability</h2>

            <p className="text-gray-700 mb-4">
              IECS provides professional guidance and assistance based on our expertise and experience. However, we
              cannot guarantee the outcome of any application or process. The final decision on admissions, visas, and
              other matters rests with the relevant educational institutions, government agencies, and other
              authorities.
            </p>

            <p className="text-gray-700 mb-4">
              In no event shall IECS, its directors, employees, partners, agents, suppliers, or affiliates be liable for
              any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss
              of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Your use or inability to use our services</li>
              <li className="mb-2">
                Any actions or decisions made by educational institutions, government agencies, or other authorities
              </li>
              <li className="mb-2">
                Any unauthorized access to or use of our servers and/or any personal information stored therein
              </li>
              <li className="mb-2">Any interruption or cessation of transmission to or from our services</li>
              <li className="mb-2">
                Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Governing Law</h2>

            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the laws of Ontario, Canada, without regard
              to its conflict of law provisions.
            </p>

            <p className="text-gray-700 mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Changes to Terms of Service</h2>

            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <p className="text-gray-700 mb-4">
              By continuing to access or use our services after those revisions become effective, you agree to be bound
              by the revised terms. If you do not agree to the new terms, please stop using our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Contact Us</h2>

            <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at:</p>

            <p className="text-gray-700 mb-6">
              International Education Consultancy Services Inc.
              <br />
              125 Lakeshore Road East, Suite 300
              <br />
              Oakville, Ontario L6J1H3
              <br />
              Canada
              <br />
              Phone: (905) 226-7315
              <br />
              Email: info@iecservices.org
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

