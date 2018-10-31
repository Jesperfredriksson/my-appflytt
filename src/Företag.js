import React from "react";
import Navbar from "./Navbar";
class Företag extends React.Component {
  render() {
    return (
      <section>
        <p className="ForetagText">
          Ni är nu ett steg närmare till att nå ut till nya kunder.
        </p>
        <Navbar />
      </section>
    );
  }
}

export default Företag;
