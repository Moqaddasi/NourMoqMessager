import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

document.getElementById("signinForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  let email = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Sign In successful!");
    // Redirect to chat page or dashboard
    window.location.href = "chat.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});
