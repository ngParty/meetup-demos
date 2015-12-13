import {RemainingPipe} from './remainig.pipe';

import {expect} from 'chai';

describe(`RemainingPipe`, () => {

  let remainig: RemainingPipe;

  beforeEach(() => {
    remainig = new RemainingPipe();
  });

  it(`should return {complete_todos} of {todos_count}`, () => {

    const todos = [
      { label: 'foo', complete: false },
      { label: 'moo', complete: false },
      { label: 'boo', complete: true }
    ];

    let actual = remainig.transform(todos);
    let expected = `2 of 3`;

    expect(actual).to.equal(expected);


    todos[0].complete = true;

    actual = remainig.transform(todos);
    expected = `1 of 3`;

    expect(actual).to.equal(expected);

  });

});