import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// -----------------------------------------
// Escape HTML
// -----------------------------------------
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// -----------------------------------------
// POST
// -----------------------------------------
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      project,
      captchaToken,
    } = body;

    // -----------------------------------------
    // Validate required fields
    // -----------------------------------------
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !service ||
      !project
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------------
    // Validate CAPTCHA token
    // -----------------------------------------
    if (!captchaToken) {
      return NextResponse.json(
        {
          error: "Please complete the CAPTCHA.",
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------------
    // Get CAPTCHA Secret Key
    // -----------------------------------------
    const recaptchaSecret =
      process.env.RECAPTCHA_SECRET_KEY;

    if (!recaptchaSecret) {
      console.error(
        "RECAPTCHA_SECRET_KEY is not configured."
      );

      return NextResponse.json(
        {
          error: "Server configuration error.",
        },
        {
          status: 500,
        }
      );
    }

    // -----------------------------------------
    // Verify Google reCAPTCHA
    // -----------------------------------------
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: captchaToken,
        }),
      }
    );

    const recaptchaResult =
      await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      console.error(
        "reCAPTCHA verification failed:",
        recaptchaResult
      );

      return NextResponse.json(
        {
          error:
            "CAPTCHA verification failed. Please try again.",
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------------
    // Escape user input
    // -----------------------------------------
    const safeFirstName =
      escapeHtml(firstName);

    const safeLastName =
      escapeHtml(lastName);

    const safeEmail =
      escapeHtml(email);

    const safePhone =
      escapeHtml(phone);

    const safeCompany =
      escapeHtml(company || "Not provided");

    const safeService =
      escapeHtml(service || "General Enquiry");

    const safeProject =
      escapeHtml(project);

    // -----------------------------------------
    // Create SMTP transporter
    // -----------------------------------------
    const transporter =
      nodemailer.createTransport({
        host: "smtp.hostinger.com",

        port: 465,

        secure: true,

        auth: {
          user: "info@ibcstudio.com",
          pass: process.env.SMTP_PASSWORD,
        },

        tls: {
          rejectUnauthorized: false,
        },
      });

    // -----------------------------------------
    // Email
    // -----------------------------------------
    const mailOptions = {
      from: "info@ibcstudio.com",

      to: "info@ibcstudio.com",

      replyTo: email,

      subject: `New ${service || "Enquiry"} from ${firstName} ${lastName}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #eaeaea;
            border-radius: 8px;
          "
        >

          <h2 style="color: #333; margin-top: 0;">
            New Website Enquiry
          </h2>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            "
          >

            <tr>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #666;
                  width: 120px;
                "
              >
                <strong>Name:</strong>
              </td>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #333;
                "
              >
                ${safeFirstName} ${safeLastName}
              </td>

            </tr>

            <tr>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #666;
                "
              >
                <strong>Email:</strong>
              </td>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #333;
                "
              >

                <a
                  href="mailto:${safeEmail}"
                  style="color: #0066cc;"
                >
                  ${safeEmail}
                </a>

              </td>

            </tr>

            <tr>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #666;
                "
              >
                <strong>Phone:</strong>
              </td>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #333;
                "
              >
                ${safePhone}
              </td>

            </tr>

            <tr>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #666;
                "
              >
                <strong>Company:</strong>
              </td>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #333;
                "
              >
                ${safeCompany}
              </td>

            </tr>

            <tr>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #666;
                "
              >
                <strong>Service:</strong>
              </td>

              <td
                style="
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
                  color: #333;
                "
              >
                ${safeService}
              </td>

            </tr>

          </table>

          <h3
            style="
              color: #444;
              margin-bottom: 10px;
            "
          >
            Project Details
          </h3>

          <div
            style="
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 6px;
              color: #333;
              line-height: 1.6;
              white-space: pre-wrap;
            "
          >
            ${safeProject}
          </div>

          <p
            style="
              margin-top: 25px;
              font-size: 12px;
              color: #999;
            "
          >
            This enquiry was submitted through
            the IBC Studio website.
          </p>

        </div>
      `,
    };

    // -----------------------------------------
    // Send email
    // -----------------------------------------
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error(
      "Contact form SMTP error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to send email. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}