import { Component, Inject } from 'ng-metadata/ng-metadata';
import {TodoModel} from "../stores/todoStore.service";
import {TodoStore} from "../stores/todoStore.service";

@Component( {
  selector: 'todo-app',
  template: `
    <div class="todo">
    
     <h3>Todo List: ( {{  ctrl.todos | remaining }} )</h3>

     <add-todo on-add="ctrl.addTodo(todo)"></add-todo>

      <ul class="todo__list">
          <li ng-repeat="item in ctrl.todos" ng-class="{'todo__list--complete': item.complete }">

              <todo-item todo="item" on-done="ctrl.markAsDone(todo)">
                <span ng-click="ctrl.deleteItem(item);">
                  <i class="fa fa-times-circle"></i>
                </span>
              </todo-item>

          </li>
      </ul>
    </div>
  `
} )
export class TodoAppCmp {

  todos: TodoModel[];

  constructor(
    @Inject( TodoStore ) private todoStore: TodoStore,
    @Inject( '$log' ) private $log: ng.ILogService
  ) {

    this.todos = todoStore.todos;

    this.$log.log( `todos from TodoStore acquired yo!`, this.todos );

  }

  deleteItem( todo: TodoModel ) {

    const idx = this.todos.indexOf( todo );

    if ( idx > -1 ) {

      this.todos.splice( idx, 1 );

      this._updateStore();

    }

  };

  markAsDone( todo: TodoModel ) {

    const todoToMarkAsDone = this.todos.filter( (todoItem)=>todoItem.label===todo.label );
    todoToMarkAsDone[0].complete = todo.complete;

    this._updateStore();

  }

  addTodo( todo: TodoModel ) {

    this.todos.unshift( todo );

    this._updateStore();

  }

  private _updateStore() {

    this.todoStore.todos = this.todos;

  }


}
