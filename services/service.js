module.exports = class Service {
  constructor(repository) {
    this.repository = repository;
  }

  // Create Methods
  create(model) {
    return this.repository.create(model);
  }

  // Read Methods
  findAll() {
    return this.repository.findAll();
  }

  findById(id) {
    return this.repository.findById(id);
  }

  findByField({field, value}) {
    return this.repository.findByField({field, value});
  }

  // Update Methods
  updateById(id, updates) {
    return this.repository.updateById(id, updates);
  }

  // Delete Methods
  deleteById(id) {
    return this.repository.deleteById(id);
  }
}
