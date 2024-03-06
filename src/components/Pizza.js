import React from "react";

function Pizza({ pizza, handleEdit }) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian}</td>
      <td>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={e => handleEdit(pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
