import { useSelector } from "react-redux";
import { selectDrugs } from "../../redux/selectors";

const Drugslist = () => {
  const drugs = useSelector(selectDrugs);
  console.log(drugs);
  return <h2>I am a drugsList</h2>;
};
export default Drugslist;
