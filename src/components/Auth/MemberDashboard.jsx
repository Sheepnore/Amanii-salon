import { db } from "../../config/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useAuth } from "./UserDataContext";
import { useEffect, useState } from "react";
import "../../styles/MemberDashboard.css";

function MemberDashboard() {
  const { userData } = useAuth();
  const [name4Search, setName4Search] = useState("");
  const [phone4Search, setPhone4Search] = useState("");
  const [nonMemberAppointments, setNonMemberAppointments] = useState([]);
  const [loginUserAppointments, setLoginUserAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleNonMemberQuery() {
    const q = query(
      collection(db, "appointments"),
      where("name", "==", name4Search),
      where("phone", "==", phone4Search),
      orderBy("date", "desc")
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
          where("accountId", "==", userData.uid),
          orderBy("date", "desc")
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
      <div className="dashboard">
        {userData ? (
          <div className="member-section">
            <h2>您好，{userData.name}會員預約</h2>
            <div className="appointments-grid">
              {loginUserAppointments.map((appo) => (
                <div key={appo.id} className="card">
                  <div className="card-content appointment-details">
                    <div>
                      <p className="label">日期</p>
                      <p className="value">{appo.date}</p>
                    </div>
                    <div>
                      <p className="label">時間</p>
                      <p className="value">{appo.time}</p>
                    </div>
                    <div>
                      <p className="label">姓名</p>
                      <p className="value">{appo.name}</p>
                    </div>
                    <div>
                      <p className="label">服務</p>
                      <p className="value">{appo.services}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="non-member-section">
            <div className="card search-form">
              <div className="card-content">
                <div className="input-group">
                  <label htmlFor="nameSearch">輸入姓名</label>
                  <input
                    id="nameSearch"
                    value={name4Search}
                    onChange={(e) => setName4Search(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phoneSearch">輸入電話號碼</label>
                  <input
                    id="phoneSearch"
                    value={phone4Search}
                    onChange={(e) => setPhone4Search(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleNonMemberQuery}
                  className="search-button"
                >
                  <span className="icon">📅</span>
                  查詢預約
                </button>
              </div>
            </div>

            <div className="appointments-section">
              <h2>預約紀錄</h2>
              <div className="appointments-grid">
                {nonMemberAppointments.map((queryData) => {
                  if (!IsDataComplete(queryData)) return null;
                  return (
                    <div key={queryData.id} className="card">
                      <div className="card-content appointment-details">
                        <div>
                          <p className="label">預約時間</p>
                          <p className="value">{queryData.date}</p>
                        </div>
                        <div>
                          <p className="label">預約者大名</p>
                          <p className="value">{queryData.name}</p>
                        </div>
                        <div>
                          <p className="label">電話</p>
                          <p className="value">{queryData.phone}</p>
                        </div>
                        <div>
                          <p className="label">服務項目</p>
                          <p className="value">{queryData.services}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default MemberDashboard;
