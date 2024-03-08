import { useDispatch } from "react-redux";
import { changeCounter, removeDrugFromCart } from "../../redux/drugsSlice";
import "./ShoppingCartList.css";

const ShoppingCartList = ({ cart }) => {
  const dispatch = useDispatch();

  const handleChangeCounter = (evt, cart) => {
    const newCounter =
      evt.currentTarget.textContent === "-"
        ? cart.counter > 1
          ? cart.counter - 1
          : 1
        : cart.counter + 1;
    dispatch(changeCounter({ id: cart._id, counter: newCounter }));
  };

  return (
    <div className="shopping-cart-list">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h3 className="item-title">{item.name}</h3>
            <p className="item-price">${item.price}</p>
          </div>
          <div className="item-counter">
            <button
              className="counter-button"
              onClick={(e) => handleChangeCounter(e, item)}
            >
              -
            </button>
            <span className="counter-value">{item.counter}</span>
            <button
              className="counter-button"
              onClick={(e) => handleChangeCounter(e, item)}
            >
              +
            </button>
            <button
              className="remove-button"
              onClick={() => dispatch(removeDrugFromCart(item._id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartList;
