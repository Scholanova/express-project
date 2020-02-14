const models  = require('../models');

const dogRepository = {
  listAll: () => {
    return models.Dog.findAll()
  }
}

module.exports = dogRepository
