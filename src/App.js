import AnimalsList from './components/AnimalsList/AnimalsList';
import Section from './components/Section';
import animals from './animals';
import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
//import Box from './components/Box/Box';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import Dropdown from './components/Dropdown/Dropdown';

class App extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        text: 'Пройти урок по state',
        completed: false,
      },
      {
        id: 'id-2',
        text: 'Зробити домашку',
        completed: false,
      },
      {
        id: 'id-3',
        text: 'Не унивати, все буде добре :)',
        completed: true,
      },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId), //тобто ми фільтруємо їх так щоб залишbти тільки ті id,
      //які не співпадають з todoId, тобто залишити всі туду, окрмі айдішніка todoId який ми передали
      //напкрилад ми передали в todoId id-2 , ми перевріяємо з масива todos - id-1 - ти равєн todoId id-2 ? ні, тому тебе
      // ми закидуємо в новий масив prevState
    }));
  };
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 + ' - '+ todo.text : total),
      0,
    );
    console.log(completedTodos);
    return (
      <div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <div>
          <p>Кількість задач: {todos.length}</p>
          <p>Кількість виконаних задач: {completedTodos}</p>
        </div>
        <Dropdown />
        <Counter initialValue={10} />
        <ColorPicker options={ColorPickerOptions} />
        {/*<Box*/}
        {/*  type="small"*/}
        {/*  classNames="big , green"*/}
        {/*  /*bgColor="gold"styles={{ color: 'indigo' }}*/}
        {/*/>*/}
        {/*<Box type="middle" styles={{color: 'tomato'}} />*/}
        {/*<Box type="large" />*/}
        {/*       <Alert text="Hi, You, Beautiful!" type="default" />
         - має type undefined
        <Alert text="Hi, You, Beautiful!" type="success" />
        <Alert text="Hi, You, Beautiful!" type="error" />
        <Alert text="Hi, You, Beautiful!" type="warning" />
        <Section title="My favourite animals">
          <AnimalsList items={animals} />
        </Section>*/}
        {/*{animals.map(animal => (
            <Animal
                key = {animal.id}
                name={animal.name}
                about.name={animal.about.name}
                color={animal.color}
                height={animal.height}
                about.url={animal.about.url}
                quantity={animal.quantity}
            />
        ))}*/}
      </div>
    );
  }
}

const ColorPickerOptions = [
  { label: 'greenyellow', color: 'greenyellow' },
  { label: 'yellow', color: 'gold' },
  { label: 'rose', color: '#FFAF9A' },
  { label: 'purple', color: '#C49AFF' },
  { label: 'orange', color: 'orange' },
];

export default App;
