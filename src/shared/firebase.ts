import { getAuth, getRedirectResult, GithubAuthProvider } from "firebase/auth";
import firebase from "./firebase-config";

export const provider = new GithubAuthProvider();

export const auth = getAuth(firebase);
