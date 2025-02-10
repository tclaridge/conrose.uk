import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter using IONOS SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.co.uk",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // your IONOS email
        pass: process.env.EMAIL_PASSWORD, // your IONOS email password
      },
    });

    // Email content
    const mailOptions = {
      from: {
        name: "Conrose Business Centre",
        address: process.env.EMAIL_FROM
      },
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #115e59;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;"/>
          <p style="color: #666; font-size: 0.875rem;">
            This message was sent from the Conrose website contact form.
          </p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Error sending email' }, { status: 500 });
  }
} 