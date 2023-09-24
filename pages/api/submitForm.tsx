// pages/api/submitForm.js
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      // Handle the form data here
      const formData = req.body;
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'kserzhio@gmail.com',
          pass: 'exnf slpk ydpg ernf',
        },
      });

      // Define email data
      const mailOptions = {
        from: `${formData.name} - ${formData.email}`,
        to: 'kserzhio@gmail.com',
        subject: `${formData.subject}`,
        text: `${formData.message} ${formData.name} ${formData.email}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
