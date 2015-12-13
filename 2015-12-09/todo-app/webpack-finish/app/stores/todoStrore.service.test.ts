import {TodoStore, TodoModel} from './todoStore.service';

import * as angular from 'angular';
import 'angular-mocks';
import {expect} from 'chai';



describe('TodoStore', () => {

  let _$log: ng.ILogService;
  let todoStore: TodoStore;

  beforeEach(() => {

    angular.mock.inject(($log) => {
      _$log = $log;
    });

    todoStore = new TodoStore(_$log);

  });

  it(`should have initial todos stored`, () => {

    expect(todoStore.todos.length).to.equal(3);

  });

  it(`should get new value everytime tasks is get`, () => {

    const actual = todoStore.todos !== todoStore.todos;
    const expected = true;

    expect(actual).to.equal(expected);

  });

  it(`should get set new value everytime tasks is set`, () => {
    
    const newTodos: TodoModel[] = [{complete:false,label:'foo'}];
    todoStore.todos = newTodos;
    const actual = todoStore.todos !== newTodos;
    const expected = true;

    expect(actual).to.equal(expected);
    
  })


});