# Wedding FAQ Email Notifications

Firebase Cloud Functions that send email notifications when FAQ questions and answers are posted.

## Setup

The functions are already configured with:
- **From:** sendercondor@gmail.com
- **To:** cchopkinswedding@gmail.com
- **Triggers:** New questions and new answers in the FAQ section

## Deployment

To deploy these functions to Firebase:

```bash
cd /Users/synnefon/Documents/wedding
firebase deploy --only functions
```

This will deploy two Cloud Functions:
1. `onNewFaqQuestion` - Triggers when someone posts a new question
2. `onNewFaqAnswer` - Triggers when someone replies to a question

## Testing Locally

To test the functions locally with the Firebase emulator:

```bash
cd /Users/synnefon/Documents/wedding/functions
npm run serve
```

## Email Notifications

### New Question Email
- **Subject:** "New Wedding FAQ Question from [Author Name]"
- **Contains:** Author name, question text, timestamp

### New Answer Email
- **Subject:** "New Answer to Wedding FAQ from [Author Name]"
- **Contains:** Original question, question author, answer text, answer author

## Security Note

The email credentials are currently hardcoded in `index.js`. For better security in production, consider using Firebase environment config:

```bash
firebase functions:config:set gmail.email="sendercondor@gmail.com" gmail.password="your-password"
```

Then update the code to use:
```javascript
const EMAIL_CONFIG = {
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
};
```

## Monitoring

View function logs:
```bash
firebase functions:log
```

Or view in Firebase Console: https://console.firebase.google.com/project/wedding-d16cc/functions
