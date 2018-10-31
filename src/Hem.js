import React from "react";
import Navbar from "./Navbar";
class Hem extends React.Component {
  render() {
    return (
      <section>
        <Navbar />
        <section className="HemText">
          <p>
            Konceptet med utskick till nyinflyttade har funnits länge, men vår
            paketering är originell och väcker därför nyfikenhet samt intresse.
            Flytt-Kalas är en välkomstbox, som vi skickar ut till alla
            nyinflyttade (mellan 18 och 80 år) i Stockholm.
          </p>
        </section>
      </section>
    );
  }
}

export default Hem;
