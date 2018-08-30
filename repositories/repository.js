const mongoose = require('mongoose');

module.exports = class Repository {
  constructor(collectionName) {
    this.collection = mongoose.model(collectionName);
  }

  // Create Methods
  create(model) {
    return this.collection.create(model);
  }

  // Read Methods
  findAll() {
    return this.collection.find({});
  }

  find(query) {
    return this.collection.find(query);
  }

  findById(id) {
    return this.collection.findById(id);
  }

  findOne(query) {
    return this.collection.findOne(query);
  }

  // Update Methods
  updateById(id, updates) {
    return this.collection.findByIdAndUpdate(id, updates);
  }

  // Delete Methods
  deleteById(id) {
    return this.collection.findByIdAndDelete(id);
  }
}