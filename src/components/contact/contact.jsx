import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

function Contact() {
  //initialisation des données
  const initialFormData = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //gestion de l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send", {
        //envoi en requête POST les données saisies
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message envoyé avec succès !");
        setFormData(initialFormData); // Réinitialiser le formulaire
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    }
  };

  //structure du formulaire

  return (
    <div className="contact" id="contact">
      <div className="title-form text-white pt-4">
        <h1> Contact</h1>
      </div>
      <div className="contact-form">
        <Form className="form-card mb-5" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} className="text-white">
              <Form.Label>Nom *</Form.Label>
              <Form.Control
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Nom"
                required
              />
            </Form.Group>
            <Form.Group as={Col} className="text-white">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Prénom"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="text-white">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} className="text-white">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3 text-white">
            <Form.Label>Objet *</Form.Label>
            <Form.Control
              type="text"
              name="objet"
              value={formData.objet}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white">
            <Form.Label>Message *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <p className="text-white">* champ obligatoire</p>
          <div className="button-submit">
            <Button type="submit" className="btn-dark btn-lg">
              Envoyer
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
