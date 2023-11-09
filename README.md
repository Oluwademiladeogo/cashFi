# cashFi

## Bickersteth Oluwademilade

### About

A Bank App built with graphql and nestJs on the backend and ReactJs on the frontend
Hosted on: https://cash-fi-sage.vercel.app/

### Using The Api

Clone the repo `git clone https://github.com/Oluwademiladeogo/cashFi`.

> Note!! You should have Node installed locally

Install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run start:dev
# or
yarn start:dev
```

## Environmental Variable

Create a .env file inside the root of your application and include the following content:

```bash
MONGODB_URI="your mongodb uri"

JWT_SECRET="1Qwe2/dada2IBapiInq$932$dSDwe2SsiP21@edaa23jdn@sfs#34gSeDvcx"
```

### Server / API Documentaton

**/api/signup**

**METHOD: POST**

**REQUEST:**

```tsx
  email: string;
  number: string;
  password: string;
  pin: string;
  username: string;
```

**RESPONSE:**

code: 201

message: User added successfully

code: 400

message: Error getting user details

code:409

message: User already registered

code: 500

message: Error adding user

**/api/login**

**METHOD: POST**

**REQUEST:**

```tsx
  email: string;
  password: string;
```

Expected:

code: 200

message: Login Successful

code: 400

message: Error getting user details

code: 401

message: unauthorized

code: 500

message: Internal server error

**/api/deposit**

**METHOD: POST**

**Headers:**

**authorization: Bearer Token**

**REQUEST:**

```tsx
  number: string;
  amount: string;
```

**RESPONSE:**

code: 200

message: Success message

code: 400

message: Error getting user details

code: 401

message: Unauthorized

code: 500

message: Internal server error

**/api/withdraw**

**METHOD: POST**

**Headers:**

**authorization: Bearer Token**

**REQUEST:**

```tsx
  number:string
  pin: string;
  amount:string
```

**RESPONSE**:

code: 200

message: Success message

code: 400

message: Invalid pin

code: 400

message: Insufficient funds

code: 401

message: Unauthorised

code: 500

message: Internal server error

**/api/transfer**

**METHOD: POST**

**Headers:**

**authorization: Bearer Token**

**REQUEST:**

```tsx
  number:string
  pin: string;
  amount:string
```

**RESPONSE:**

code: 200

message: success message

code: 400

message: Invalid pin

code: 400

message: Insufficient funds

code: 400

message: Error getting user details

code: 401

message: Unauthorised

code: 500

message: Internal server error

**/api/history**

**METHOD: GET**

**Headers:**

**authorization: Bearer Token**

**RESPONSE:**

code: 200

message: success message

code: 400

message: Error getting user details

code: 401

message: Unauthorised

code: 500

message: Internal server error