import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getText(data: FormData, key: string, maxLength = 2000): string {
  const value = data.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function formatValue(value: string): string {
  return value ? escapeHtml(value) : "Niet opgegeven";
}

function formatMessage(value: string): string {
  return value
    ? escapeHtml(value).replace(/\r?\n/g, "<br>")
    : "Niet opgegeven";
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY ontbreekt.");

      return NextResponse.json(
        { error: "De e-mailservice is tijdelijk niet beschikbaar." },
        { status: 500 }
      );
    }

    // Resend wordt pas geïnitialiseerd wanneer een aanvraag binnenkomt.
    const resend = new Resend(apiKey);

    const data = await req.formData();

    const naam = getText(data, "naam", 150);
    const email = getText(data, "email", 254);
    const bedrijf = getText(data, "bedrijf", 150);
    const telefoon = getText(data, "telefoon", 50);
    const websiteUrl = getText(data, "website_url", 500);
    const bericht = getText(data, "bericht", 5000);
    const bron = getText(data, "bron", 100);
    const ctaBron = getText(data, "cta_bron", 100);

    const analyse =
      getText(data, "intentie_analyse", 3) === "JA" ? "Ja" : "Nee";

    const offerte =
      getText(data, "intentie_offerte", 3) === "JA" ? "Ja" : "Nee";

    const advies =
      getText(data, "intentie_advies", 3) === "JA" ? "Ja" : "Nee";

    // Verplichte velden controleren.
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Vul uw naam, e-mailadres en bericht in." },
        { status: 400 }
      );
    }

    // E-mailadres controleren.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Vul een geldig e-mailadres in." },
        { status: 400 }
      );
    }

    if (bericht.length < 10) {
      return NextResponse.json(
        { error: "Uw bericht is te kort. Geef iets meer toelichting." },
        { status: 400 }
      );
    }

    const html = `
      <!DOCTYPE html>
      <html lang="nl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nieuwe aanvraag WebBoost Partner</title>
        </head>

        <body style="margin:0;padding:32px 16px;background-color:#f7f5f1;font-family:Arial,Helvetica,sans-serif;color:#252525;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e8e4de;">

            <div style="padding:28px 32px;background:#252525;color:#ffffff;">
              <p style="margin:0 0 8px;color:#d6a06b;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">
                WebBoost Partner
              </p>

              <h1 style="margin:0;font-size:24px;font-weight:600;">
                Nieuwe websiteaanvraag
              </h1>
            </div>

            <div style="padding:32px;">
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;">
                Er is een nieuw bericht ontvangen via het contactformulier van WebBoost Partner.
              </p>

              <h2 style="margin:0 0 16px;font-size:17px;color:#252525;">
                Contactgegevens
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
                <tr>
                  <td style="padding:9px 0;width:145px;color:#777;">Naam</td>
                  <td style="padding:9px 0;font-weight:600;">${formatValue(naam)}</td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#777;">Bedrijf</td>
                  <td style="padding:9px 0;">${formatValue(bedrijf)}</td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#777;">E-mailadres</td>
                  <td style="padding:9px 0;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#a45c32;">
                      ${escapeHtml(email)}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#777;">Telefoon</td>
                  <td style="padding:9px 0;">${formatValue(telefoon)}</td>
                </tr>

                <tr>
                  <td style="padding:9px 0;color:#777;">Website</td>
                  <td style="padding:9px 0;">${formatValue(websiteUrl)}</td>
                </tr>
              </table>

              <div style="height:1px;background:#e8e4de;margin:26px 0;"></div>

              <h2 style="margin:0 0 12px;font-size:17px;color:#252525;">
                Bericht
              </h2>

              <div style="padding:18px;background:#f7f5f1;font-size:14px;line-height:1.7;overflow-wrap:anywhere;">
                ${formatMessage(bericht)}
              </div>

              <div style="height:1px;background:#e8e4de;margin:26px 0;"></div>

              <h2 style="margin:0 0 14px;font-size:17px;color:#252525;">
                Gewenste startmethode
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
                <tr>
                  <td style="padding:7px 0;color:#777;">Gratis website-analyse</td>
                  <td style="padding:7px 0;font-weight:600;">${analyse}</td>
                </tr>

                <tr>
                  <td style="padding:7px 0;color:#777;">Voorstel op maat</td>
                  <td style="padding:7px 0;font-weight:600;">${offerte}</td>
                </tr>

                <tr>
                  <td style="padding:7px 0;color:#777;">Adviesgesprek</td>
                  <td style="padding:7px 0;font-weight:600;">${advies}</td>
                </tr>
              </table>

              <div style="height:1px;background:#e8e4de;margin:26px 0;"></div>

              <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
                <tr>
                  <td style="padding:7px 0;width:145px;color:#777;">Gevonden via</td>
                  <td style="padding:7px 0;">${formatValue(bron)}</td>
                </tr>

                <tr>
                  <td style="padding:7px 0;color:#777;">CTA-bron</td>
                  <td style="padding:7px 0;">${formatValue(ctaBron)}</td>
                </tr>
              </table>
            </div>

            <div style="padding:20px 32px;background:#f7f5f1;border-top:1px solid #e8e4de;">
              <p style="margin:0;color:#777;font-size:12px;line-height:1.6;">
                Dit bericht is automatisch verzonden via het contactformulier van webboostpartner.nl.
              </p>
            </div>

          </div>
        </body>
      </html>
    `;

    const plainText = `
Nieuwe aanvraag via WebBoost Partner

CONTACTGEGEVENS
Naam: ${naam}
Bedrijf: ${bedrijf || "Niet opgegeven"}
E-mail: ${email}
Telefoon: ${telefoon || "Niet opgegeven"}
Website: ${websiteUrl || "Niet opgegeven"}

BERICHT
${bericht}

GEWENSTE STARTMETHODE
Gratis website-analyse: ${analyse}
Voorstel op maat: ${offerte}
Adviesgesprek: ${advies}

OVERIGE GEGEVENS
Gevonden via: ${bron || "Niet opgegeven"}
CTA-bron: ${ctaBron || "Geen"}
    `.trim();

    const { error } = await resend.emails.send({
      from: "WebBoost Partner <info@webboostpartner.nl>",
      to: ["info@webboostpartner.nl"],
      replyTo: email,
      subject: `Nieuwe aanvraag via website van ${naam}`,
      html,
      text: plainText,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          error:
            "Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        error: "Er is een serverfout opgetreden. Probeer het later opnieuw.",
      },
      { status: 500 }
    );
  }
}
