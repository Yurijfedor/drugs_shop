import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectDrugs, selectFavoriteDrugs } from "../../redux/selectors";
import { addDrugToCart, setFavoriteDrugs } from "../../redux/drugsSlice";
import "./drugsList.css";

const Drugslist = () => {
  const [sortOrder, setSortOrder] = useState("ascending");
  const drugs = useSelector(selectDrugs);
  const favoriteDrugs = useSelector(selectFavoriteDrugs);
  const dispatch = useDispatch();

  const sortedDrugs = [...drugs].sort((a, b) => {
    const aIsFavorite = favoriteDrugs.includes(a._id);
    const bIsFavorite = favoriteDrugs.includes(b._id);
    if (aIsFavorite && !bIsFavorite) {
      return -1;
    }
    if (!aIsFavorite && bIsFavorite) {
      return 1;
    }
    if (sortOrder === "ascending") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

  const handleAddToCartButtonClick = (e, drug) => {
    const newDrug = { ...drug, counter: 1 };
    e.stopPropagation();
    dispatch(addDrugToCart(newDrug));
  };
  const handleDrugClick = (id) => {};
  return (
    <div className="drugs-list-container">
      <h2 className="list-title">Drug List</h2>
      <button className="sort-button" onClick={toggleSortOrder}>
        Sort by Price
      </button>
      <ul className="drugs">
        {sortedDrugs.map((drug) => (
          <li
            key={drug._id}
            className="drug"
            onClick={() => handleDrugClick(drug.id)}
          >
            <img src={drug.image} alt={drug.name} className="drug-image" />
            <h3 className="drug-title">{drug.name}</h3>
            <p className="drug-price">{drug.price} $</p>
            <button
              className={`favorite-button ${
                favoriteDrugs.includes(drug._id) ? "favorite" : ""
              }`}
              onClick={() => dispatch(setFavoriteDrugs(drug._id))}
            >
              &#9734;
            </button>

            <button
              className="add-to-cart-button"
              onClick={(e) => handleAddToCartButtonClick(e, drug)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Drugslist;
