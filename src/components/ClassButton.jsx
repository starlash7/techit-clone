import { useState } from "react";

const ClassButton = ({ name }) => {
  const [isClicked, setIsClicked] = useState();

  return (
    <button
      className={`${
        isClicked
          ? "border-techit-main text-techit-main bg-[#fff7ed]"
          : "border-techit-gray-100"
      } px-3 py-2 text-lg border rounded-md`}
      onClick={() => setIsClicked(!isClicked)}
    >
      {name}
    </button>
  );
};

export default ClassButton;
