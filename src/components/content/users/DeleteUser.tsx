import { useState, useEffect } from "react";
import { deleteUser } from "../../../apiCalls/usersCalls";
import { useParams, Navigate } from "react-router-dom";

// Deletes the user
export default function DeleteUser() {
  const [finished, setFinished] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    if (finished) {
      return;
    }

    // This is weird, should probably fix it later
    const tmp = typeof(userId) === "string" ? userId : "-1";
    deleteUser(parseInt(tmp)).then(res => setFinished(true), err => console.log(err));
  });

  return <>{finished ? <Navigate replace to={{ pathname: "/users" }} /> : ""}</>;
}