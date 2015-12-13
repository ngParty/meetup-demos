// angular container registry

import * as angular from 'angular';
import { provide, makeDirective, makePipe } from 'ng-metadata/ng-metadata';

import { TodoAppCmp } from './components/todo-app.component';
import { AddTodo } from './components/add-todo.component';
import { TodoItem } from './components/todo-item.component';
import { TodoStore } from "./stores/todoStore.service";
import { RemainingPipe } from './pipes/remainig.pipe';


export const TodoAppModule = angular
  .module( 'todoApp', [] )

  .directive( provide( TodoAppCmp ), makeDirective( TodoAppCmp ) )
  .directive( provide( AddTodo ), makeDirective( AddTodo ) )
  .directive( provide( TodoItem ), makeDirective( TodoItem ) )

  .filter( provide( RemainingPipe ), makePipe( RemainingPipe ) )

  .service( provide( TodoStore ), TodoStore );