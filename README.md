# SplitLedger

**SplitLedger** is an advanced expense management and tracking web application designed to simplify how you split and monitor expenses among groups, friends, or family. With a clean user interface and powerful backend integration, this platform ensures seamless tracking, authentication, and secure payments.

## Key Features

- **User Authentication**: Secure login and signup using Clerk for authentication.
- **Expense Management**: Easily add, track, and manage shared expenses.
- **Payment Integration**: Integrated with Stripe for secure payment processing.
- **Database Connectivity**: Efficiently stores data using Neon database.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: 
  - [Next.js](https://nextjs.org/): React framework for SSR and static site generation.
  - [Tailwind CSS](https://tailwindcss.com/): Modern utility-first CSS framework.
- **Backend**:
  - [Neon](https://neon.tech/): Database platform for storing expense data.
  - [Drizzle ORM](https://orm.drizzle.team/): Modern database query builder and ORM.
- **Authentication**:
  - [Clerk](https://clerk.dev/): User authentication and management platform.
- **Payment Integration**:
  - [Stripe](https://stripe.com/): Secure and efficient payment processing.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- Accounts on:
  - [Clerk](https://clerk.dev/) for authentication.
  - [Neon](https://neon.tech/) for database.
  - [Stripe](https://stripe.com/) for payment processing.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ansh135/SplitLedger.git
   cd SplitLedger
   ```
2. **Install Dependencies**:
   ```bash
   npm install
    ```
4. **Configure Environment Variables**:

   Create a .env.local file in the root directory.
   Add the following variables:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_DATABASE_URL=your-neon-database-url
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```
   Replace the placeholders (your-*) with the respective credentials obtained from Clerk, Neon, and Stripe.
   
4 **Configure Database**:

  Copy the NEXT_PUBLIC_DATABASE_URL string and replace it in:
  drizzle.config.js (root directory)
  dbConfig.jsx (in the utils folder)
  Run the following command to push the database schema:
```bash
   npm run db:push
```
   Once the database is connected, revert the changes made in drizzle.config.js and dbConfig.jsx to use NEXT_PUBLIC_DATABASE_URL.

5. **Start the Development Server**:
   ```bash
     npm run dev
   ```
Open http://localhost:3000 in your browser.

## First-Time User Setup

New users must create an account on the website during their first run.
The .env.local file is unique for each user. Do not share it with others.
After initial setup, subsequent runs require only:
```bash
npm run dev
```
## Project Structure
```plaintext

SplitLedger/
├── app/                # Main application components and pages
├── components/         # Reusable UI components
├── utils/              # Utility functions and configurations
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Global stylesheets
├── drizzle.config.js   # Database configuration file
├── .env.local          # Environment variables (user-specific)
├── package.json        # Dependencies and scripts
├── README.md           # Project documentation
└── next.config.js      # Next.js configuration


       
