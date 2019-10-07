# firestore-ts-issue
This project exemplifies an issue when importing the Firestore package using TypeScript with webpack (via [Serverless](https://serverless.com). The error that occurs is:

```
Error: package.json does not exist at /package.json
```

## Installation
```
git clone git@github.com:luskin/firestore-ts-issue.git firestore-ts-issue
cd firestore-ts-issue
yarn install
yarn test
```

## Additional Requirements
You must have serverless installed on your machine: `npm install -g serverless`

## Reproducing Bug
If you `yarn test` without changing any code you will see the following successful response:
```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

In order to reproduce the bug:
   1) Go to [this line](https://github.com/luskin/firestore-ts-issue/blob/121bec53ca3c510ba2c7552f008b4cdf16bf4c36/firebase.ts#L6) and uncomment `import 'firebase/firestore'`
   2) Go to [this line](https://github.com/luskin/firestore-ts-issue/blob/121bec53ca3c510ba2c7552f008b4cdf16bf4c36/firebase.ts#L27) and uncomment `this.firestore = app.firestore()`

## Environment Variables
You must create a `.env` at your root with your firebase credentials, like so:

```
FIREBASE_API_KEY="XXXXXXXXXX"
FIREBASE_AUTH_DOMAIN="XXXXXXXX.firebaseapp.com"
FIREBASE_DATABASE_URL="https://XXXXXXXXXX.firebaseio.com"
FIREBASE_PROJECT_ID="XXXXXXXXXX"
FIREBASE_STORAGE_BUCKET=XXXXXXXXX.appspot.com"
```

