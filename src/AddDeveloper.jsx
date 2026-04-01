import { useState } from "react";

import Developer from "./Developer";

export default function AddDeveloper(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favoriteLanguage, setFavoriteLanguage] = useState("");
  const [yearStarted, setYearStarted] = useState("");

  const handleSubmit = (e) => {
    let dev = new Developer(
      null,
      firstName,
      lastName,
      favoriteLanguage,
      yearStarted,
    );

    props.handleNewDeveloper(dev);

    e.preventDefault();
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
