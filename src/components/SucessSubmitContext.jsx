import { createContext, useState, useContext } from "react";

const SucessAppointmentContext = createContext();

export function SucessAppointmentProvider({ children }) {
  const [onAppointmentSucess, setOnAppointmentSucess] = useState(false);

  return (
    <SucessAppointmentContext.Provider
      value={{ onAppointmentSucess, setOnAppointmentSucess }}
    >
      {children}
    </SucessAppointmentContext.Provider>
  );
}

export function useSucess() {
  return useContext(SucessAppointmentContext);
}
