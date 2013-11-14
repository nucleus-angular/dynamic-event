module.exports = {
  name: 'dynamic event',

  'should fire event': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="click"]')
      .assert.text('[data-ut="event-data"]', 'click one 1', 'click event one triggered')
    .done();
  },

  'should be able to handle multiple events': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="change-click"]')
    .click('[data-ut="click"]')
      .assert.text('[data-ut="event-data"]', 'click two 2', 'click event two triggered')
    .done();
  }
}