import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import {TodosList, EditTodo, CreateTodo} from 'components'
import TodosList from './components/todosList'
import EditTodo from './components/editTodo'
import CreateTodo from './components/createTodo'

function App() {
  return (
      <Router>

        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />

      </Router>
  );
}

export default App;
