import "./OrderHistory.css";

const OrderHistory = ({ orderHistory }) => {
  return (
    <div className="order-history">
      {orderHistory.map((order, index) => (
        <div key={index} className="order">
          <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p>Total Price: ${order.totalPrice}</p>
          <p>Status: {order.status}</p>
          <h3>Products:</h3>
          <ul>
            {order.products.map((product, idx) => (
              <li key={idx} className="product">
                <img src={product.image} alt={product.name} />
                <div>
                  <p>Name: {product.name}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
