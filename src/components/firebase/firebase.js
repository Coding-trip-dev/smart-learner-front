import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBRRspchcussWXyQQk6VoRPxwo4U-1MeEY",
    authDomain: "smart-learner-283011.firebaseapp.com",
    databaseURL: "https://smart-learner-283011.firebaseio.com",
    projectId: "smart-learner-283011",
    storageBucket: "smart-learner-283011.appspot.com",
    messagingSenderId: "644531894591",
    appId: "1:644531894591:web:0ac4724331a152462d7b8a",
    measurementId: "G-F0P3KWTJTV"
}

firebase.initializeApp(config);
export default firebase