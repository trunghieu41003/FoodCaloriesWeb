// src/routes/UserRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa các route RESTful cho User 
router.post('/users/signup', userController.signUp);
router.post('/users/login', userController.logIn);  
router.post('/users/logout', (req, res) => {
    // Ở đây, không cần phải xóa token vì client sẽ tự quản lý,
    // nhưng có thể làm một số thao tác như ghi lại nhật ký hoặc xóa token khỏi DB nếu cần
    // Để thông báo logout thành công
    res.status(200).json({ message: 'Logout thành công' });
});
router.put('/users/:userId', userController.updateUserInfo);
module.exports = router;
