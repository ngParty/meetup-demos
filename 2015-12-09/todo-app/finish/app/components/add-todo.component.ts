import { Component, Output } from 'ng-metadata/ng-metadata';
import { TodoModel } from "../stores/todoStore.service";

@Component({
  selector: 'add-todo',
  template: `
   <form ng-submit="ctrl.onSubmit(ctrl.label,$event);">
          <div class="todo__fields">
              <input ng-model="ctrl.label" class="todo__input">
              <button type="submit" class="todo__submit">
                  Add <i class="fa fa-check-circle"></i>
              </button>
          </div>
      </form>
  `
})
export class AddTodo{

  @Output() onAdd: Function;
  label = '';

  onSubmit( label: string, event: ng.IAngularEvent ) {

    if ( label.length ) {

      const todo: TodoModel = {
        label,
        complete: false
      };
      this.label = '';

      this.onAdd( { todo } );

    }

    event.preventDefault();

  };

}
