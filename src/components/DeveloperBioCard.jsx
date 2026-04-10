import PropTypes from "prop-types";

import Developer from "../models/Developer";

function DeveloperBioCard(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body">
          <h5 className="card-title">
            {props.developer.firstName} {props.developer.lastName}
          </h5>
          <p className="card-subtitle mb-2 text-muted">
            Favorite language: <b>{props.developer.favoriteLanguage}</b>
          </p>
          <p className="card-subtitle mb-2 text-muted">
            Year started: <b>{props.developer.yearStarted}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

DeveloperBioCard.propTypes = {
  key: PropTypes.number,
  developer: PropTypes.instanceOf(Developer),
};

export default DeveloperBioCard;
