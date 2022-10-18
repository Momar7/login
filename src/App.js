import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyImage from './asset/image1.jpg'
// import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


function App() {
  return (
    <body>
      <div className='container'> 
      <h2> CONNEXION</h2>
      <form>
        <div>
          <label>Pseudo</label>
          <input type='text' name='pseudo'/>
        </div>
        <div>
          <label>Mot de passe</label>
          <input type='password' name='password'className='password'/>
        </div>
        <button className='btn btn-danger'>Se connecter</button>
        </form>
        </div>
    </body>
  );
}

export default App;
