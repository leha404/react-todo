function List() {
  // Inline styling
  const customStyle = {
    color: "red",
  };

  // Update Custom Style JSON
  customStyle.color = "green";

  return <ol>
    <li>
      <div>
        <input type="checkbox" disabled checked={true}></input>
        <label style={customStyle}> Компонент ToDo List: 2023-07-22</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Компонент Task</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Состояние tasks</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Добавление новой задачи</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Изменение статуса задача</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Удаление задачи</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Список задач на странице</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label> Фильтрация задач</label>
      </div>
    </li>

    <li>
      <div>
        <input type="checkbox" disabled checked={false}></input>
        <label>
          Элементы управления для добавления, фильтрации и очистки списка задач
        </label>
      </div>
    </li>
  </ol>;
}

export default List
