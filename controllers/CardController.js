/**
 * The CardController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CardService');
const createcard = async (request, response) => {
  await Controller.handleRequest(request, response, service.createcard);
};

const deletecard = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletecard);
};

const getAllcard = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllcard);
};

const getcard = async (request, response) => {
  await Controller.handleRequest(request, response, service.getcard);
};

const updatecard = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatecard);
};


module.exports = {
  createcard,
  deletecard,
  getAllcard,
  getcard,
  updatecard,
};
