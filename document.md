This is **Next.JS** project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Skills used

- Next.js, Typescript, ReduxJSToolKit, TailwindCSS,

## * Features

### **Frontend**

### { Initial State }
```javascript
{
    auth: {
        isAuthenticated: false,
        status: false,
        token: null,
        isVerified: true,
        secret: null,
        err: null,
    },
},
```

#### 1. Home

+ `/` **redirect** to `/home`

#### 2. Sign Up

+ `/auth/sign-up`
+ formData

```javascript
{
    userData: {
        firstName: {
            type: text,
            label: "First name",
            required: true,
            error: "First name field is required!",
        },
        middleName: {
            type: text,
            label: "Middle name",
            required: false,
        },
        lastName: {
            type: text,
            label: "Last name",
            required: true,
            error: "Last name field is required!",
        },
        email: {
            type: email,
            label: "Email",
            required: true,
            unique: true,
            error: {
                required: "Email field is required!",
                unique: "User already exist!"
            }
        },
        password: {
            type: password,
            label: "Password",
            required: true,
            error: "Password field is required!",
        },
        password2: {
            type: password,
            label: "Confirm password",
            required: true,
            error: {
                required: "Confirm password is required!",
                confirm: "Confirm password must confirm with password",
            },
        }
    },
}
```

  + fulfilled
    - Navigate to ```/auth/sign-in```
    - State
        ```javascript
        {
            auth: {
                isAuthenticated: false,
                status: true,
                token: null,
                isVerified: true,
                secret: null,
                err: null,
            },
        },
        ```
  + rejected
    - 

