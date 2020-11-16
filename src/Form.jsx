import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      textarea: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Votre film préféré : ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
      });
  }

  render() {
    const { title, poster, message } = this.state;
    return (
      <div className="FormMovie">
        <h2>What's your Favorite Movie ?</h2>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={poster}
              />
            </div>
    
            <div className="form-data">
              <label htmlFor="message">message</label>
              <textarea
                rows="4"
                cols="30"
                name="comment"
                type="text"
                form="userform"
                onChange={this.onChange}
                value={message}
              ></textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" className="button" />
            </div>

            <div className="form-data">
              <label htmlFor="image"></label>
              <img
                alt={title}
                src={poster}
                onChange={this.onChange}
                id="poster"
                name="poster"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
