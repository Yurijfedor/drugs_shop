import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../../redux/selectors";
import { createOrder } from "../../redux/operations";
import ShoppingCartForm from "../../components/shoppingCartForm/ShoppingCartForm";
import ShoppingCartList from "../../components/shoppingCartList/ShoppingCartList ";
import "./ShoppingCartPage.css";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.counter,
    0
  );

  const handleSubmit = (data) => {
    const newOrder = { ...data, totalCost, cart };
    dispatch(createOrder(newOrder));
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-page-top-wrap">
        <ShoppingCartForm
          className="shopping-cart-form"
          onSubmit={handleSubmit}
        />
        <ShoppingCartList className="shopping-cart-list" cart={cart} />
      </div>
      <div className="shopping-cart-page-down-wrap">
        <p className="total-cost"> Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
