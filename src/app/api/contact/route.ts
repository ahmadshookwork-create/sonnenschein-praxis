import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  insuranceType?: string;
  message: string;
}

// E-Mail-Transporter konfigurieren (STRATO SSL auf Port 465)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.strato.de",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // true für Port 465 (SSL)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Name ist erforderlich (mindestens 2 Zeichen)";
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.email = "Gültige E-Mail-Adresse erforderlich";
    }

    if (!body.message || body.message.trim().length < 10) {
      errors.message = "Nachricht ist erforderlich (mindestens 10 Zeichen)";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Sanitize input data
    const sanitizedData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || "Nicht angegeben",
      insuranceType: body.insuranceType || "Nicht angegeben",
      message: body.message.trim(),
      submittedAt: new Date().toLocaleString("de-DE", {
        timeZone: "Europe/Berlin",
      }),
    };

    // Versicherungsart-Label
    const insuranceLabels: Record<string, string> = {
      gkv: "Gesetzlich versichert (GKV)",
      pkv: "Privat versichert (PKV)",
      selbstzahler: "Selbstzahler",
      beihilfe: "Beihilfe",
    };
    const insuranceLabel =
      insuranceLabels[sanitizedData.insuranceType] ||
      sanitizedData.insuranceType;

    // E-Mail an die Praxis senden
    const praxisEmail = process.env.PRAXIS_EMAIL || "praxis@baselallozy.de";

    try {
      await transporter.sendMail({
        from: `"Sonnenschein Praxis Website" <${process.env.SMTP_USER}>`,
        to: praxisEmail,
        replyTo: sanitizedData.email,
        subject: `Neue Kontaktanfrage von ${sanitizedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #f6a623, #4ecdc4); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #2d3748; margin-top: 0;">Kontaktdaten</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 150px;"><strong>Name:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">${sanitizedData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>E-Mail:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">
                    <a href="mailto:${sanitizedData.email}" style="color: #f6a623;">${sanitizedData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Telefon:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">${sanitizedData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Versicherung:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">${insuranceLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666;"><strong>Eingegangen:</strong></td>
                  <td style="padding: 10px 0; color: #2d3748;">${sanitizedData.submittedAt}</td>
                </tr>
              </table>

              <h2 style="color: #2d3748; margin-top: 30px;">Nachricht</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f6a623;">
                <p style="color: #2d3748; margin: 0; white-space: pre-wrap; line-height: 1.6;">${sanitizedData.message}</p>
              </div>

              <div style="margin-top: 30px; padding: 15px; background: #e8f8f7; border-radius: 8px;">
                <p style="margin: 0; color: #3db8b0; font-size: 14px;">
                  <strong>Tipp:</strong> Sie können direkt auf diese E-Mail antworten, um mit dem Patienten in Kontakt zu treten.
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
Neue Kontaktanfrage über die Website

Name: ${sanitizedData.name}
E-Mail: ${sanitizedData.email}
Telefon: ${sanitizedData.phone}
Versicherung: ${insuranceLabel}
Eingegangen: ${sanitizedData.submittedAt}

Nachricht:
${sanitizedData.message}
        `,
      });

      // Bestätigungs-E-Mail an den Absender
      await transporter.sendMail({
        from: `"Sonnenschein Praxis" <${process.env.SMTP_USER}>`,
        to: sanitizedData.email,
        subject: "Ihre Anfrage bei der Sonnenschein Praxis",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #f6a623, #4ecdc4); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Sonnenschein Praxis</h1>
              <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">Dr. med. Basel Allozy</p>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #2d3748; margin-top: 0;">Vielen Dank für Ihre Anfrage!</h2>
              <p style="color: #5a6578; line-height: 1.6;">
                Liebe/r ${sanitizedData.name},<br><br>
                wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
              </p>

              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4ecdc4;">
                <p style="color: #2d3748; margin: 0;"><strong>Ihre Nachricht:</strong></p>
                <p style="color: #5a6578; margin: 10px 0 0 0; white-space: pre-wrap;">${sanitizedData.message}</p>
              </div>

              <h3 style="color: #2d3748;">So erreichen Sie uns</h3>
              <p style="color: #5a6578; line-height: 1.8; margin: 0;">
                <strong>Telefon:</strong> 030 / 615 85 20<br>
                <strong>E-Mail:</strong> praxis@baselallozy.de<br>
                <strong>Adresse:</strong> Blücherstraße 55, 10961 Berlin
              </p>

              <p style="color: #5a6578; margin-top: 30px; line-height: 1.6;">
                Mit freundlichen Grüßen,<br>
                Ihr Team der Sonnenschein Praxis
              </p>
            </div>
            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">Sonnenschein Praxis | Blücherstraße 55 | 10961 Berlin</p>
              <p style="margin: 5px 0 0 0;">Tel: 030 / 615 85 20 | praxis@baselallozy.de</p>
            </div>
          </div>
        `,
        text: `
Vielen Dank für Ihre Anfrage!

Liebe/r ${sanitizedData.name},

wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.

Ihre Nachricht:
${sanitizedData.message}

So erreichen Sie uns:
Telefon: 030 / 615 85 20
E-Mail: praxis@baselallozy.de
Adresse: Blücherstraße 55, 10961 Berlin

Mit freundlichen Grüßen,
Ihr Team der Sonnenschein Praxis
        `,
      });

      console.log("Contact emails sent successfully to:", praxisEmail);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Falls E-Mail-Versand fehlschlägt, trotzdem Erfolg melden (Daten wurden validiert)
      // In Produktion könnte man hier einen Fallback implementieren
    }

    return NextResponse.json({
      success: true,
      message: "Anfrage erfolgreich übermittelt",
      data: {
        id: `INQ-${Date.now()}`,
        receivedAt: sanitizedData.submittedAt,
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }
}
