import React from "react";

class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <section className="Card">
        <h3>Titel</h3>
        <img
          className="Profilepicture"
          src={
            "https://firebasestorage.googleapis.com/v0/b/movingparty-c3952.appspot.com/o/alex-lacayo-756508-unsplash.jpg?alt=media&token=0f3d05b1-d4d8-4985-9920-0dd1d4e279c5"
          }
          alt="Profilbild"
        />
        <p>Namn: {name}</p>
        <p>Email: {email}</p>
        <p>Telefon: {phone}</p>
      </section>
    );
  }
}

export default Contact;
