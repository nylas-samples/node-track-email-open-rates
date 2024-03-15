import 'dotenv/config'
import Nylas from 'nylas'

const NylasConfig = {
  apiKey: process.env.API_KEY,
  apiUri: process.env.API_URI,
}

try {

  const users = [
    { 
      grantId: process.env.USER_GRANT_ID,
      emailAddress: 'xyz@nylas.com',
    },
    // { 
    //   accessToken: process.env.ACCESS_TOKEN_2,
    //   emailAddress: 'xyz@gmail.com',
    // }
  ];

  users.forEach(async function(user){
    const nylas = new Nylas(NylasConfig);

    const messages = await nylas.messages.list({
      identifier: user.grantId as string,
      queryParams: {
        limit: 5,
        subject: "With Love, from Nylas"
      }
    })
  
    messages.data.map((message) => {
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