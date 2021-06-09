import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCKQs5N4ic-rcV5hUoMqxWtB1WZhFpiw2I",
    authDomain: "test111-b17d4.firebaseapp.com",
    databaseURL: "https://test111-b17d4.firebaseio.com",
    projectId: "test111-b17d4",
    storageBucket: "test111-b17d4.appspot.com",
    messagingSenderId: "820946572086",
    appId: "1:820946572086:web:b8b90f6c1b7aeeb4411997",
    measurementId: "G-SPT9B5REG6"
};

firebase.initializeApp(config);

const storageRef = firebase.storage().ref()


/*const admin = require('firebase-admin');
var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test111-b17d4.firebaseio.com"
});
const db = admin.firestore();
const storageRef = admin.storage().ref()*/


class App extends Component {

   constructor() {
    super()
    this.state = {
      uploading: false,
      percent: 0,
      file: '',
      error: ''
    }
    this.handleFileSelect = this.handleFileSelect.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
  }
  handleFileSelect(e) {
    this.setState({file: e.target.files[0]})
  }

  handleFileUpload() {
    this.setState({uploading: true})
    var imagename = this.state.file;

    storageRef.child(imagename)
      .put(this.state.file)
      .then(snap => {
        this.setState({uploading: false})
        // the loading percent logic here?
        // how do i keep tabs on the percent?
      })
      .catch(err => this.setState({error: err.message}))
  }
  render() {
    return (
      <div className='container'>
        <div className='form'>
          <input type='file' onChange={this.handleFileSelect}/>
          <button onClick={this.handleFileUpload}>Upload</button>
        </div>
        {this.state.uploading 
          ? <div>
              <div className='load-bar'/>
              <span>Uploading: {this.state.percent}%</span>
            </div>
          : ''
        }
        <pre>
          <code>
            {this.state.error ? <span className='error'>{this.state.error}</span> : ''}
            {JSON.stringify(this.state.file, null, 2)}
          </code>
        </pre>
      </div>
    )
  }
}

export default App;