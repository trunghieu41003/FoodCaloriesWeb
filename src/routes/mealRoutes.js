const express = require('express');
const router = express.Router();
const mealController = require('../controllers/myMealController');
// Thêm món ăn vào danh sách
router.post('/meals/:mealId/foods', mealController.addFoodToMeal);

// Xóa món ăn khỏi danh sách
router.delete('/meals/:mealId/foods/:foodId', mealController.removeFoodFromMeal);

// Cập nhật portion và size của món ăn
router.put('/meals/:mealId/foods/:foodId', mealController.updatePortionSize);

// Lấy tổng dinh dưỡng của danh sách trong 1 bữa ăn
router.get('/meals/:mealId', mealController.getNutritionById);

// Lấy dinh dưỡng chi tiết của 1 món
router.get('/meals/:mealId/foods/:foodId', mealController.getfoodInformation);

router.get('/diaries/meals', mealController.getDiary);

router.post('/diaries', mealController.addNewDiary);
module.exports = router;

