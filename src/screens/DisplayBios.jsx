import { useEffect } from "react";
import DeveloperBioCard from "../components/DeveloperBioCard";
import { API_URL } from "../utils/constants";
import { useContext } from "react";
import DevelopersContext from "../contexts/developers";

export default function DisplayBios() {
  const { developers, setDevelopers } = useContext(DevelopersContext);

  useEffect(() => {
    fetch(`${API_URL}/developers`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
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
