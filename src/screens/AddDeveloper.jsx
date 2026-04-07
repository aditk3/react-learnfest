import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { postDeveloper } from "../utils/devAPI";

export default function AddDeveloper() {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favoriteLanguage, setFavoriteLanguage] = useState("");
  const [yearStarted, setYearStarted] = useState("");

  const [isValidForm, setIsValidForm] = useState(false);
  const [isDirtyForm, setIsDirtyForm] = useState(false);

  useEffect(() => {
    let firstNameValid = firstName ? true : false;
    let lastNameValid = lastName ? true : false;
    let favoriteLanguageValid = favoriteLanguage ? true : false;
    let yearStartedValid = !isNaN(yearStarted) && yearStarted;

    setIsValidForm(
      firstNameValid &&
        lastNameValid &&
        favoriteLanguageValid &&
        yearStartedValid,
    );

    setIsDirtyForm(
      firstNameValid ||
        lastNameValid ||
        favoriteLanguageValid ||
        yearStartedValid,
    );
  }, [firstName, lastName, favoriteLanguage, yearStarted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      firstName,
      lastName,
      favoriteLanguage,
      yearStarted: parseInt(yearStarted, 10),
    };

    try {
      const response = await postDeveloper(body);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      navigate("/developers");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h3>Add new developer</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Favorite Language</label>
          <input
            type="text"
            name="favoriteLanguage"
            value={favoriteLanguage}
            onChange={(e) => setFavoriteLanguage(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Year Started</label>
          <input
            type="text"
            name="yearStarted"
            value={yearStarted}
            onChange={(e) => setYearStarted(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button type="submit" disabled={!isValidForm}>
            Submit
          </button>
        </div>
      </form>

      {!isValidForm && isDirtyForm && (
        <div className="alert alert-danger">
          All fields are required and year started must be numeric
        </div>
      )}
    </>
  );
}
