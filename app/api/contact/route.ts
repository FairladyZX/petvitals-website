import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        name?: string;
        email?: string;
        message?: string;
        company?: string;
        startedAt?: string;
      }
    | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const message = body.message?.trim() || "";
  const startedAt = Number(body.startedAt || 0);

  if (body.company) {
    return NextResponse.json({ message: "Thanks for submitting!" });
  }

  if (startedAt && Date.now() - startedAt < 1500) {
    return NextResponse.json(
      { message: "Please wait a moment and try again." },
      { status: 429 },
    );
  }

  if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json(
      { message: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM", "CONTACT_TO"];
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    return NextResponse.json(
      { message: "Email delivery is not configured yet. Please email info@petvitals.app directly." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `PetVitals contact form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return NextResponse.json({ message: "Thanks for submitting!" });
}
