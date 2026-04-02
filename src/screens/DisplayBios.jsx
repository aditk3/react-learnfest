import PropTypes from "prop-types";

import Developer from "../models/Developer";
import DeveloperBioCard from "../components/DeveloperBioCard";

export default function DisplayBios(props) {
  return props.developers.map((dev) => (
    <DeveloperBioCard key={dev.id} developer={dev} />
  ));
}

DisplayBios.propTypes = {
  developers: PropTypes.arrayOf(PropTypes.instanceOf(Developer)),
};
