export interface Todo {
  userId: string;
  id: string | number;
  title: string;
  body: string;
  checked: boolean;
}

export interface TodoForm {
  title: string;
  body: string;
}
