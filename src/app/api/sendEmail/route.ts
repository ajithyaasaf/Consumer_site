import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail", // Use appropriate email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const {
      formType, // Ensure formType is being passed from the frontend
      name,
      email,
      phone,
      address,
      profession,
      willingToJoin,
      message,
      complaintType,
      description,
    } = await req.json()

    // Validate required fields
    if (!formType) {
      throw new Error("Missing form type")
    }

    if (formType === "membership") {
      if (
        !name ||
        !email ||
        !phone ||
        !address ||
        !profession ||
        !willingToJoin
      ) {
        throw new Error("Missing required membership form data")
      }

      const subject = "New Membership Application"
      const htmlContent = `
        <h2>New Membership Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Willing to Join:</strong> ${willingToJoin}</p>
      `
      const toEmail = "tnccpctamilnadu2012@gmail.com" // Recipient's email for membership

      const mailOptions = {
        from: `"TNCCPC" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject,
        html: htmlContent,
      }

      await transporter.sendMail(mailOptions)
      return NextResponse.json({
        message: "Membership email sent successfully",
      })
    } else if (formType === "complaint") {
      if (!name || !email || !phone || !complaintType || !description) {
        throw new Error("Missing required complaint form data")
      }

      const subject = "New Complaint Submission"
      const htmlContent = `
        <h2>New Complaint Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Complaint Type:</strong> ${complaintType}</p>
        <p><strong>Description:</strong> ${description}</p>
      `
      const toEmail = "tnccpctamilnadu2012@gmail.com" // Recipient's email for complaints

      const mailOptions = {
        from: `"TNPCC" ${process.env.EMAIL_USER}`,
        to: toEmail,
        subject,
        html: htmlContent,
      }

      await transporter.sendMail(mailOptions)
      return NextResponse.json({ message: "Complaint email sent successfully" })
    } else {
      throw new Error("Invalid form type")
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in sendEmail API:", error.message)
      return NextResponse.json(
        { error: `Error sending email: ${error.message}` },
        { status: 500 }
      )
    } else {
      console.error("Unexpected error:", error)
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      )
    }
  }
}
