import PropTypes from "prop-types";

import Developer from "./Developer";

function DeveloperBioCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {props.developer.firstName} {props.developer.lastName}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Favorite language: {props.developer.favoriteLanguage}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Year started: {props.developer.yearStarted}
        </h6>
      </div>
    </div>
  );
}

DeveloperBioCard.propTypes = {
  key: PropTypes.number,
  developer: PropTypes.instanceOf(Developer),
};

export default DeveloperBioCard;
