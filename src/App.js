/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDrugs } from "./redux/operations";
import Drugslist from "./components/drugsList/drugsList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrugs());
  }, []);

  return (
    <>
      <h1>Hello!</h1>
      <Drugslist />
    </>
  );
}

export default App;
