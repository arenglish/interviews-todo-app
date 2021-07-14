export interface Todo {
  id: number;
  priority: TODO_PRIORITY;
  title: string;
  description: string;
  assignee: string;
  isDone: boolean;
  dateCreated: string;
}

export enum TODO_PRIORITY {
  P1,P2,P3
}


