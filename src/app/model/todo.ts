export class Todo {
  id: number;
  name: string;
  isDone: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
