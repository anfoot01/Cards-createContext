import React, { createContext, useState } from "react";
import List from "./List";
import Bucket from './Bucket'
export const UserContext = createContext();
function Main(props) {
  const [products, setUsers] = useState([
    {
      product: "Ball",
      order: false,
    },
    {
      product: "Bottle",
      order: false,
    },
    {
      product: "Socks",
      order: false,
    },
  ]);
  const [orderCount, setOrderCount] = useState(0);
  const toggleOrder = (index) => {
    const newUsers = products.map((product, idx) => {
      if (idx === index) {
        product.order
          ? setOrderCount(orderCount - 1)
          : setOrderCount(orderCount + 1);
        return { ...product, order: !product.order };
      }
      return product;
    });
    setUsers(newUsers);
  };

  return (
    <div>
      <h1 className="text-center pb-4 pt-4">Shop</h1>
      <Bucket></Bucket>
      <UserContext.Provider value={{ orderCount, toggleOrder, products }}>
        <List products={products}></List>
      </UserContext.Provider>
    </div>
  );
}

export default Main;
