import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./UserDataContext";
import { useEffect, useState } from "react";

function MemberDashboard() {
  const { userData } = useAuth();
  const [name4Seach, setName4Search] = useState("");
  const [phone4Search, setPhone4Search] = useState("");
  const [nonMemberAppointments, setNonMemberAppointments] = useState([]);
  const [loginUserAppointments, setLoginUserAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleNonMemberQuery() {
    const q = query(
      collection(db, "appointments"),
      where("name", "==", name4Seach),
      where("phone", "==", phone4Search)
    );
    const nonMemberQuery = await getDocs(q);
    const nonMemberAppoData = nonMemberQuery.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setNonMemberAppointments(nonMemberAppoData);
  }
  console.log(nonMemberAppointments);

  function IsDataComplete(obj) {
    const objValues = Object.values(obj);
    console.log(objValues);
    let isCurrentQueryDataComplete = true;
    objValues.map((val) => {
      if (!val) {
        isCurrentQueryDataComplete = false;
      }
    });
    return isCurrentQueryDataComplete;
  }

  useEffect(() => {
    async function fetchUserAppointmentData() {
      if (!userData?.uid) {
        setIsLoading(true);
        return;
      }

      try {
        const q = query(
          collection(db, "login-user-appointments"),
          where("accountId", "==", userData.uid)
        );
        const appointmentQuery = await getDocs(q);
        if (appointmentQuery.empty) {
          console.error("Error: Data fetched is empty.");
        }
        console.log("appointment query:", appointmentQuery);
        const appointments = appointmentQuery.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(appointments);
        setLoginUserAppointments(appointments);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserAppointmentData();
  }, [userData]);

  // if (isLoading) {
  //   return <div>Loading......</div>;
  // }

  return (
    <>
      {userData ? (
        <>
          <h2>您好，{userData.name}會員預約：</h2>
          <h2>預約紀錄：</h2>
          {loginUserAppointments.map((appo) => {
            return (
              <div key={appo.id}>
                <div>日期:{appo.date}</div>
                <div>時間:{appo.time}</div>
                <div>姓名:{appo.name}</div>
                <div>服務:{appo.service}</div>
              </div>
            );
          })}
        </>
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
              handleNonMemberQuery();
            }}
          >
            查詢
          </button>
          <h2>預約紀錄</h2>
          {nonMemberAppointments.map((queryData) => {
            if (!IsDataComplete(queryData)) {
              return;
            }
            return (
              <div key={queryData.id}>
                <p>預約時間：{queryData.date}</p>
                <p className="queryData">預約者大名：{queryData.name}</p>
                <p>電話：{queryData.phone}</p>
                <p>
                  服務項目：
                  {queryData.services}
                </p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
export default MemberDashboard;
