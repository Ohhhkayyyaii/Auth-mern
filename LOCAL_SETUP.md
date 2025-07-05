# Local Development Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Gmail account for email functionality

## Step 1: Set Up Environment Variables

### For Client (Frontend)
Create a `.env` file in the `client` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

### For Server (Backend)
Create a `.env` file in the `server` directory:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/auth-mern
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/auth-mern

JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development

# Email Configuration (Gmail)
SENDER_EMAIL=your_email@gmail.com
SENDER_PASSWORD=your_app_password_here
```

## Step 2: Install Dependencies

### Install Client Dependencies
```bash
cd client
npm install
```

### Install Server Dependencies
```bash
cd server
npm install
```

## Step 3: Set Up Database

### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Create database: `auth-mern`

### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster
3. Get your connection string
4. Update `MONGODB_URI` in server `.env`

## Step 4: Set Up Email (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this password in `SENDER_PASSWORD`

## Step 5: Run the Application

### Terminal 1: Start the Server
```bash
cd server
npm run server
```
Server will start on: http://localhost:4000

### Terminal 2: Start the Client
```bash
cd client
npm run dev
```
Client will start on: http://localhost:5173

## Step 6: Test the Application

### Test Checklist:
- [ ] Open http://localhost:5173 in browser
- [ ] Try user registration
- [ ] Try user login
- [ ] Check if logout works
- [ ] Test email verification (check your email)
- [ ] Test password reset functionality
- [ ] Check browser console for errors
- [ ] Check server console for logs

## Troubleshooting

### Common Issues:

1. **Port Already in Use**
   ```bash
   # Kill process on port 4000
   npx kill-port 4000
   # Kill process on port 5173
   npx kill-port 5173
   ```

2. **MongoDB Connection Error**
   - Check if MongoDB is running
   - Verify connection string
   - Check network connectivity

3. **Email Not Sending**
   - Verify Gmail credentials
   - Check if App Password is correct
   - Ensure 2FA is enabled

4. **CORS Errors**
   - Check if server is running on correct port
   - Verify client is using correct backend URL

5. **Module Not Found Errors**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

### Debug Commands:

```bash
# Check if ports are in use
netstat -ano | findstr :4000
netstat -ano | findstr :5173

# Check Node.js version
node --version
npm --version

# Check MongoDB connection
mongosh "your_connection_string"
```

## Development Workflow

1. **Start both servers** (server + client)
2. **Make changes** to code
3. **Save files** - both servers auto-reload
4. **Test in browser** at http://localhost:5173
5. **Check console** for errors
6. **Check server logs** in terminal

## File Structure for Local Development

```
Auth-mern/
├── client/
│   ├── .env                    # VITE_BACKEND_URL=http://localhost:4000
│   ├── package.json
│   └── src/
├── server/
│   ├── .env                    # All server environment variables
│   ├── package.json
│   └── server.js
└── README.md
```

## Next Steps After Local Testing

1. **Fix any issues** found during local testing
2. **Update environment variables** for production
3. **Deploy to production** (Vercel + Render)
4. **Test production deployment**

## Useful Commands

```bash
# Install dependencies for both
cd client && npm install
cd ../server && npm install

# Start both servers
cd server && npm run server
# In new terminal:
cd client && npm run dev

# Build for production
cd client && npm run build

# Check for linting issues
cd client && npm run lint
``` 