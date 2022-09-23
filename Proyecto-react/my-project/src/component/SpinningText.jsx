import React from "react";

function SpinningText({ text, children }) {
    const length = text.length;
    const deg = 360/length;

  return (
    <div className="grid relative w-[-400px] h-[400px] rounded-full place-items-center text-sm font-bold mt-6">
        <div className="absolute w-full h-full m-0 focus-within:shadow-lg " id="spinning-text">
          <p>
            {text.split("").map((letra, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
            }}
              className="absolute top-0 left-1/2 origin-[0px_200px] text-lg"
          >
              {letra}
            </span>
            ))}
          </p>
        </div>
        {children}
    </div>
  );
}

export default SpinningText;