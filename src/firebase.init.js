import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWVIcJ72PJp2mIi96jml8CJDQ0BogCAJw",
  authDomain: "kite-bd-holidays.firebaseapp.com",
  projectId: "kite-bd-holidays",
  storageBucket: "kite-bd-holidays.appspot.com",
  messagingSenderId: "305343263378",
  appId: "1:305343263378:web:6aa7356e9ef7717304ac4b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
