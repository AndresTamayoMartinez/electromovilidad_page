// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxFEvlIKeZMW-95uuLiX9oXtDJhJdYJPs",
  authDomain: "electromovilidadteccelay-9bf40.firebaseapp.com",
  databaseURL: "https://electromovilidadteccelay-9bf40-default-rtdb.firebaseio.com",
  projectId: "electromovilidadteccelay-9bf40",
  storageBucket: "electromovilidadteccelay-9bf40.appspot.com",
  messagingSenderId: "910252513998",
  appId: "1:910252513998:web:9a5a2d4c66688c57a78e9f"
};

// Initialize Firebase
const appConnection  = initializeApp(firebaseConfig); //Application Connection
const dbConnection   = getFirestore(appConnection); //DataBase Connection
const storage        = getStorage(appConnection); //Storage Connection

//----------Functions to obtain data from the data base and storage----------//
//getTeam function, to obtain data from the work team
export const getTeam = () => getDocs(collection(dbConnection, "team"));
//getPerson function, to obtain data from a person from de work team
export const getPerson = (id) => getDoc(doc(dbConnection, "team", id));
//getProjects function, to obtain data from the projects
export const getProjects = () => getDocs(collection(dbConnection, "projects"));
//getProject function, to obtain data from a specific project
export const getProject = (id) => getDoc(doc(dbConnection, "projects", id));

//----------Functions to save data in the data base and storage----------//
//addPerson function, to save data from a person in the data base
export const addPerson = (name, degree, position, shortDesc, fullDesc1, fullDesc2, image) => addDoc(
  collection(dbConnection, "team"),
  {name, degree, position, shortDesc, fullDesc1, fullDesc2, image}
);
//addPersonImage function, to save iamge from a person in the data storage
export async function addPersonImage(file){
  const storageRef = ref(storage, 'person/' + uuid.v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
//addProject function, to save data from a person in the data base
export const addProject = (name, sdesc, desc1, desc2, image) => addDoc(
  collection(dbConnection, "projects"),
  {name, sdesc, desc1, desc2, image}
);
//addProjectImage function, to save iamge from a person in the data storage
export async function addProjectImage(file){
  const storageRef = ref(storage, 'projects/' + uuid.v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

//----------Functions to delete data in the data base and storage----------//
//deletePerson function to delete data from a person in the database
export const deletePerson = (id) => deleteDoc(doc(dbConnection, 'team', id));
//deletePersonImage function to delete images from a person in the data storage

//deleteProject function to delete data from a project in the database
export const deleteProject = (id) => deleteDoc(doc(dbConnection, 'projects', id));
//deletePersonImage function to delete images from a person in the data storage

//----------Functions to update data in the data base and storage----------//\
//updatePerson function to update data from a person in the database
export const updatePerson = (id, newFields) => updateDoc(doc(dbConnection, 'team', id), newFields);
//updateProyect function to update data from a proyect in the database
 export const updateProject = (id, newFields) => updateDoc(doc(dbConnection, 'projects', id), newFields);