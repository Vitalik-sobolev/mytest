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
    appId: "1:820946572086:web:3126bb54ccf97906411997",
    measurementId: "G-BY6WNH35QH"
};

firebase.initializeApp(config);

const storageRef = firebase.storage().ref()
const storage = firebase.storage();

class App extends Component {

   constructor() {
    super()
    this.state = {
      uploading: false,
      percent: 0,
      file: '',
      error: '',
      url: ''
    }
    this.handleFileSelect = this.handleFileSelect.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
  }
  handleFileSelect(e) {
    this.setState({file: e.target.files[0]})
  }

  handleFileUpload() {
    /////////////////////////////////////////////////////////////////////////////////////
    // this.setState({uploading: true})
    // var imagename = this.state.file.name;

    // storageRef.child(imagename)
    //   .put(this.state.file)
    //   .then(snap => {
    //     this.setState({uploading: false})
    //     // the loading percent logic here?
    //     // how do i keep tabs on the percent?
    //   })
    //   .catch(err => this.setState({error: err.message}))
    //////////////////////////////////////////////////////////////////////////////////////
    // var uploadTask = storageRef.child('images/rivers.jpg').put(this.state.file);

    // // Register three observers:
    // // 1. 'state_changed' observer, called any time the state changes
    // // 2. Error observer, called on failure
    // // 3. Completion observer, called on successful completion
    // uploadTask.on('state_changed', function(snapshot){
    //   // Observe state change events such as progress, pause, and resume
    //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log('Upload is ' + progress + '% done');
    //   switch (snapshot.state) {
    //     case firebase.storage.TaskState.PAUSED: // or 'paused'
    //       console.log('Upload is paused');
    //       break;
    //     case firebase.storage.TaskState.RUNNING: // or 'running'
    //       console.log('Upload is running');
    //       break;
    //   }
    // }, function(error) {
    //   // Handle unsuccessful uploads
    // }, function() {
    //   // Handle successful uploads on complete
    //   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //   var downloadURL = uploadTask.snapshot.downloadURL;
    // });
    //////////////////////////////////////////////////////////////////////////////////////////
    var imagen = "proof2";
    
    const uploadTask = storage.ref('images/proof2').put(this.state.file);
    uploadTask.on('state_changed',
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    },
    (error) => {
         // error function ....
 
      console.log(error);

    },
  () => {
      // complete function ....
      storage.ref('images').child('proof2').getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
        })
    });

    console.log(this.state.url);
    ///////////////////////////////////////////////////////////////////////////////////////////
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

        <img src={this.state.url} />
      </div>
    )
  }
}

export default App;