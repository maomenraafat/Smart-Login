# Smart Login System

A simple web-based login system built using HTML, CSS, Bootstrap, and JavaScript. This project allows users to sign up, sign in, and be greeted with a personalized welcome message upon successful login.

## Features

- **Sign Up**: New users can create an account by entering their name, email, and password.
- **Sign In**: Registered users can log in with their email and password.
- **Personalized Welcome**: After login, users are greeted with a personalized message displaying their name.
- **Local Storage**: User credentials (name, email, password) are stored in the browser's local storage for authentication.

## Project Structure

- `index.html`: The login page where users can sign in or navigate to the sign-up page.
- `signup.html`: The registration page where new users can create an account.
- `home.html`: The landing page after successful login, displaying a personalized welcome message.
- `css/`: Custom CSS files for styling the pages.
- `js/`: JavaScript files for handling user interactions like sign up, sign in, and storing/retrieving data from local storage.

## How It Works

1. **Sign Up**: When a user registers, their details are saved to `localStorage`.
2. **Sign In**: Users enter their credentials. If they match the stored data, they are redirected to the home page.
3. **Logout**: Users can log out, which removes their name from `localStorage` and redirects them to the login page.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling, using Bootstrap for responsive design and custom styles.
- **JavaScript**: For handling form interactions, data storage in `localStorage`, and dynamic content rendering.


