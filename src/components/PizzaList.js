import React, { useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList({
  pizzaList,
  setPizzaList,
  handleEdit,
}) {
  // GET REQUEST
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(res => res.json())
      .then(pizza => setPizzaList(pizza))
  }, [])
  
  // MAIN DISPLAY
  const displayPizzaList = pizzaList.map(pizza => {
    return <Pizza
    key={pizza.id}
    pizza={pizza}
    handleEdit={handleEdit}
    />
  })
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {displayPizzaList}
      </tbody>
    </table>
  );
}

export default PizzaList;
