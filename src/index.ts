import 'dotenv/config';
import Nylas from "nylas"

Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

try {

  const users = [
    { 
      accessToken: process.env.ACCESS_TOKEN,
      emailAddress: 'xyz@nylas.com',
    },
    // { 
    //   accessToken: process.env.ACCESS_TOKEN_2,
    //   emailAddress: 'xyz@gmail.com',
    // }
  ];

  users.forEach(async function(user){

    const nylas = Nylas.with(user.accessToken);
    const messages = await nylas.messages;
  
    const messageList = await messages.list({ in: 'Inbox', limit: 1, subject: "With Love, from Nylas" });
  
    messageList.map((message) => {
      const date = new Date(message.date).toLocaleDateString();
      console.log(
        `Email: ${user.emailAddress} on [${date}],
         Subject: ${message.subject},
         Status: [${!message.unread ? 'Opened' : 'Unopened'}]
        `
      );
    });
  })
} catch (err) {
  console.error("Error:\n", err);
}