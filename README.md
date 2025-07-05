# 🔐 MERN Auth System

A complete authentication system I built using MERN stack with email verification and password reset functionality.

## ✨ What it does

- User registration and login with JWT
- Email verification using 6-digit OTP
- Password reset via email
- Modern dark theme UI
- Responsive design

## 🛠️ Built with

**Frontend:** React, Tailwind CSS, Axios  
**Backend:** Node.js, Express, MongoDB, JWT, Nodemailer  
**Deployment:** Render  
**Email Service:** Brevo (for OTP)  
**Database:** MongoDB Atlas

## 🚀 Live Demo

**👉 [Try it live here!](https://auth-mern-client-p807.onrender.com)**

- **Website:** [https://auth-mern-client-p807.onrender.com](https://auth-mern-client-p807.onrender.com)
- **API:** [https://auth-mern-server-p807.onrender.com](https://auth-mern-server-p807.onrender.com)

## 💻 Run locally

### Prerequisites
- Node.js
- MongoDB (local or Atlas)
- Gmail account

### Setup

1. **Clone and install**
```bash
git clone https://github.com/yourusername/auth-mern.git
cd auth-mern
```

2. **Backend setup**
```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
SENDER_EMAIL=your_email@gmail.com
SENDER_PASSWORD=your_gmail_app_password
```

3. **Frontend setup**
```bash
cd ../client
npm install
```

Create `.env` file:
```env
VITE_BACKEND_URL=http://localhost:4000
```

4. **Run the app**
```bash
# Terminal 1 - Backend
cd server && npm run server

# Terminal 2 - Frontend  
cd client && npm run dev
```

Visit `http://localhost:5173` to see it running!

## 📧 Email setup

I used Brevo for sending OTP emails. You can use Gmail or any SMTP service:

1. Enable 2FA on your Gmail
2. Generate App Password (Google Account → Security → App passwords)
3. Use that password in `SENDER_PASSWORD`

## 🎯 Key features

- **Secure authentication** with JWT tokens
- **Email verification** with OTP
- **Password reset** functionality  
- **Modern UI** with dark theme
- **Responsive design** for all devices
- **Real-time validation** and notifications

## 📁 Project structure

```
auth-mern/
├── client/          # React frontend
├── server/          # Node.js backend
└── README.md
```

## 🤝 Contributing

Feel free to fork and submit PRs! I'm always open to improvements.

---

⭐ **Star if you found this helpful!**

*Built with ❤️ using MERN stack*
