/*************************************************************Partial***************************************************************/

import { type } from "os";

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldYgAkanDiUpdate: Partial<Todo>) {
  return { ...todo, ...fieldYgAkanDiUpdate }
}

console.log(updateTodo({ title: 'Zulfikar', description: 'Testing' }, { }))
console.log(updateTodo({ title: 'Zulfikar', description: 'Testing' }, { title: 'Budi' }))
console.log(updateTodo({ title: 'Zulfikar', description: 'Testing' }, { description: 'Testing2' }))

/*************************************************************Required***************************************************************/

interface TodoOptional {
  title?: string;
  description?: string;
}

const obj: TodoOptional = { title: 'Zulfikar' }
//Property 'description' is missing in type '{ title: string; }' but required in type 'Required<TodoOptional>'
// const obj2: Required<TodoOptional> = { title: 'Zulfikar' }

/*************************************************************Readonly***************************************************************/

const todo: Readonly<Todo> = {
  title: 'Zull',
  description: 'Readonly Test'
}
// Cannot assign to 'title' because it is a read-only property.
// todo.title = 'Jack'

/*************************************************************Record<Keys, Type>***************************************************************/

interface MaintenanceInfo {
  nama: string;
  umur: number;
}

type AtasanMaintenance = "jack" | "agus" | "budi";

const maintenance: Record<AtasanMaintenance, MaintenanceInfo> = {
  jack: { nama: 'Akib', umur: 22 },
  agus: { nama: 'Zul', umur: 22 },
  budi: { nama: 'Arip', umur: 22 },
  // nopal: { nama: 'Arip', umur: 22 } Akan Error Tidak ada dalam bagian Type
}

maintenance.agus
/*************************************************************Pick<Type, Keys>***************************************************************/
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPick = Pick<Todo2, "title" | "completed">;

const todo3: TodoPick = {
  title: 'zul',
  completed: true,
  // description: 'desc' // Akan Error karena kita tidak pick key description
}

/*************************************************************Omit<Type, Keys>***************************************************************/

type TodoOmit = Omit<Todo2, "completed">;

const todo4: TodoOmit = {
  description: 'Desccc',
  title: 'zul',
  // completed: true // Ini akan Error karena kita hapus key completed nya
}