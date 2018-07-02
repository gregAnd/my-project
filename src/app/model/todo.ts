export class Todo {
  id: number;
  name: string;
  isDone: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
