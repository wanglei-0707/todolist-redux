import React, {Component, PropTypes} from 'react';
import Footer from './footer';
import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App;
