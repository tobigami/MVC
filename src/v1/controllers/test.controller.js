'use strict';

const { SuccessRes } = require('../core/success.response');
const TestService = require('../services/test.service');

class TestController {
	getData = async (req, res, _next) => {
		return new SuccessRes({
			message: 'Test successful',
			metadata: await TestService.getData()
		}).send(res);
	};
}

module.exports = new TestController();
