/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [editing, setEditing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  function addTodo(e) {
    e.preventDefault();
    console.log(todos);
    console.log(item);
    setTodos([...todos, item]);
    setItem("");
  }
  function onTextChange(e) {
    setIsTyping(true);
    setItem(e.target.value);
  }

  return (
    <>
      <div>
        <div className="todos">
          <div className="form-section">
            <form onSubmit={addTodo}>
              <div className="form-group flex  space-x-4">
                <input
                  name="todo"
                  type="text"
                  value={item}
                  onChange={onTextChange}
                  className="input-control w-[80%] border border-purple-300
                   px-4 py-3 rounded-md text-gray-600"
                  placeholder="Add Todo"
                />
                <button className="px-4 w-[20%] py-2 bg-green-700 text-green-200 rounded-md">
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* todos */}
        <div className="todos">
          <div className="bg-white p-4 mt-5 rounded-lg drop-shadow">
            <p className="text-gray-500">Coding session with kids</p>
          </div>

          {todos.map((todo, i) => (
            <div key={i} className="bg-white p-4 mt-5 rounded-lg drop-shadow">
              <p className="text-gray-500">{todo}</p>
            </div>
          ))}

          {isTyping && item !== "" && item.length >= 3 && (
            <div className="bg-white p-4 mt-5 rounded-lg drop-shadow">
              <p className="text-gray-500">{item}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
