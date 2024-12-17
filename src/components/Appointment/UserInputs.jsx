import "../../styles/UserInputs.css";

function UserInputs({ fullName, setFullName, setPhone }) {
  return (
    <div className="UserInputs">
      <div className="highlight-heading">3. Your Information</div>
      <div className="user-info">
        <div className="info-inputs">
          <input
            type="text"
            className="firstName"
            placeholder="Your first name"
            defaultValue={null}
            onChange={(e) => {
              setFullName((newVal) => ({
                ...fullName,
                firstName: e.target.value,
              }));
            }}
            pattern="[\u4e00-\u9fff]{1,5}"
          />
          <input
            type="text"
            className="lastName"
            placeholder="Your last name"
            defaultValue={null}
            onChange={(e) => {
              setFullName((newVal) => ({
                ...fullName,
                lastName: e.target.value,
              }));
            }}
            pattern="[\u4e00-\u9fff]{1,5}"
          />
          <input
            type="tel"
            className="phone"
            placeholder="Phone number for contact"
            defaultValue={null}
            onChange={(e) => {
              setPhone(() => e.target.value);
            }}
            pattern="^0\d{9}"
          />
        </div>
      </div>
    </div>
  );
}
export default UserInputs;
