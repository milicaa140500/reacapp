import React from "react";

const Polje = ({
  vrednost,
  postaviVrednost,
}) => {
  return (
    <input
      value={vrednost}
      onChange={(e) =>
        postaviVrednost(e.target.value)
      }
    />
  );
};

export default Polje;