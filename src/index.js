import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>

      <p>План по ReadMe:</p>
      <div>
        <input type='checkbox'></input>
        <label> Компонент ToDo List</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Компонент Task</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Состояние tasks</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Добавление новой задачи</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Изменение статуса задача</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Удаление задачи</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Список задач на странице</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Фильтрация задач</label>
      </div>

      <div>
        <input type='checkbox'></input>
        <label> Элементы управления для добавления, фильтрации и очистки списка задач</label>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));