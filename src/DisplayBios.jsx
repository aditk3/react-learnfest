import React from "react";

import Developer from "./Developer";
import DeveloperBioCard from "./DeveloperBioCard";

export default class DisplayBios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      developers: [
        new Developer(1, "Adit", "Kapoor", "TS", 2016),
        new Developer(2, "Joe", "Rock", "JS", 2000),
      ],
    };
  }

  render() {
    return this.state.developers.map((dev) => (
      <DeveloperBioCard key={dev.id} developer={dev} />
    ));
  }
}
