'use strict';

const {ReasonPhrases, StatusCodes} = require('../utils/http.status.code')

class SuccessRes {
  constructor({message, statusCode = StatusCodes.OK, reasonStatusCode = ReasonPhrases.OK, metadata = {} }) {
    this.message = message;
    this.statusCode = statusCode;
    this.reasonStatusCode = reasonStatusCode;
    this.metadata = metadata;
  }

  send (res, headers = {}) {
    return res.status(this.statusCode).json(this)
  }
}

class Ok extends SuccessRes {
  constructor({ message = ReasonPhrases.OK,...rest }) {
    super({message,...rest})
  }
}

module.exports = {
  OK,
  SuccessRes
}