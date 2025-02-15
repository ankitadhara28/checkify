# Checkify

**Checkify** is a simple Express.js demo project that evaluates various conditions and returns responses for engagement levels, activity levels, temperature, discounts, login status, and number evaluations. This project is designed to showcase how to build RESTful endpoints using Express.js.

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

This project demonstrates how to build a web server with Express.js and handle various types of GET requests. It features conditions checking for various metrics like likes, steps, temperature, etc., and returns different responses based on the input values.

---

## ✨ Features

- Evaluate engagement levels based on "likes" input
- Determine activity levels using step count
- Check temperature and return weather-related messages
- Assess number status (positive, negative, zero, odd, or even)
- Check if a user is eligible for discounts based on age
- Login status verification
- Simple, minimalist Express server

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.

---

## 🚀 Getting Started

To run Checkify locally on your machine, follow these instructions:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ankitadhara28/checkify.git
   cd checkify
2.**install dependencies:**
    ```bash
   npm install  
3.**Start the server:**
   node index.js  
4. your browser and navigate to http://localhost:3000.

📚 Usage
The project provides various GET endpoints to evaluate inputs. You can send queries with relevant parameters to check conditions like engagement level, temperature, etc.

🔗 Endpoints
Below are the available endpoints for Checkify:

/check-engagement: Evaluates engagement levels based on likes.

Example: http://localhost:3000/check-engagement?likes=120
/check-activity-level: Checks activity level based on steps.

Example: http://localhost:3000/check-activity-level?steps=8000
/check-temp: Evaluates temperature conditions.

Example: http://localhost:3000/check-temp?temperature=20
/check-num: Checks if a number is positive, negative, or zero.

Example: http://localhost:3000/check-num?no=-5
/check-discount: Verifies discount eligibility based on age.

Example: http://localhost:3000/check-discount?age=70
/check-login: Determines if a user is logged in based on login query parameter (true or false).

Example: http://localhost:3000/check-login?login=true
/check-oddeven: Checks if a number is odd or even.

Example: http://localhost:3000/check-oddeven?no=15

🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make changes and commit (git commit -m "Add a feature").
Push to the branch (git push origin feature-branch).
Open a Pull Request.

🌟 Author
Developed by ankitadhara28.

🌐 Live Demo (Optional)
If you deploy the project (e.g., via Heroku, Vercel, etc.), you can link the live demo here!
