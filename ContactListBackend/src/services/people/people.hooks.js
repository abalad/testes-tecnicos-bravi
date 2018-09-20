

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      (context) => {
        if(!context.data._id){
          delete context.data._id;
        }
        return context;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
