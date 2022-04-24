import '../index.css';
import React, { useEffect, useState } from "react";

function Relogio() {
    const [horaAtual, setHoraAtual] = useState();
  
    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setHoraAtual(date.toLocaleTimeString());
      }, 1000);
    }, []);
  
    return <div style={{ fontSize: "40px", margin: "20px" }}>{horaAtual}</div>;
  }
  
  export default Relogio;