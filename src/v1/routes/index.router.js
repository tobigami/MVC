const express = require('express');
const { AccessToken } = require('../services/access.token');
const router = express.Router();

router.post('/token', (req, res, next) => {
	const body = req.body;
	const token = new AccessToken(body);
	const expireTimestamp = Math.floor(Date.now() / 1000) + 3600;
	const privileges = {
		PrivPublishStream: 'privPublishStream',
		privPublishVideoStream: 'privPublishVideoStream',
		privPublishAudioStream: 'privPublishAudioStream',
		privPublishDataStream: 'privPublishDataStream'
	};

	// Thêm quyền vào token
	token.addPrivilege(privileges.PrivPublishStream, expireTimestamp);

	// Thiết lập thời gian hết hạn của token nếu cần
	token.expireTime(expireTimestamp);

	token.serialize();
	res.status(200).json({
		data: token,
		message: 'api ok'
	});
});

module.exports = router;
