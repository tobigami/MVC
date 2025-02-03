'use strict';

const { ReasonPhrases, StatusCodes } = require('../utils/http.status.code');

class ErrorResponse extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;
	}
}

class ConflictRequestError extends ErrorResponse {
	constructor(message = ReasonPhrases.CONFLICT, status = StatusCodes.CONFLICT) {
		super(message, status);
	}
}

class BadRequestError extends ErrorResponse {
	constructor(message = ReasonPhrases.FORBIDDEN, status = StatusCodes.FORBIDDEN) {
		super(message, status);
	}
}

module.exports = {
	ConflictRequestError,
	BadRequestError
};
