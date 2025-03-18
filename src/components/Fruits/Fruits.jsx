import { useEffect, useState } from "react";
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Fruit from "./Fruit";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  const [fruitCart, setFruitCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("fruits.json");
        const data = await res.json();
        setFruits(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (fruits.length > 0) {
      const storedCard = getStoredCart();
      const saveCartInfo = [];
      for (const id of storedCard) {
        const fruitItem = fruits.find((fruitItem) => fruitItem.id === id);
        if (fruitItem) {
          saveCartInfo.push(fruitItem);
        }
      }
      setFruitCart(saveCartInfo);
    }
  }, [fruits]);

  const handleFruitCart = (fruit) => {
    const newFruitCart = [...fruitCart, fruit];
    setFruitCart(newFruitCart);
    addToLS(fruit.id);
  };

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between px-6">
        <h3 className="text-2xl font-bold text-red-300">
          Food Cart: {fruits.length}
        </h3>
        <p className="text-2xl font-bold text-red-300">
          Set Cart: {fruitCart.length}
        </p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.id}
            fruit={fruit}
            handleFruitCart={handleFruitCart}
          ></Fruit>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
