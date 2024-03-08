import { useSelector } from "react-redux";
import { selectOrdersHistory } from "../../redux/selectors";
import HistoryForm from "../../components/historyForm/HistoryForm";
import OrderHistory from "../../components/orderHistory/OrderHistory";

const History = () => {
  const ordersHistory = useSelector(selectOrdersHistory);
  return (
    <>
      <HistoryForm />
      <hr />
      <OrderHistory orderHistory={ordersHistory} />
    </>
  );
};

export default History;
