import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App";

function Textinput() {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      Echo: {text}
    </div>
  );
}

export default Textinput;
