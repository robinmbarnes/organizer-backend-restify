var Router = {
  routers: [
    require('../routing/todoRouter')
  ],

  setup: function (server) {
    this.routers.forEach(function (router) {
      router(server);
    });
  }
}

module.exports = Router;
