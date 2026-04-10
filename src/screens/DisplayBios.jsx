import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeveloperBioCard from "../components/DeveloperBioCard";
import { setDevelopers } from "../features/developers/developersSlice";
import { getDevelopers } from "../utils/devAPI";

export default function DisplayBios() {
  const developers = useSelector((state) => state.developers);
  const dispatch = useDispatch();

  useEffect(() => {
    getDevelopers()
      .then((data) => {
        dispatch(setDevelopers(data));
      })
      .catch((error) => console.error("Error fetching developers: " + error));
  }, []);

  return (
    <>
      <h1>Developers</h1>

      <div className="row">
        {developers.map((dev) => (
          <DeveloperBioCard key={dev.id} developer={dev} />
        ))}
      </div>
    </>
  );
}
