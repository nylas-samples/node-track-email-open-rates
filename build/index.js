// @ts-nocheck
import 'dotenv/config';
import Nylas from "nylas";
// Configure your Nylas client
Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
// const nylas = Nylas.with(process.env.ACCESS_TOKEN);
// const email = 'ram.bansal@nylas.com';
// const sendEmail = function(email) {
// Create a draft email
// const draft = new Draft.default(nylas, {
//   subject: "With Love, from Nylas",
//   body: "Well well well...",
//   to: [{ name: "Recipient name", email }],
//   // Enable pixel tracking with Nylas
//   tracking: { 
//     opens: true,
//     payload: "Message opened!!"
//   }
// });
// Send the email
// try {
//   const message = await draft.send();
//   console.log(`Message "${message.subject}" was sent with open tracking enabled, and with ID ${message.id}`);
// } catch (err) {
//   console.error("Error:\n", err);
// }
// }
// sendEmail('ramnesh.bansal@gmail.com');
// sendEmail('ramnesh.bansal@gmail.com');
// @ts-ignore
// console.log({ currentAccount })
// send-email to 3 different recipients
// include tracking
// check websockets for events
// consider second approach, checking to unread/read messages
// discuss the benefit between the two (pros/cons)
try {
    const users = [
        {
            accessToken: process.env.ACCESS_TOKEN,
            emailAddress: 'xyz@nylas.com',
        },
        {
            accessToken: process.env.ACCESS_TOKEN_2,
            emailAddress: 'xyz@gmail.com',
        }
    ];
    users.forEach(async function (user) {
        // TODO: Testing if this actually works
        const nylas = Nylas.with(user.accessToken);
        const messages = await nylas.messages;
        // const messageList = await messages.list({ limit: 1 });
        const messageList = await messages.list({ in: 'Inbox', limit: 1, subject: "With Love, from Nylas" });
        messageList.map((message) => {
            const date = new Date(message.date).toLocaleDateString();
            console.log(`Email: ${user.emailAddress} on [${date}], Subject: ${message.subject}, Status: [${!message.unread ? 'Opened' : 'Unopened'}]`);
        });
    });
}
catch (err) {
    console.error("Error:\n", err);
}
