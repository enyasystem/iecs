import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { BreadcrumbStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Information",
  description:
    "Read our privacy policy to understand how International Education Consultancy Services collects, uses, and protects your personal information when you use our website or services.",
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", item: "https://www.iecservices.org/" },
          { name: "Privacy Policy", item: "https://www.iecservices.org/privacy-policy" },
        ]}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-950 hover:text-[#D4AF37] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">Last Updated: April 5, 2024</p>

            <p className="text-gray-700 mb-6">
              International Education Consultancy Services Inc. ("IECS," "we," "us," or "our") is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Information We Collect</h2>

            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Personal Data</h3>
            <p className="text-gray-700 mb-4">
              Personally identifiable information, such as your name, email address, telephone number, and demographic
              information that you voluntarily give to us when you register with us or when you choose to participate in
              various activities related to our services. You are under no obligation to provide us with personal
              information of any kind, however, your refusal to do so may prevent you from using certain features of our
              services.
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Derivative Data</h3>
            <p className="text-gray-700 mb-4">
              Information our servers automatically collect when you access our website, such as your IP address,
              browser type, operating system, access times, and the pages you have viewed directly before and after
              accessing the website.
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Financial Data</h3>
            <p className="text-gray-700 mb-4">
              Financial information, such as data related to your payment method (e.g., valid credit card number, card
              brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
              information about our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Use of Your Information</h2>

            <p className="text-gray-700 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via our website to:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Create and manage your account.</li>
              <li className="mb-2">Process your applications to educational institutions.</li>
              <li className="mb-2">Assist with immigration documentation and procedures.</li>
              <li className="mb-2">Provide settlement services and support.</li>
              <li className="mb-2">Email you regarding your account or services.</li>
              <li className="mb-2">Send you a newsletter or marketing communications.</li>
              <li className="mb-2">Fulfill and manage payments for services.</li>
              <li className="mb-2">Respond to your inquiries and customer service requests.</li>
              <li className="mb-2">Administer promotions, surveys, or other website features.</li>
              <li className="mb-2">
                Compile anonymous statistical data and analysis for use internally or with third parties.
              </li>
              <li className="mb-2">Increase the efficiency and operation of our website and services.</li>
              <li className="mb-2">
                Monitor and analyze usage and trends to improve your experience with our website and services.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Disclosure of Your Information</h2>

            <p className="text-gray-700 mb-4">
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">By Law or to Protect Rights</h3>
            <p className="text-gray-700 mb-4">
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Third-Party Service Providers</h3>
            <p className="text-gray-700 mb-4">
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Educational Institutions</h3>
            <p className="text-gray-700 mb-4">
              With your consent, we may share your information with educational institutions to facilitate your
              application and admission process.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Security of Your Information</h2>

            <p className="text-gray-700 mb-4">
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Policy for Children</h2>

            <p className="text-gray-700 mb-4">
              We do not knowingly solicit information from or market to children under the age of 13. If you become
              aware of any data we have collected from children under age 13, please contact us using the contact
              information provided below.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Options Regarding Your Information</h2>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Account Information</h3>
            <p className="text-gray-700 mb-4">
              You may at any time review or change the information in your account or terminate your account by
              contacting us using the contact information provided.
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-6 mb-3">Emails and Communications</h3>
            <p className="text-gray-700 mb-4">
              If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out
              by contacting us using the contact information provided below.
            </p>

            <h2 className="text-2xl font-bold text-blue-950 mt-8 mb-4">Contact Us</h2>

            <p className="text-gray-700 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>

            <p className="text-gray-700 mb-6">
              International Education Consultancy Services Inc.
              <br />
              125 Lakeshore Road East
              <br />
              Suite 300
              <br />
              Oakvile, Ontario L6J1H3
              <br />
              Phone: (289) 644-2285
                
              <br />
              Phone: (289) 644-2288
              
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

