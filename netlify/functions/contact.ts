import * as nodemailer from "nodemailer";

// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function handler(event: any) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Tous les champs sont requis" })
      };
    }

    // Create HTML email template with Praesio brand colors
    const html = `
      <div style="font-family: 'Roboto', Arial, sans-serif; line-height: 1.6; color: #E5E0DF; max-width: 600px; margin: 0 auto; background: #020617;">
        <!-- Header with brand color -->
        <div style="background: #0F172A; padding: 40px 30px; text-align: center; border-bottom: 3px solid #F4B083;">
          <h1 style="color: #F4B083; margin: 0; font-size: 28px; font-weight: 400; letter-spacing: 0.05em;">PRAESIO</h1>
          <p style="color: #E5E0DF; margin: 10px 0 0 0; font-size: 14px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase;">Nouveau message</p>
        </div>

        <!-- Content -->
        <div style="background: #0F172A; padding: 40px 30px;">
          <!-- Subject -->
          <div style="margin-bottom: 30px;">
            <p style="color: #F4B083; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 300;">Sujet</p>
            <h2 style="color: #F1F1F3; margin: 0; font-size: 22px; font-weight: 400; line-height: 1.3;">${subject}</h2>
          </div>

          <!-- Contact Info Card -->
          <div style="margin: 30px 0; padding: 25px; background: #1E293B; border-left: 3px solid #F4B083;">
            <div style="margin-bottom: 15px;">
              <p style="color: #F4B083; margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 300;">Nom complet</p>
              <p style="color: #F1F1F3; margin: 0; font-size: 18px; font-weight: 300;">${name}</p>
            </div>
            <div>
              <p style="color: #F4B083; margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 300;">Email</p>
              <p style="margin: 0;"><a href="mailto:${email}" style="color: #F4B083; text-decoration: none; font-size: 16px; font-weight: 300;">${email}</a></p>
            </div>
          </div>

          <!-- Message -->
          <div style="margin: 30px 0;">
            <p style="color: #F4B083; margin: 0 0 15px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 300;">Message</p>
            <div style="background: #1E293B; padding: 25px; border: 1px solid rgba(244, 176, 131, 0.1);">
              <p style="color: #E5E0DF; margin: 0; font-size: 16px; font-weight: 300; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid rgba(244, 176, 131, 0.15); text-align: center;">
            <p style="color: #E5E0DF; margin: 0; font-size: 13px; font-weight: 300; opacity: 0.7;">Ce message a été envoyé depuis le formulaire de contact de <strong style="color: #F4B083; font-weight: 400;">Praesio</strong></p>
            <p style="color: #E5E0DF; margin: 8px 0 0 0; font-size: 12px; font-weight: 300; opacity: 0.5;">27 Rue Raffet, 75016 Paris</p>
          </div>
        </div>
      </div>
    `;

    // Determine destination email based on environment
    // In dev: use CONTACT_EMAIL from .env (your personal email)
    // In prod: use contact@pearl-agency.com from Netlify env var
    const destinationEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    // Send email via Nodemailer with Private Email SMTP
    await transporter.sendMail({
      from: `"Contact Praesio" <${process.env.SMTP_USER}>`,
      to: destinationEmail,
      replyTo: email,
      subject: `Praesio - ${subject}`,
      html
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Une erreur est survenue lors de l'envoi du message",
        details: error instanceof Error ? error.message : "Unknown error"
      })
    };
  }
}
