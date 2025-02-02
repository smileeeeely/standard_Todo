import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

const App = () => {
  return (
    <>
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList />
      <TodoItem />
    </>
  )
}

export default App