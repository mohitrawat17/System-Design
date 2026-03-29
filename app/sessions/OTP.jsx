import React, { useEffect, useRef, useState } from "react";

const OtpComp = ({ limit }) => {
  const [values, setValues] = useState(Array.from({ length: limit }).fill(""));
  const ref = useRef([]);

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  const handleChange = (val, index) => {
    if (val <= 9 && val >= 0) {
      const updatedValues = [...values];
      updatedValues[index] = val;
      setValues(updatedValues);
    }

    if (index < limit - 1 && val) {
      ref.current[index + 1].focus();
    }
  };

  const handleBack = (e, index) => {
    if (!e.target.value && e.key === "Backspace" && index > 0) {
      ref.current[index - 1].focus();
    }
  };

  return (
    <div>
      {values.map((value, index) => (
        <input
          ref={(input) => {
            ref.current[index] = input;
          }}
          key={index}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleBack(e, index)}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
};

const OTP = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <OtpComp limit={4} />
    </div>
  );
};

export default OTP;
