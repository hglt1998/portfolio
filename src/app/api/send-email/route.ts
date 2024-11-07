import { sendCustomerEmail, sendEmail } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { formData } = await request.json()
  try {
    await sendEmail(formData)
    await sendCustomerEmail(formData.email)

    return NextResponse.json({
      es_message: `🇪🇸 ¡Su mensaje ha sido enviado con éxito!`,
      en_message: '🇺🇸 Your message was sent successfully. Check your inbox.'
    }, {
      status: 200
    })
  } catch (error) {
    return NextResponse.json({
      message: "Message email failed"
    }, {
      status: 400
    })
  }
}