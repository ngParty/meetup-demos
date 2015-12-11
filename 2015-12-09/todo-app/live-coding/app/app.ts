// angular container registry

import * as angular from 'angular';
import { provide, makeDirective } from 'ng-metadata/ng-metadata';

import { TodoAppCmp } from './components/todo-app.component';


export const TodoAppModule = angular
  .module( 'todoApp', [] )

  .directive( provide( TodoAppCmp ), makeDirective( TodoAppCmp ) );