import ProgramsClientPage from "./ProgramsClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Educational Programs - Explore Study Options in Canada",
  description:
    "Explore a wide range of educational programs across various fields and institutions in Canada, from high school to postgraduate studies. Find the perfect program for your academic journey.",
  alternates: {
    canonical: "/programs",
  },
}

export default function ProgramsPage() {
  return <ProgramsClientPage />
}

