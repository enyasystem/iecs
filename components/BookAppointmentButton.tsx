"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BookAppointmentButton() {
  return (
    <Button size="sm" onClick={() => {
      const form = document.getElementById('contact-form-section');
      if (form) form.scrollIntoView({ behavior: 'smooth' });
    }}>
      Book Appointment
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
