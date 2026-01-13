import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

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

    // Create HTML email template
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E293B; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau message depuis Praesio</h1>
        </div>

        <div style="background: #F8FAFC; padding: 30px; border: 1px solid #E2E8F0;">
          <h2 style="color: #6366F1; margin-top: 0;">Sujet : ${subject}</h2>

          <div style="margin: 20px 0; padding: 15px; background: white; border-left: 4px solid #6366F1;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #6366F1;">Nom :</strong> ${name}</p>
            <p style="margin: 0;"><strong style="color: #6366F1;">Email :</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1E293B; margin-bottom: 10px;">Message :</h3>
            <div style="background: white; padding: 20px; border-radius: 4px; border: 1px solid #E2E8F0;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0; text-align: center; color: #64748B; font-size: 14px;">
            <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de <strong>Praesio</strong></p>
          </div>
        </div>
      </div>
    `;

    // Send email via Resend
    await resend.emails.send({
      from: "Contact Praesio <onboarding@resend.dev>",
      to: ["pearl.studio.contact@gmail.com"],
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
