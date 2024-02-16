import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.8.0/firebase-database.min.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjzye_rFPtazLlD0zG79yF87Q89nEETrI",
  authDomain: "complaint-portal-771dc.firebaseapp.com",
  databaseURL: "https://complaint-portal-771dc-default-rtdb.firebaseio.com/",
  projectId: "complaint-portal-771dc",
  storageBucket: "complaint-portal-771dc.appspot.com",
  messagingSenderId: "821457820057",
  appId: "1:821457820057:web:5b8b34c8ba79fb5b435b08",
  measurementId: "G-SHYM38XS5T"
};

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var grievanceFormDB = firebase.database().ref('academic-CForm');

  document.getElementById('academic-CForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var category = getElementVal('acadCategory');
    var title = getElementVal('acadTitle');
    var nameInvolve = getElementVal('acadInvolve');
    var date = getElementVal('acadDate');
    var time = getElementVal('acadTime');
    var specGrievance = getElementVal('acadGrievance');
    var reqOutcome = getElementVal('acadOutcome');

    saveMessages(category, title, nameInvolve, date, time, specGrievance, reqOutcome);
  }

  const saveMessages = (category, title, nameInvolve, date, time, specGrievance, reqOutcome) => {
    var newAcademicCForm = grievanceFormDB.push();

    newAcademicCForm.set({
      category : acadCategory,
      title : acadTitle,
      nameInvolve : acadInvolve,
      date : acadDate,
      time : acadTime,
      specGrievance : acadGrievance,
      reqOutcome : acadOutcome
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;

  };
