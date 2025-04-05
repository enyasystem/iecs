"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Slide {
  image: string
  title: string
  subtitle: string
  cta: {
    primary: {
      text: string
      href: string
    }
    secondary: {
      text: string
      href: string
    }
  }
}

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Your Pathway to World-Class Education in Canada Starts Here!",
    subtitle: "Trusted Education Consultancy Since 2006",
    cta: {
      primary: {
        text: "Get Started Today",
        href: "/contact",
      },
      secondary: {
        text: "Explore Programs",
        href: "/programs",
      },
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Achieve Your Educational Dreams in Canada",
    subtitle: "Expert Guidance for International Students",
    cta: {
      primary: {
        text: "Free Assessment",
        href: "/contact",
      },
      secondary: {
        text: "Our Services",
        href: "/services",
      },
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Navigate Your Journey to Canadian Education",
    subtitle: "95% Success Rate in Admissions & Visa Approvals",
    cta: {
      primary: {
        text: "Contact Us",
        href: "/contact",
      },
      secondary: {
        text: "Success Stories",
        href: "/testimonials",
      },
    },
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide, autoplay, isAnimating])

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-900/70 z-10"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                currentSlide === index
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8 absolute pointer-events-none"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={slide.cta.primary.href}>
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C09C2C] text-blue-950 font-medium">
                    {slide.cta.primary.text} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={slide.cta.secondary.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-secondary text-blue-950 hover:bg-gray-700 hover:text-white border-transparent"
                  >
                    {slide.cta.secondary.text}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-[#D4AF37] w-10" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

