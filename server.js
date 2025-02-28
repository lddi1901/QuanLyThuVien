require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
// const birds = require('./routes/testrRoute')
// Khởi tạo ứng dụng Express
const app = express();
// Kết nối MongoDB

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', require('./routes/bookRoute'));
app.use('/api/borrows', require('./routes/borrowRoute'));
app.use('/api/users', require('./routes/userRoute'));
// app.use('/birds', birds)
// Trang chính
app.get('/', (req, res) => {
    res.send('📚 Library Management API is running...');
});

// connectDB();                                 
// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
})