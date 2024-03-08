import { useSelector, useDispatch } from "react-redux";
import { selectPharmacies } from "../../redux/selectors";
import { fetchDrugsByPhgarmacyId } from "../../redux/operations";
import "./pharmacieList.css";

const PharmacieList = () => {
  const dispatch = useDispatch();
  const pharmacies = useSelector(selectPharmacies);

  const handleClick = (id) => {
    dispatch(fetchDrugsByPhgarmacyId(id));
  };

  return (
    <div className="pharmacie-list-container">
      <h2 className="list-title">Shops</h2>
      <div className="pharmacies">
        {pharmacies.map((pharmacy) => (
          <div
            key={pharmacy._id}
            className="pharmacy"
            onClick={() => handleClick(pharmacy._id)}
          >
            {pharmacy.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacieList;
