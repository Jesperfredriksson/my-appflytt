import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
class Nyinflyttad extends React.Component {
  render() {
    return (
      <section>
        <section className="Nyinflytt">
          <p>Välkommen till ert nya hem!</p>
          <p>
            För att ni skall känna er extra välkommen till ert nya område vill
            vi och våra samarbetspartners ge er en inflyttningspresent. Boxen
            skickas hem till er som nyligen flyttat till en ny kommun och ni får
            boxen rakt ner i brevlådan. I boxen hittar ni spännande erbjudanden
            och gåvor från företag som vi tror ni kommer ha glädje av. Vi hoppas
            att ni kommer trivas i ert nya hem!
          </p>
        </section>
        <Navbar />
        <section>
          <div className="InfoNyin">
            <Link to="/Tipsinforflytten">Tips inför flytten</Link>

            <Link to="/Har-finns-flytt-kalas">Här finns Flytt-kalas</Link>

            <Link to="/Nar-ni-flyttar-in">När ni flyttat in</Link>
          </div>
        </section>
      </section>
    );
  }
}

export default Nyinflyttad;
