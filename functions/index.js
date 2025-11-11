const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Email configuration
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'sendercondor@gmail.com',
    pass: '101310101310!A'
  }
};

const RECIPIENT_EMAIL = 'cchopkinswedding@gmail.com';

// Create reusable transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

/**
 * Send email notification for a new FAQ question
 */
exports.onNewFaqQuestion = functions.firestore
  .document('faqs/{faqId}')
  .onCreate(async (snap, context) => {
    const faqData = snap.data();
    const faqId = context.params.faqId;

    const mailOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: RECIPIENT_EMAIL,
      subject: `New Wedding FAQ Question from ${faqData.author}`,
      html: `
        <h2>New FAQ Question</h2>
        <p><strong>From:</strong> ${faqData.author}</p>
        <p><strong>Question:</strong></p>
        <p>${faqData.question}</p>
        <br>
        <p><em>Posted: ${faqData.createdAt ? new Date(faqData.createdAt.toDate()).toLocaleString() : 'just now'}</em></p>
        <hr>
        <p><small>View and respond at: https://claireandconnorwedding.com/#faqs</small></p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent for new FAQ question: ${faqId}`);
      return null;
    } catch (error) {
      console.error('Error sending email for new question:', error);
      return null;
    }
  });

/**
 * Send email notification when an answer is added to a FAQ
 */
exports.onNewFaqAnswer = functions.firestore
  .document('faqs/{faqId}')
  .onUpdate(async (change, context) => {
    const beforeData = change.before.data();
    const afterData = change.after.data();
    const faqId = context.params.faqId;

    // Check if answers array has changed
    const beforeAnswers = beforeData.answers || [];
    const afterAnswers = afterData.answers || [];

    // If no new answers, don't send email
    if (afterAnswers.length <= beforeAnswers.length) {
      return null;
    }

    // Get the new answer(s)
    const newAnswers = afterAnswers.slice(beforeAnswers.length);

    // Send email for each new answer
    for (const answer of newAnswers) {
      const mailOptions = {
        from: EMAIL_CONFIG.auth.user,
        to: RECIPIENT_EMAIL,
        subject: `New Answer to Wedding FAQ from ${answer.author}`,
        html: `
          <h2>New FAQ Answer</h2>
          <p><strong>Question:</strong> ${afterData.question}</p>
          <p><strong>Asked by:</strong> ${afterData.author}</p>
          <hr>
          <p><strong>Answer from ${answer.author}:</strong></p>
          <p>${answer.text}</p>
          <hr>
          <p><small>View at: https://claireandconnorwedding.com/#faqs</small></p>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent for new FAQ answer on: ${faqId}`);
      } catch (error) {
        console.error('Error sending email for new answer:', error);
      }
    }

    return null;
  });
