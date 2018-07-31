import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyBl3fOB975a1t6YuXf5XJjZaUemY5Kcb3Q',
	authDomain: 'tc-wiki-faf85.firebaseapp.com',
	databaseURL: 'https://tc-wiki-faf85.firebaseio.com',
	projectId: 'tc-wiki-faf85',
	storageBucket: 'tc-wiki-faf85.appspot.com',
	messagingSenderId: '885291438266'
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const auth = firebase.auth();
export const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.addScope('repo');

export const feedbackDb = firebase.firestore().collection('feedback');
