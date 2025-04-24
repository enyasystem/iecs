"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    howDidYouHear: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://formspree.io/f/myzevdoo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
        howDidYouHear: "",
      })
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("There was an error submitting your form. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-blue-950 mb-2">Message Sent!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for contacting us. One of our consultants will get back to you within 24-48 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mx-auto">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inquiryType">Inquiry Type *</Label>
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => handleSelectChange("inquiryType", value)}
            required
          >
            <SelectTrigger id="inquiryType">
              <SelectValue placeholder="Select an inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Information</SelectItem>
              <SelectItem value="admissions">University/College Admissions</SelectItem>
              <SelectItem value="visa">Student Visa Application</SelectItem>
              <SelectItem value="immigration">Immigration Services</SelectItem>
              <SelectItem value="scholarship">Scholarship Information</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea id="message" rows={5} value={formData.message} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
          <Select value={formData.howDidYouHear} onValueChange={(value) => handleSelectChange("howDidYouHear", value)}>
            <SelectTrigger id="howDidYouHear">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="search">Search Engine</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="friend">Friend or Family</SelectItem>
              <SelectItem value="event">Education Fair/Event</SelectItem>
              <SelectItem value="partner">Partner Institution</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </>
  )
}

