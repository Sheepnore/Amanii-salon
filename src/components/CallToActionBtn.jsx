import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: #ffff;
  font-size: 1rem;
  border: none;
  border-radius: var(--button-border-radius);
  padding: 1.2rem;
  margin: 1rem 0rem;
  cursor: pointer;
  transition: 300ms ease-out;
  box-shadow: 0 0 5px 5px rgba(128, 128, 128, 0.1);
  &:hover {
    opacity: 0.9;
    transition: 300ms ease;
    transform: scale(1.01);
  }
`;

function CallToActionBtn() {
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => navigate("/appointment")}>
      立即預約
    </StyledButton>
  );
}

export default CallToActionBtn;
