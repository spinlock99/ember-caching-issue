import Ember from 'ember';
import FilteredTask from '../mixins/filtered-task';

export default Ember.Route.extend(FilteredTask, {
  model() {
    Ember.run.later(this, function() { this.store.findAll('task'); }, 1000);
    return this.get('filteredTasks');
  }
});
