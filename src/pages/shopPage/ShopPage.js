/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDrugs, fetchPhgarmacies } from "../../redux/operations";
import Drugslist from "../../components/drugsList/drugsList";
import PharmacieList from "../../components/pharmacieList/pharmacieList";
import "./ShopPage.css";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhgarmacies());
    dispatch(fetchDrugs());
  }, []);

  return (
    <div className="container">
      <PharmacieList className="pharmacie-list-container" />
      <Drugslist className="drugs-list-container" />
    </div>
  );
};

export default ShopPage;
