
# Next Wallet - Track your expenses 
<a href="public/logo_dark.png">
  <img src="public/logo_dark.png" alt="Project Logo" width="150"/>
</a>
<br><br>

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-17.0.2-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-14.17.0-green.svg)](https://nodejs.org/)

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Project

![Project Screenshot](https://i.ibb.co/whdcHG8/newt.png)

The "Next Wallet" project is a web-based wallet application built with Next.js. Its primary purpose is to provide users with a convinient and user-friendly interface for managing their money. The main features include user authentication, data management, and a dashboard for viewing accounts statistics. The project aims to simplify the management of money by integrating the most important features into a single, accessible platform.

<div style="display: flex; justify-content: space-between;">
  <img src="https://i.ibb.co/qRW7wxf/next-wallet-tracker-com-auth-login-callback-Url-records.png" alt="Screenshot 1" width="30%" height="150px" />
  <img src="https://i.ibb.co/D4qbKCc/next-wallet-tracker-com-2.png" alt="Screenshot 2" width="30%" height="150px" />
  <img src="https://i.ibb.co/3cvXJ1M/next-wallet-tracker-com-records.png" alt="Screenshot 3" width="30%" height="150px" />
</div>

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Node.js](https://nodejs.org/) - Backend runtime
- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [NextAuth](https://next-auth.js.org/) - Authentication for Next.js
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Prisma](https://www.prisma.io/) - ORM
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI Component Library

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:abucan/next-wallet.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up environment variables
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_database_url
   POSTGRES_URL=your_postgres_url
   POSTGRES_DATABASE=your_postgres_database
   POSTGRES_HOST=your_postgres_host
   POSTGRES_PASSWORD=your_postgres_password
   POSTGRES_USER=your_postgres_user
   POSTGRES_PRISMA_USER=your_postgres_prisma_user
   POSTGRES_PRISMA_URL=your_postgres_prisma_url
   POSTGRES_URL_NON_POOLING=your_postgres_url_non_poolin
   AUTH_SECRET=your_next_auth_secrent
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   ```

## Usage

1. Run the Development Server:
```sh
npm run dev
```
2. Build for Production:
```sh
npm build
npm start
```

## Features

- User Authentication
- Github Auth
- Dashboard
- Light/Dark Mode
- Transaction Managment
- Personal Accounts/Records
- Responsive and Minimalist Design

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ante Bucan - [LinkedIn](https://www.linkedin.com/in/ante-bucan-a912a4243/) - ante.bucan.st@gmail.com <br>
Github Link: [https://github.com/abucan/next-wallet/](https://github.com/abucan/next-wallet/) <br>
Project Live Link: [https://next-wallet-tracker.com/](https://next-wallet-tracker.com/)

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth Documentation](https://next-auth.js.org/getting-started/introduction)
- [Node.js Documentation](https://nodejs.org/en/docs/)
