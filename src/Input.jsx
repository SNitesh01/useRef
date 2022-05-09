import React, { useEffect, useRef } from "react";

export default function () {
  const title = useRef();

  useEffect(() => {
    title.current.focus();
    title.current.value = "hello use";
  });
  return (
    <div>
      <input ref={title} type="text" />
    </div>
  );
}
