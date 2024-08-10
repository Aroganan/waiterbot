import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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

// Reference your database
const database = getDatabase();

function writeTableData(tableId, item){
    const dbRef = ref(database);
    const tablesItemsRef = ref(database, "tables_and_items");

    // Fetch existing data to count entries
    get(child(dbRef, "tables_and_items")).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const numberOfEntries = Object.keys(data).length;

            // Generate the next sequential key
            const nextKey = (numberOfEntries + 1).toString().padStart(2, '0'); // E.g., "01", "02", "03", etc.

            for(let i = 0; i < item.length; i++){
                item[i].push("Order");
            }

            let tableNo_split = tableId.split("-");
            // Save the data with the sequential key
            set(ref(database, `tables_and_items/${nextKey}`), {
                Table_No: tableNo_split[1],
                Ordered_Item: item
            });
        } else {

            for(let i = 0; i < item.length; i++){
                item[i].push("Order");
            }
            let tableNo_split = tableId.split("-");
            // If no entries exist, start with "01"
            set(ref(database, `tables_and_items/01`), {
                Table_No: tableNo_split[1],
                Ordered_Item: item
            });
        }
    }).catch((error) => {
        console.error("Error fetching data: ", error);
    });
}

window.writeTableData = writeTableData;
