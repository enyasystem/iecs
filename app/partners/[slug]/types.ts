export interface PartnerData {
  name: string
  slug: string
  description: string
  location: string
  type: string
  established: string
  students: string
  international: string
  ranking: string
  longDescription: string
  image: string
  campusImages: string[]
  faculties: string[]
  programs: Program[]
  admissionRequirements: {
    undergraduate: string[]
    graduate: string[]
  }
  scholarships: {
    name: string
    amount: string
    eligibility: string
  }[]
  facilities: string[]
  studentLife: string[]
  testimonials: {
    quote: string
    name: string
    program: string
    country: string
    image: string
  }[]
  iecsPartnershipBenefits: string[]
}

// Remove MetadataProps interface as it's now redundant

export interface Program {
  name: string;
  level: "Undergraduate" | "Graduate";
  duration: string;
  tuition: string;
  description: string;
}

export interface Partner {
  name: string;
  description: string;
  location: string;
  website: string;
  programs: Program[];
}