import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase'


const config = {

    apiKey: "AIzaSyAKqR1-It9seTRTImam-ubPlJyYpj2AGkE",
    authDomain: "testing-ab535.firebaseapp.com",
    databaseURL: "https://testing-ab535.firebaseio.com",
    projectId: "testing-ab535",
    storageBucket: "testing-ab535.appspot.com",
    messagingSenderId: "89975396088",
    appId: "1:89975396088:web:502240943a7a2159700d0d"
};

firebase.initializeApp(config);

class App extends Component {

   constructor() {
    super()
    this.state = {
      imgfilem:'',
      products:[]
    }

    this.handleTextdownload = this.handleTextdownload.bind(this);    
  }


  handleTextdownload() {
  }
  componentDidMount() {
      let product = firebase.database().ref("Signature");

      product.on('value',  function(snap) {
     
          let products = [];
          let words = snap.val();
          for(let word in words) {
            if(!words[word].contact) words[word].contact = "-";
            if(!words[word].contactType) words[word].contactType = "-";
            if(!words[word].name) words[word].name = "-";
            if(!words[word].pictureId) words[word].pictureId = "-";
            if(!words[word].signature) words[word].signature = "-";
            if(!words[word].signatureid) words[word].signatureid = "-";

            products.push({
              contact : words[word].contact,
              contactType : words[word].contactType, 
              name : words[word].contact,
              pictureId : words[word].pictureId,
              signature : words[word].signature,
              signatureid : words[word].signatureid
            });
          }

          if( products != null ) {
              console.log("products", products);
              this.setState({ products });
            }
      });

  }

  render() {
    return (
      <div className='container'>
        <div>
          <button onClick={this.handleTextdownload}>downloadText</button>
        </div>
        <img src={this.state.imgfilem} width="500px"  />

        <p> { this.state.pcolor }</p>
        <p> { this.state.scolor }</p>

      </div>
    )
  }
}

export default App;