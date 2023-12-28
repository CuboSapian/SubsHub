import { createContext, useContext, useReducer, useEffect, useState, } from "react";
import faker from "faker";
import axios from "axios";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const [items, setItems] = useState([]);

  const temp = { platform: "Netflix" };
  const apicall = async () => {
    const res = await axios.post("http://localhost:5000/plans/fetchPlans", temp, {
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
        },
      })
      .then((response) => response.data);
    setItems(res.data);
  };

  useEffect(() => {
    apicall();
    // eslint-disable-next-line
  }, []);

  // console.log(items);

  const products = items.map((item) => ({
    id: item._id,
    name: item.title,
    price: item.amount,
    image: item.thumbnailUrl,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    // <div className="item" key={item.id}>
    //   <img src={item.thumbnailUrl} alt={item.title} />
    //   <h3>{item.title}</h3>
    //   <button onClick={() => addToCart(item)}>Add to Cart</button>
    // </div>
  }));
  // console.log(products)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(productState);


  return (
    <>
      <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
      </Cart.Provider>
    </>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
