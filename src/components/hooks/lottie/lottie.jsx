import React, { useRef, useEffect } from "react";

export function Lottie({ link, wid, hig ,to}) {
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <lottie-player
      ref={ref}
      autoplay
      loop
      mode="normal"
      src={link}
      style={{
        width: wid,
        height: hig,
        top:to,
        position: "absolute", // Corrected syntax
      }}
    ></lottie-player>
  );
}
