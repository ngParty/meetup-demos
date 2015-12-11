import {Input,Output,Component} from "ng-metadata/ng-metadata";
import {TodoModel} from "../stores/todoStore.service";

@Component( {
  selector: 'todo-item',
  template: `
    <input type="checkbox" ng-model="ctrl.item.complete" ng-change="ctrl.done(ctrl.item)">
    <p>{{ ctrl.item.label }}</p>
    <ng-transclude></ng-transclude>
  `
} )
export class TodoItem {

  @Input( 'todo' ) _todo: TodoModel;
  @Output() onDone: Function;

  item: TodoModel;

  constructor() {

    this.item = angular.copy( this._todo );

  }

  done( todo: TodoModel ) {

    this.onDone( { todo } );

  }


}