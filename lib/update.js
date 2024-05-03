// filter dom element by classname

export function filterByClass(array, todoClass) {
  return array.filter(todo => todo.class === todoClass);
}