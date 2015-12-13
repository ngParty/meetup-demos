import { Pipe } from 'ng-metadata/ng-metadata';
import {TodoModel} from "../stores/todoStore.service";

@Pipe( {
  name: 'remaining'
} )
export class RemainingPipe {

  transform( todos: TodoModel[] ): string {

    return `${ _getIncompleteCount( todos ) } of ${ todos.length }`;

    /**
     *
     * @param todos
     * @returns {number}
     * @private
     */
    function _getIncompleteCount( todos: TodoModel[] ): number {

      return todos.filter( ( item )=> !item.complete ).length;

    }

  }


}