window.FP = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FP.Routers.AppRouter({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(function(){
  FP.initialize();
});
