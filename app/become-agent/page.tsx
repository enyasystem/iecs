import { Metadata } from "next"
import AgentApplicationForm from "@/components/AgentApplicationForm"

export const metadata: Metadata = {
  title: "Become an Agent | IECS",
  description: "Join our network of education consultants and help students achieve their dreams of studying in Canada.",
}

export default function BecomeAgent() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 text-center">
            Agent Application Form
          </h1>
          <AgentApplicationForm />
        </div>
      </div>
    </main>
  )
}