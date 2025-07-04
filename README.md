<div align="center">

# 🔐 AUTH MERN 🔐  
A simple and complete MERN authentication system with Email Verification and Password Reset using 6-digit OTP.

</div>

---

## 🌐 Live Demo  
**👉** [Click here to view the live website]()

---

## 📌 What This Project Does

This is a beginner-friendly authentication system using the MERN stack.

### ✨ Key Features
- ✅ Email Verification via 6-digit OTP  
- 🔁 Password Reset using OTP  
- 🔒 JWT-based secure login  
- 📬 Sends OTP directly to the user’s email  

---

## 💻 Tech Stack

**Frontend:**  
- React  
- Tailwind CSS  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- JWT (JsonWebToken)  
- Nodemailer (for sending emails)  

---

## 🚀 Getting Started (Run It Locally)

> Follow the steps below to run the project on your machine.

### 🔧 Prerequisites  
- Node.js installed  
- MongoDB account or local setup  
- SMTP-enabled email (e.g. Gmail, Brevo)

### 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/Ohhhkayyyaii/Auth-mern.git

# Go to backend
cd Auth-mern/server

# Install backend dependencies
npm install

# Add environment variables
# Create a .env file and paste the following:
PORT=4000  
MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_jwt_secret  
SMTP_EMAIL=your_email_address  
SMTP_PASSWORD=your_email_password  

# Start backend
npm run server
# It will run at http://localhost:4000

# Open new terminal for frontend
cd ../client

# Install frontend dependencies
npm install

# Start frontend
npm run dev
# It will run at http://localhost:5173
