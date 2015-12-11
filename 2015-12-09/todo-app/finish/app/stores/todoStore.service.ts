export type TodoModel = {
  label: string,
  complete: boolean
}

export class TodoStore {

  private _todos = [
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

  get todos(): TodoModel[] {
    return angular.copy( this._todos );
  }

  set todos( newTodos: TodoModel[] ) {
    this._todos = angular.copy( newTodos );
  }
}