/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Card } = require('../models/Card');

/**
* Creates the data
*
* card Card data to be created
* returns card
* */
const createcard = ({ card }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Card(card).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* cardId String the Id parameter
* no response value expected for this operation
* */
const deletecard = ({ cardId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Card.findOneAndDelete({ _id:cardId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllcard = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Card.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* cardId String the Id parameter
* returns card
* */
const getcard = ({ cardId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Card.findById(cardId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* cardId String the Id parameter
* card Card data to be updated (optional)
* returns card
* */
const updatecard = ({ cardId, card }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Card.findOneAndUpdate({ _id:cardId },card).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createcard,
  deletecard,
  getAllcard,
  getcard,
  updatecard,
};
