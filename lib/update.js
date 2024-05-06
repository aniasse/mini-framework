// filter dom element by classname

export function filterByClass(array, todoClass) {
  return array.filter(todo => todo.class === todoClass);
}

export function deleteCompleted(array) {
  return array.filter(todo => todo.class != "completed");
}

export const updateClass = (todo) => {
  console.log("avant", todo.content, todo.class)
  if (todo.class == "completed"){
    todo.class = 'active';
  } else {
    todo.class = 'completed'
    console.log("apres", todo.content, todo.class)
  }
}

