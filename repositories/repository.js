const mongoose = require('mongoose');

module.exports = class Repository {
  constructor(model) {
    this.model = model;
  }

  // Create Methods
  create(model) {
    console.log(`Creating new ${this.model}...`);
    return mongoose.model(this.model).create(model);
  }

  // Read Methods
  findAll() {
    console.log(`Finding all ${this.model}s...`);
    return mongoose.model(this.model).find({});
  }

  findById(id) {
    console.log(`Finding ${this.model} with Id: ${id}...`);
    return mongoose.model(this.model).findById(id);
  }

  findByField({field, value}) {
    console.log(`Finding ${this.model} with ${field}: ${value}...`);
    return mongoose.model(this.model).findOne({[field]: value});
  }

  // Update Methods
  updateById(id, updates) {
    console.log(`Updating ${this.model} with Id: ${id}...`);
    return mongoose.model(this.model).findByIdAndUpdate(id, updates);
  }

  // Delete Methods
  deleteById(id) {
    console.log(`Deleting ${this.model} with Id: ${id}...`);
    return mongoose.model(this.model).findByIdAndDelete(id);
  }
}