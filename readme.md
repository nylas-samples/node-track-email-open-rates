# node-code-sample-starter

This sample repo will show you how to track email open rates with the Nylas Node.js SDK.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
```

Add the above values to a `.env` file:

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ npm run build
$ node build/index.js
```

When you run the script, you'll get account information output in your terminal:

```bash
Email: xyz@gmail.com on [2/15/2023], Subject: With Love, from Nylas, Status: [Unopened]
Email: xyz@nylas.com on [2/15/2023], Subject: With Love, from Nylas, Status: [Opened]
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.
