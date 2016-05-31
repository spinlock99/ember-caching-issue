import Ember from 'ember';

export default Ember.Route.extend({
  tasks: Ember.computed(function () { this.store.peekAll('task'); }),

  model() {
    let task = this.store.createRecord('task', {name: 'wat?'});
    task.save();
    return this.get('tasks');
  }
});
