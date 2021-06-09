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
      products:[],
      aaa:''
    }

    this.handleTextdownload = this.handleTextdownload.bind(this);    
  }


  handleTextdownload() {

      let products = [];
      let product = firebase.database().ref("Signature");

      product.on('value',  function(snap) {
     

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
      });

      if( products != null ) {
          this.setState({ products });
        }
  }

  render() {

    return (
      <div className='container'>
        <div>
          <button onClick={this.handleTextdownload}>downloadText</button>
        </div>

        <table style={{"border":"1px solid #000000", "margin":"30px 15px 0px 15px"}}>
            <thead>
              <tr>
                  <th style={{"border":"1px solid #000000"}}>contact </th>
                  <th style={{"border":"1px solid #000000"}}>contactType </th>
                  <th style={{"border":"1px solid #000000"}}>name </th>
                  <th style={{"border":"1px solid #000000"}}>pictureId </th>
                  <th style={{"border":"1px solid #000000"}}>signature </th>
                  <th style={{"border":"1px solid #000000"}}>signatureid </th>

              </tr>

            </thead>
            <tbody>
            {
              this.state.products.map( item => {
                return(
                   <tr >
                       <td style={{"border":"1px solid #000000"}}>{item.contact}</td> 
                       <td style={{"border":"1px solid #000000"}}>{item.contactType}</td> 
                       <td style={{"border":"1px solid #000000"}}>{item.name}</td> 
                       <td style={{"border":"1px solid #000000"}}>
                          <img src={item.pictureId} width="100px"/>
                        </td> 
                       <td style={{"border":"1px solid #000000"}}>{item.signature}</td> 
                       <td style={{"border":"1px solid #000000"}}>{item.signatureid}</td> 
                   </tr>
                 )   

              })
            }
            </tbody>
        </table>

      </div>
    )
  }
}

export default App;