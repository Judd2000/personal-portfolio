import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL!,
        pass: process.env.APP_PASSWORD!,
    }
})

const defaults = {
    from: process.env.SENDER_EMAIL!,
    to: process.env.MESSAGE_RECIPIENT_EMAIL!,
    subject: 'Message from Portfolio Page'
};

export function sendMessage(message: string) {
    return transporter.sendMail({...defaults, html: message })
}