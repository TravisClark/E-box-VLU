const express = require('express');
const router = express.Router();

const { checkLogin } = require('../middleware/Auth');
const notificationController = require('../app/controllers/NotificationController');

router.get('/list_notification', notificationController.list_notification);
router.patch('/watched', notificationController.watched);

module.exports = router;
