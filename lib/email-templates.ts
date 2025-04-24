interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export function generateContactFormEmail({
  name,
  email,
  phone,
  service,
  message,
}: EmailTemplateProps) {
  return {
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            .email-wrapper {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
            }
            .header {
              background-color: #1e3a8a;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .content {
              padding: 20px;
              background-color: #f9fafb;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #1e3a8a;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">Name:</p>
                <p>${name}</p>
              </div>
              <div class="field">
                <p class="label">Email:</p>
                <p>${email}</p>
              </div>
              ${phone ? `
              <div class="field">
                <p class="label">Phone:</p>
                <p>${phone}</p>
              </div>
              ` : ''}
              <div class="field">
                <p class="label">Service Interested In:</p>
                <p>${service}</p>
              </div>
              <div class="field">
                <p class="label">Message:</p>
                <p>${message}</p>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form at IEC Services website.</p>
              <p>© ${new Date().getFullYear()} International Education Consultancy Services</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}\n` : ''}
      Service: ${service}
      Message: ${message}

      Sent from IEC Services website
    `,
  }
}

// Auto-reply template
export function generateAutoReplyEmail(name: string) {
  return {
    subject: 'Thank you for contacting IEC Services',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You for Contacting Us</title>
          <style>
            .email-wrapper {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
            }
            .header {
              background-color: #1e3a8a;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .content {
              padding: 20px;
              background-color: #f9fafb;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="header">
              <h1>Thank You for Contacting Us</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting International Education Consultancy Services. We have received your message and will get back to you within 24-48 business hours.</p>
              <p>In the meantime, you can:</p>
              <ul>
                <li>Visit our website to explore our services: <a href="https://www.iecservices.org/services">Our Services</a></li>
                <li>Read about studying in Canada: <a href="https://www.iecservices.org/resources">Resources</a></li>
                <li>Follow us on social media for updates</li>
              </ul>
              <p>Best regards,<br>The IEC Services Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} International Education Consultancy Services</p>
              <p>125 Lakeshore Road East, Suite 300, Oakville, Ontario L6J1H3</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Dear ${name},

      Thank you for contacting International Education Consultancy Services. We have received your message and will get back to you within 24-48 business hours.

      In the meantime, you can:
      - Visit our website: https://www.iecservices.org
      - Read about our services: https://www.iecservices.org/services
      - Follow us on social media for updates

      Best regards,
      The IEC Services Team
    `,
  }
}