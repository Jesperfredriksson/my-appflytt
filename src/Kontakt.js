import React from "react"
import Navbar from "./Navbar"
import Contact from "./Contact"
import { fireStore } from "./base"

class Kontakt extends React.Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    fireStore
      .collection("contacts")
      .get()
      .then(snapshot => {
        let newContacts = []
        snapshot.forEach(doc => newContacts.push(doc.data()))
        this.setState({ contacts: newContacts })
      })
  }

  render() {
    return (
      <section>
        <section>
          <p className="KontaktText">Välkommen att kontakta oss!</p>

          <Navbar />
        </section>

        {this.state.contacts.map(contact => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </section>
    )
  }
}

export default Kontakt
