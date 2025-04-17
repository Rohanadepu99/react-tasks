import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: '',
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input, todos } = this.state;
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
    };

    this.setState({
      todos: [...todos, newTodo],
      input: '',
    });
  };

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div style={styles.container}>
        <h1>📝 To-Do List</h1>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Add a task..."
            value={this.state.input}
            onChange={this.handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            Add
          </button>
        </form>

        <ul style={styles.list}>
          {this.state.todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <span>{todo.text}</span>
              <button onClick={() => this.deleteTodo(todo.id)} style={styles.deleteButton}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Optional: Inline styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '8px',
    fontSize: '16px',
  },
  addButton: {
    padding: '8px 12px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default App;
