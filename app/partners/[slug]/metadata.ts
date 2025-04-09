import type { Metadata } from 'next'
import { partnerData } from './data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${partnerData.name} - Partner Institution Profile`,
    description: `Learn about ${partnerData.name}, one of our prestigious partner institutions.`,
  }
}