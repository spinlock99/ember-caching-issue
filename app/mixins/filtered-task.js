import Ember from 'ember';

export default Ember.Mixin.create({
  tasks: Ember.computed(function () { return this.store.peekAll('task'); }),
  filteredTasks: Ember.computed('tasks.@each.name', function () {
    return this.get('tasks').rejectBy('name', 'Task 0');
  })
});
