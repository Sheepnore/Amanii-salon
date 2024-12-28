import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./UserDataContext";
import { useEffect, useState } from "react";

function MemberDashboard() {
  const { userData } = useAuth();
  const [name4Seach, setName4Search] = useState("");
  const [phone4Search, setPhone4Search] = useState("");

  function isUserLogin() {
    return userData;
  }
  console.log("current user:", isUserLogin());
  // function isUserDataEmpty() {
  //   return Object.keys(userData).length === 0;
  // }

  async function handleNonUserQuery() {
    const q = query(
      collection(db, "appointments"),
      where("name", "==", name4Seach),
      where("phone", "==", phone4Search)
    );
    const nonUserQuery = await getDocs(q);
    nonUserQuery.forEach((doc) => {
      console.log("query data:", doc.data());
    });
  }

  useEffect(() => {
    async function fetchUserAppointmentData() {
      try {
        const q = query(
          collection(db, "appointments"),
          where("name", "==", "施博凱")
        );
        const appointmentQuery = await getDocs(q);
        if (appointmentQuery.empty) {
          console.error("Error: Data fetched is empty.");
        }
        appointmentQuery.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserAppointmentData();
  }, []);

  return (
    <>
      {isUserLogin() ? (
        <h1>User login</h1>
      ) : (
        <>
          <label htmlFor="nameSearch">輸入姓名</label>
          <input
            type="text"
            id="nameSearch"
            onChange={(e) => {
              console.log(e.target.value);
              setName4Search(e.target.value);
            }}
            value={name4Seach}
          />
          <label htmlFor="phoneSearch">輸入電話號碼</label>
          <input
            type="text"
            id="phoneSearch"
            onChange={(e) => {
              setPhone4Search(e.target.value);
            }}
            value={phone4Search}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleNonUserQuery();
            }}
          >
            查詢
          </button>
        </>
      )}
    </>
  );
}
export default MemberDashboard;
