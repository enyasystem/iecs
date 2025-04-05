// This file provides instructions for setting up EmailJS

/*
To set up EmailJS for your contact form:

1. Create an account at https://www.emailjs.com/ (they have a free tier)

2. Create an Email Service:
   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. Create an Email Template:
   - Go to "Email Templates" in your EmailJS dashboard
   - Click "Create New Template"
   - Design your email template with the following variables:
     - {{firstName}}
     - {{lastName}}
     - {{email}}
     - {{phone}}
     - {{inquiryType}}
     - {{message}}
     - {{howDidYouHear}}

4. Install EmailJS in your project:
   npm install @emailjs/browser

5. Update the ContactForm component:
   - Import EmailJS: import emailjs from '@emailjs/browser';
   - Replace the placeholder values in the handleSubmit function:
     - YOUR_EMAILJS_SERVICE_ID with your actual service ID
     - YOUR_EMAILJS_TEMPLATE_ID with your actual template ID
     - YOUR_EMAILJS_PUBLIC_KEY with your actual public key
   - Uncomment the emailjs.send() function call

That's it! Your contact form should now send emails when submitted.
*/

export {}

