# User Management Application

A simple user management application built with React, TypeScript, Redux, and Material-UI. This application allows users to view, add, edit, and delete user profiles. It includes a modal/popup component for displaying user details and features a responsive design. I hope a have more time to make this design more beautyfull. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of users
- Add new users
- Edit existing users
- Delete users
- View user details in a modal popup
- Responsive design

## Technologies Used
- React
- TypeScript
- Redux
- Material-UI (MUI)
- Jest & React Testing Library

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Running Tests
   npm test

Folder Structure

user-management-app/
├── public/
│   ├── favicon.ico
│   └── ... (other static assets)
├── src/
│   ├── components/
│   │   ├── UserDetails.tsx
│   │   └── UserList.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   └── ... (other pages)
│   ├── redux/
│   │   ├── store.ts
│   │   └── userSlice.ts
│   ├── types/
│   │   └── index.ts
│   └── tests/
│       ├── UserDetails.test.tsx
│       └── UserList.test.tsx
├── styles/
│   └── globals.css
├── .eslintrc.json
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── tsconfig.json
└── ... (other configuration files)


