import Task from "./Task";

function ToDoList() {
  return <ol>
    <li>
      <Task checked={true} text="Компонент ToDo List - 2023-07-22"/>
    </li>

    <li>
      <Task checked={true} text="Компонент Task - 2023-07-23"/>
    </li>

    <li>
      <Task checked={false} text="Состояние tasks"/>
    </li>

    <li>
      <Task checked={false} text="Добавление новой задачи"/>
    </li>

    <li>
      <Task checked={false} text="Изменение статуса задача"/>
    </li>

    <li>
      <Task checked={false} text="Удаление задачи"/>
    </li>

    <li>
      <Task checked={false} text="Список задач на странице"/>
    </li>

    <li>
      <Task checked={false} text="Фильтрация задач"/>
    </li>

    <li>
      <Task checked={false} text="Элементы управления для добавления, фильтрации и очистки списка задач"/>
    </li>
  </ol>;
}

export default ToDoList
