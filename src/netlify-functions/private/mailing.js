const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      bcc: 'xaver.fleer+permakultur-handwerk@gmail.com',
      from: 'webformular@permakultur-handwerk.ch',
    }
    return sgMail.send(messageWithSender)
  },
}
