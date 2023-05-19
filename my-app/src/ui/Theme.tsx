"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { BsFillSunFill } from "react-icons/bs";
import IconComponent from "./Icon";

const Theme = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsBoxVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <>
      <BsFillSunFill onClick={handleToggle} />
      {isBoxVisible && (
        <div
          className="absolute top-5 right-5 bg-gray-500 rounded"
          ref={boxRef}
        >
          Sat Saheb
        </div>
      )}
    </>
  );
};

export default Theme;
