import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tokarskymaciej@gmail.com',
      subject: `Nowa rezerwacja: ${body.type}`,
      html: `
        <h1>Nowa rezerwacja</h1>
        <p>Typ: ${body.type}</p>
        <p>Data: ${body.createdAt}</p>
      `,
    })

    return Response.json({
      success: true,
    })
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    })
  }
}
