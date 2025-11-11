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
    pass: 'zsfwsrpevsombjjy'
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

/**
 * Send email notification for a new RSVP submission
 */
exports.onNewRsvp = functions.firestore
  .document('responses/{responseId}')
  .onCreate(async (snap, context) => {
    const rsvpData = snap.data();
    const responseId = context.params.responseId;

    const familyName = rsvpData.familyName || 'Unknown Family';
    const people = rsvpData.people || [];

    // Meal labels for display
    const mealLabels = {
      'friday-dinner': 'Friday rehearsal dinner',
      'saturday-breakfast': 'Saturday breakfast',
      'saturday-lunch': 'Saturday lunch',
      'saturday-dinner': 'Saturday wedding dinner',
      'sunday-brunch': 'Sunday brunch'
    };

    const dietaryLabels = {
      'vegetarian': 'Vegetarian',
      'vegan': 'Vegan',
      'pescatarian': 'Pescatarian',
      'dairy-free': 'Dairy-free',
      'nut-free': 'Nut-free',
      'egg-free': 'Egg-free',
      'gluten-free': 'Gluten-free'
    };

    // Calculate total cost
    const MEAL_COSTS = {
      'friday-dinner': 0,
      'saturday-breakfast': 50,
      'saturday-lunch': 50,
      'saturday-dinner': 0,
      'sunday-brunch': 0
    };
    const LODGE_NIGHT_COST = 100;

    let totalCost = 0;
    people.forEach(person => {
      // Lodge nights
      if (person.rainbowLodgeNights) {
        totalCost += person.rainbowLodgeNights.length * LODGE_NIGHT_COST;
      }
      // Meals
      if (person.meals) {
        person.meals.forEach(meal => {
          totalCost += MEAL_COSTS[meal] || 0;
        });
      }
    });

    // Format each person's details
    let peopleHtml = '';
    people.forEach((person, index) => {
      peopleHtml += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4a5568;">
          <h3 style="margin-top: 0;">${person.firstName} ${person.lastName}</h3>
          ${person.email ? `<p><strong>Email:</strong> ${person.email}</p>` : ''}
          ${person.phone ? `<p><strong>Phone:</strong> ${person.phone}</p>` : ''}

          ${person.rainbowLodgeNights && person.rainbowLodgeNights.length > 0 ? `
            <p><strong>Staying at Rainbow Lodge:</strong> ${person.rainbowLodgeNights.map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(', ')}</p>
          ` : '<p><strong>Staying at Rainbow Lodge:</strong> No</p>'}

          ${person.meals && person.meals.length > 0 ? `
            <p><strong>Meals:</strong></p>
            <ul style="margin: 5px 0;">
              ${person.meals.map(meal => `<li>${mealLabels[meal] || meal}</li>`).join('')}
            </ul>
          ` : ''}

          ${person.dietaryRestrictions && person.dietaryRestrictions.length > 0 ? `
            <p><strong>Dietary Restrictions:</strong></p>
            <ul style="margin: 5px 0;">
              ${person.dietaryRestrictions.filter(r => r !== 'other').map(r => `<li>${dietaryLabels[r] || r}</li>`).join('')}
              ${person.dietaryNotes ? `<li>${person.dietaryNotes}</li>` : ''}
            </ul>
          ` : ''}

          ${person.notes ? `<p><strong>Additional Notes:</strong> ${person.notes}</p>` : ''}
        </div>
      `;
    });

    const mailOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: RECIPIENT_EMAIL,
      subject: `New Wedding RSVP: ${familyName}`,
      html: `
        <h2>New RSVP Received!</h2>
        <p><strong>Family/Group:</strong> ${familyName}</p>
        <p><strong>Number of Guests:</strong> ${people.length}</p>
        <p><strong>Total Cost:</strong> $${totalCost}</p>
        <hr>
        <h3>Guest Details:</h3>
        ${peopleHtml}
        <hr>
        <p><strong>Submission ID:</strong> ${responseId}</p>
        <p><em>Received: ${new Date().toLocaleString()}</em></p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent for new RSVP: ${responseId}`);
      return null;
    } catch (error) {
      console.error('Error sending email for new RSVP:', error);
      return null;
    }
  });
