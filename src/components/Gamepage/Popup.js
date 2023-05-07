import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import db from "../../firebase-config";

export default function Popup({ time }) {
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dialog = modalRef.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  const allUsersRef = collection(db, "allUsers");

  async function setUser(e) {
    e.preventDefault();
    const docToCheckRef = doc(db, "allUsers", `${inputRef.current.value}`);
    const docToCheckSnap = await getDoc(docToCheckRef);

    if (docToCheckSnap.exists()) {
      inputRef.current.setCustomValidity("User already exists");
      inputRef.current.reportValidity();
    } else {
      inputRef.current.setCustomValidity("");
      await setDoc(doc(allUsersRef, `${inputRef.current.value}`), {
        user: { name: inputRef.current.value, timer: time },
      });
      navigate("/");
    }
  }

  return (
    <dialog ref={modalRef}>
      <form>
        <label htmlFor="name">Enter your name:</label>
        <input ref={inputRef} type="text" id="name" required />
        <button type="submit" onClick={setUser}>
          Submit result
        </button>
      </form>
    </dialog>
  );
}
