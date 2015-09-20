Template.App.helpers({
  getUser: function() {
    var name = Session.get("name") || "Arunoda";
    return {name: name};
  }
});

Template.Welcome.helpers({
  getName: function() {
    var props = Template.instance().props;
    return props.user().name;
  }
});