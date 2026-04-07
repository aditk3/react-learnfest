import { useContext, useEffect } from "react";
import DeveloperBioCard from "../components/DeveloperBioCard";
import DevelopersContext from "../contexts/developers";
import { getDevelopers } from "../utils/devAPI";

export default function DisplayBios() {
  const { developers, setDevelopers } = useContext(DevelopersContext);

  useEffect(() => {
    getDevelopers()
      .then((data) => {
        setDevelopers(data);
      })
      .catch((error) => console.error("Error fetching developers: " + error));
  }, []);

  return (
    <>
      <h1>Developers</h1>

      {developers.map((dev) => (
        <DeveloperBioCard key={dev.id} developer={dev} />
      ))}
    </>
  );
}
