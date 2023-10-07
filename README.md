# react-laravel-api-myTawjih
MyTawjih is a website designed to assist students who have obtained a baccalaureate degree in choosing the majors that best match their interests and goals. It has been implemented using Laravel, React, and an API.

## Features
- **User Authentication:** Implement a secure user authentication system with login and signup functionality.
- **Sanctum:** Utilize Laravel Sanctum for API authentication.
- **Styling:** Employ Tailwind CSS for a sleek and responsive user interface.
- **State Management:** Implement state management in React using Context API.
- **Dynamic Routing:** Use React Router for dynamic client-side routing.
- **Route Level Code Splitting:** Optimize performance by employing React Lazy and Suspense for route-level code splitting.
- **Interactive Dashboard:** Create an interactive dashboard where users can explore and select suitable majors.
- **Multi-User Support:** Enable multiple users to create and manage their accounts within the platform.
- **User Profiles:** Allow users to create and manage their profiles, including storing preferences and saved majors.

- ## Technologies Used

- **Laravel:** The backend of the project is built using the Laravel PHP framework, providing robust API functionality and data management.

- **React:** The frontend is developed with React, offering a dynamic and interactive user interface.

- **API:** Utilize APIs for data retrieval, communication between the frontend and backend, and integration with external services.

- **Tailwind CSS:** Styling is accomplished using Tailwind CSS, a utility-first CSS framework that enables responsive and clean design.


- ## Usage

### Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install project dependencies using npm or yarn: `npm install` or `yarn install`.
4. Configure your environment variables as described in the `.env.example` file.

### Getting Started

1. Navigate to the `backend` folder by running `cd backend` and run this commande `php artisan serve`.
2. Navigate to the `frentend` folder by running `cd frentend` and run this commande  `npm start` or `yarn start`.
3. Visit `http://localhost:3000` in your web browser to access the application.

#### Configuration
1. Open the `search-config.js` file in the frontend directory.
2. Look for the API configuration section.
3. Update the API URL to point to your local development server. Change:
   ```javascript
   const apiUrl = 'http://localhost:8000'; // Replace with your API URL
