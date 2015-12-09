import { Component } from 'ng-metadata/ng-metadata';

@Component( {
  selector: 'todo-app',
  template: `
    <div class="todo">
      <form ng-submit="ctrl.onSubmit($event);">
          <h3>Todo List: ({{ ctrl.updateIncomplete() }} of {{ ctrl.todos.length }})</h3>
          <div class="todo__fields">
              <input ng-model="ctrl.label" class="todo__input">
              <button type="submit" class="todo__submit">
                  Add <i class="fa fa-check-circle"></i>
              </button>
          </div>
      </form>
      <ul class="todo__list">
          <li ng-repeat="item in ctrl.todos" ng-class="{'todo__list--complete': item.complete }">
              <input type="checkbox" ng-model="item.complete">
              <p>{{ item.label }}</p>
              <span ng-click="ctrl.deleteItem($index);">
        <i class="fa fa-times-circle"></i>
        </span>
          </li>
      </ul>
    </div>
  `
} )
export class TodoAppCmp {

  todos = [
    {
      label: 'Learn Angular',
      complete: false
    }, {
      label: 'Deploy to S3',
      complete: true
    }, {
      label: 'Rewrite Todo Component',
      complete: true
    }
  ];

  label = '';

  updateIncomplete = function () {
    return this.todos.filter( function ( item ) {
      return !item.complete;
    } ).length;
  };

  deleteItem = function ( index ) {
    this.todos.splice( index, 1 );
  };

  onSubmit = function ( event ) {
    if ( this.label.length ) {
      this.todos.unshift( {
        label: this.label,
        complete: false
      } );
      this.label = '';
    }
    event.preventDefault();
  };

}
