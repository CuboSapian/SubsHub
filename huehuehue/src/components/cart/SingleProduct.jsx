import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
// import { faker } from '@faker-js/faker';


const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        {/* <Card.Img variant="top" src={prod.image} alt={prod.name} /> */}
        <Card.Body>
          <Card.Title>{prod.name} days</Card.Title> 
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
            {prod.fastDelivery ? (
              <div>Prepaid</div>
            ) : (
              <div>Postpaid</div>
            )}
            
            {/* <Rating rating={prod.ratings} /> */}
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;