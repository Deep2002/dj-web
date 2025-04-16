import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringButton, setHoveringButton] = useState(false);


  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      const isHovering =
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.getAttribute("data-cursor-hover") === "true";

      setHoveringButton(!!isHovering);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mouseout", checkHover);

    // Hide the default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("mouseout", checkHover);
      document.body.style.cursor = "auto"; // reset
    };
  }, []);

  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {hoveringButton ? (
        <Icon icon="noto:hundred-points" width={32} height={32} />
      ) : (
        <Icon icon="iconamoon:cursor-duotone" color="#16f49b" width={40} height={40} />
      )}
    </div>
  );
}
