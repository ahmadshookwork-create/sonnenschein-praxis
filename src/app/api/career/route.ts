import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

// Position Labels
const positionLabels: Record<string, string> = {
  mfa: "Medizinische/r Fachangestellte/r (MFA)",
  "kjp-therapeut": "Kinder- und Jugendlichenpsychotherapeut*in",
  andere: "Andere / Initiativbewerbung",
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Daten aus FormData extrahieren
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const position = formData.get("position") as string;
    const languages = formData.get("languages") as string | null;
    const message = formData.get("message") as string;
    const files = formData.getAll("files") as File[];

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = "Name ist erforderlich (mindestens 2 Zeichen)";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Gültige E-Mail-Adresse erforderlich";
    }

    if (!position) {
      errors.position = "Bitte wählen Sie eine Position aus";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Nachricht ist erforderlich (mindestens 10 Zeichen)";
    }

    // Datei-Validierung
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];

    for (const file of files) {
      if (file.size > maxFileSize) {
        errors.files = `Datei "${file.name}" ist zu groß (max. 10MB)`;
        break;
      }
      if (!allowedTypes.includes(file.type)) {
        errors.files = `Dateityp von "${file.name}" nicht erlaubt (PDF, DOC, DOCX, JPG, PNG)`;
        break;
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Sanitize input data
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "Nicht angegeben",
      position: position,
      positionLabel: positionLabels[position] || position,
      languages: languages?.trim() || "Nicht angegeben",
      message: message.trim(),
      submittedAt: new Date().toLocaleString("de-DE", {
        timeZone: "Europe/Berlin",
      }),
      fileCount: files.length,
    };

    // Dateien für E-Mail-Anhänge vorbereiten
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      }),
    );

    // E-Mail an die Praxis senden
    const praxisEmail = process.env.PRAXIS_EMAIL || "praxis@baselallozy.de";

    try {
      await transporter.sendMail({
        from: `"Sonnenschein Praxis Website" <${process.env.SMTP_USER}>`,
        to: praxisEmail,
        replyTo: sanitizedData.email,
        subject: `Neue Bewerbung: ${sanitizedData.positionLabel} - ${sanitizedData.name}`,
        attachments: attachments,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #4ecdc4, #f6a623); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Neue Bewerbung eingegangen</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <div style="background: #4ecdc4; color: white; padding: 10px 15px; border-radius: 8px; margin-bottom: 20px;">
                <strong>Position:</strong> ${sanitizedData.positionLabel}
              </div>

              <h2 style="color: #2d3748; margin-top: 0;">Bewerber*in</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 150px;"><strong>Name:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">${sanitizedData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>E-Mail:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">
                    <a href="mailto:${sanitizedData.email}" style="color: #4ecdc4;">${sanitizedData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Telefon:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">${sanitizedData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Sprachen:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d3748;">${sanitizedData.languages}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666;"><strong>Eingegangen:</strong></td>
                  <td style="padding: 10px 0; color: #2d3748;">${sanitizedData.submittedAt}</td>
                </tr>
              </table>

              <h2 style="color: #2d3748; margin-top: 30px;">Anschreiben</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4ecdc4;">
                <p style="color: #2d3748; margin: 0; white-space: pre-wrap; line-height: 1.6;">${sanitizedData.message}</p>
              </div>

              ${
                attachments.length > 0
                  ? `
              <h2 style="color: #2d3748; margin-top: 30px;">Anhänge (${attachments.length})</h2>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
                <ul style="margin: 0; padding-left: 20px; color: #666;">
                  ${attachments.map((a) => `<li>${a.filename}</li>`).join("")}
                </ul>
              </div>
              `
                  : ""
              }

              <div style="margin-top: 30px; padding: 15px; background: #e8f8f7; border-radius: 8px;">
                <p style="margin: 0; color: #3db8b0; font-size: 14px;">
                  <strong>Tipp:</strong> Sie können direkt auf diese E-Mail antworten, um mit dem/der Bewerber*in in Kontakt zu treten.
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
Neue Bewerbung eingegangen

Position: ${sanitizedData.positionLabel}

Bewerber*in:
Name: ${sanitizedData.name}
E-Mail: ${sanitizedData.email}
Telefon: ${sanitizedData.phone}
Sprachen: ${sanitizedData.languages}
Eingegangen: ${sanitizedData.submittedAt}

Anschreiben:
${sanitizedData.message}

Anhänge: ${attachments.length} Datei(en)
${attachments.map((a) => `- ${a.filename}`).join("\n")}
        `,
      });

      // Bestätigungs-E-Mail an den Bewerber
      await transporter.sendMail({
        from: `"Sonnenschein Praxis" <${process.env.SMTP_USER}>`,
        to: sanitizedData.email,
        subject: "Ihre Bewerbung bei der Sonnenschein Praxis",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #f6a623, #4ecdc4); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Sonnenschein Praxis</h1>
              <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">Dr. med. Basel Allozy</p>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #2d3748; margin-top: 0;">Vielen Dank für Ihre Bewerbung!</h2>
              <p style="color: #5a6578; line-height: 1.6;">
                Liebe/r ${sanitizedData.name},<br><br>
                wir haben Ihre Bewerbung für die Position <strong>${sanitizedData.positionLabel}</strong> erhalten und werden diese sorgfältig prüfen.
              </p>

              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4ecdc4;">
                <p style="color: #2d3748; margin: 0;"><strong>Ihre eingereichten Unterlagen:</strong></p>
                <ul style="color: #5a6578; margin: 10px 0 0 0; padding-left: 20px;">
                  ${attachments.length > 0 ? attachments.map((a) => `<li>${a.filename}</li>`).join("") : "<li>Keine Dateien angehängt</li>"}
                </ul>
              </div>

              <p style="color: #5a6578; line-height: 1.6;">
                Wir werden uns zeitnah bei Ihnen melden. Bei Rückfragen erreichen Sie uns unter:
              </p>

              <p style="color: #5a6578; line-height: 1.8; margin: 0;">
                <strong>Telefon:</strong> 030 / 615 85 20<br>
                <strong>E-Mail:</strong> praxis@baselallozy.de
              </p>

              <p style="color: #5a6578; margin-top: 30px; line-height: 1.6;">
                Mit freundlichen Grüßen,<br>
                Ihr Team der Sonnenschein Praxis
              </p>
            </div>
            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">Sonnenschein Praxis | Blücherstraße 55 | 10961 Berlin</p>
            </div>
          </div>
        `,
        text: `
Vielen Dank für Ihre Bewerbung!

Liebe/r ${sanitizedData.name},

wir haben Ihre Bewerbung für die Position "${sanitizedData.positionLabel}" erhalten und werden diese sorgfältig prüfen.

Eingereichte Unterlagen:
${attachments.length > 0 ? attachments.map((a) => `- ${a.filename}`).join("\n") : "Keine Dateien angehängt"}

Wir werden uns zeitnah bei Ihnen melden.

Bei Rückfragen erreichen Sie uns unter:
Telefon: 030 / 615 85 20
E-Mail: praxis@baselallozy.de

Mit freundlichen Grüßen,
Ihr Team der Sonnenschein Praxis
        `,
      });

      console.log("Career application emails sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Bewerbung erfolgreich übermittelt",
      data: {
        id: `APP-${Date.now()}`,
        receivedAt: sanitizedData.submittedAt,
        filesReceived: files.length,
      },
    });
  } catch (error) {
    console.error("Career application error:", error);

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
