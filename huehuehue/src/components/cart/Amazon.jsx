import { useEffect, useState, } from "react";
import faker from "faker";
import axios from "axios";import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import Header from '../cart/Header'

const Amazon = () => {

  const [items, setItems] = useState([]);

  const temp = { platform: "Amazon" };
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

  const plans = items.map((item) => ({
    id: item._id,
    name: item.validity,
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
  console.log(plans)

  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  console.log(products)

  const transformProducts = () => {
    let sortedProducts = plans;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  // console.log(products)

  return (
    <>
    <Header/>
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Amazon