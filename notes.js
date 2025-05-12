const fetchDataFromDocument = async () => {
      try {
        const docRef = doc(fs, "users", "qFm8ysCj9hWzdIjjup0B");
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("ERROR ========> ", error);
      }
};

const fetchAllData = async () => {
  try {
    const usersRef = collection(fs, "users");
    const querySnapshot = await getDocs(usersRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc?.data());
    });
  } catch (error) {
    console.log("ERROR ========> ", error);
  }
};
    

import {fs} from "./firebaseConfig"
import { doc, getDoc, collection, getDocs  } from "firebase/firestore";


