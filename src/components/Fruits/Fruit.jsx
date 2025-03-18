import React from "react";

const Fruit = ({ fruit, handleFruitCart }) => {
  const { name, color, taste, price } = fruit;

  return (
    <div className="mb-4 flex flex-col space-y-5 rounded-xl border border-cyan-200 p-5">
      <h1>Name : {name}</h1>
      <p>Color: {color}</p>
      <p>Taste: {taste}</p>
      <p>Price: $ {price}</p>
      <div>
        <button
          className="rounded-lg bg-cyan-500 px-6 py-3 text-white"
          onClick={() => handleFruitCart(fruit)}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Fruit;
