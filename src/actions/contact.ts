"use server";

import nodemailer from "nodemailer";

interface Result {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitContactForm(formData: FormData): Promise<Result> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.STMP_HOST,
      port: process.env.STMP_PORT ? parseInt(process.env.STMP_PORT) : 465,
      secure: true,
      auth: {
        user: process.env.STMP_USER,
        pass: process.env.STMP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SERVER_SENDER,
      to: process.env.EMAIL_SERVER_RECEIVER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #111;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #555;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
