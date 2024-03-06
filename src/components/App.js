import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const [form, setForm] = useState({
    topping: "",
    size: "",
    vegetarian: false
  })
  const [id, setId] = useState()
  
  function handleEdit(pizza) {
    const editedPizza = {
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    }
    setForm(editedPizza)
    setId(pizza.id)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const updatedPizza = {
      topping: form.topping,
      size: form.size,
      vegetarian: form.vegetarian
    }
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPizza)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const updatingPizza = pizzaList.map(pizza => {
          if (pizza.id === data.id) {
            return data
          } else {
            return pizza
          }
        })
        setPizzaList(updatingPizza)
      }
      )
  }

  

  return (
    <>
      <Header />
      <PizzaForm 
      form={form}
      setForm={setForm}
      handleSubmit={handleSubmit}
      />
      <PizzaList 
      pizzaList={pizzaList}
      setPizzaList={setPizzaList}
      handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
