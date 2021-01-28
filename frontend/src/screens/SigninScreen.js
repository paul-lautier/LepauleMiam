import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Connexion</h1>
        </div>
        <div>
          <label htmlFor="email">Adresse Mail</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre Mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Mot de Passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre Mot de Passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
          Connexion
          </button>
        </div>
        <div>
          <label />
          <div>
            Pas encore de compte ? <Link to="/register">Crée en un !</Link>
          </div>
        </div>
      </form>
    </div>
  );
}