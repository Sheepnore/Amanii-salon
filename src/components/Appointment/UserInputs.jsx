import "../../styles/UserInputs.css";
function UserInputs({ setFormData, formData }) {
  return (
    <div className="UserInputs">
      <div className="highlight-heading">
        <span>輸入您的聯絡訊息</span>
      </div>
      <div className="user-info">
        <div className="info-inputs">
          <input
            type="text"
            className="firstName"
            placeholder="您的姓氏"
            defaultValue={formData.fullName.firstName}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                fullName: {
                  ...prev.fullName,
                  firstName: e.target.value,
                },
              }));
            }}
            pattern="[\u4e00-\u9fff]{1,5}"
            required
            title="請輸入您的姓氏"
          />
          <input
            type="text"
            className="lastName"
            placeholder="您的名字"
            defaultValue={formData.fullName.lastName}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                fullName: {
                  ...prev.fullName,
                  lastName: e.target.value,
                },
              }));
            }}
            pattern="[\u4e00-\u9fff]{1,5}"
            required
            title="請輸入您的名字"
          />
          <input
            type="tel"
            className="phone"
            placeholder="您的電話號碼"
            defaultValue={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                phone: e.target.value,
              }));
            }}
            pattern="^0\d{9}"
            required
            title="請完整輸入您的電話號碼"
          />
        </div>
      </div>
    </div>
  );
}
export default UserInputs;
