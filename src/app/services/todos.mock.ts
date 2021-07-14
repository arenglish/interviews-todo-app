import {Todo, TODO_PRIORITY} from '../shared/models/todo.model';

export const TodosMock: Todo[] = [{ id: 1, title: 'Feed pets', dateCreated: new Date().toString(), priority: TODO_PRIORITY.P2, description: '1 cup of nibble for Skittle, 2 cups of kibble for Dibble', assignee: 'Tony', isDone: false }];
