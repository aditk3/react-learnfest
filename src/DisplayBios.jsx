import PropTypes from "prop-types";

import Developer from "./Developer";
import DeveloperBioCard from "./DeveloperBioCard";

export default function DisplayBios(props) {
  return props.developers.map((dev) => (
    <DeveloperBioCard key={dev.id} developer={dev} />
  ));
}

DisplayBios.propTypes = {
  developers: PropTypes.arrayOf(PropTypes.instanceOf(Developer)),
};
