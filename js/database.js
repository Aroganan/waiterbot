// firebase database connection.....
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6Fnu2c0eiszLQ3gbRm62j-SV3ETBxSmY",
    authDomain: "wbot-7488c.firebaseapp.com",
    databaseURL: "https://wbot-7488c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wbot-7488c",
    storageBucket: "wbot-7488c.appspot.com",
    messagingSenderId: "699872450961",
    appId: "1:699872450961:web:37a2fbcf1adbaaa871a230"
  };




// Initialize Firebase
const app = initializeApp(firebaseConfig);

//   referance your database
const database = getDatabase();



function writeTableData(tableId, item){
    set(ref(database, "tables and items"), {
        Table_No : tableId,
        Ordered_Item: item
    });
}

window.writeTableData = writeTableData;