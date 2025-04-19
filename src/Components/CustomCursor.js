import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringButton, setHoveringButton] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // State to track if the screen is desktop

  useEffect(() => {
    // Check if the device is desktop or mobile
    const checkIfDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true); // Set isDesktop to true for desktop-sized screens
      } else {
        setIsDesktop(false); // Set isDesktop to false for mobile-sized screens
      }
    };

    // Initial check when the component mounts
    checkIfDesktop();

    // Add event listener to update on window resize
    window.addEventListener("resize", checkIfDesktop);

    // This is for tracking mouse movement
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // This checks whether mouse is hovering over a button or an anchor link
    const checkHover = (e) => {
      const isHovering =
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.getAttribute("data-cursor-hover") === "true";

      setHoveringButton(!!isHovering);
    };

    // Adding event listeners
    if (isDesktop) {
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseover", checkHover);
      window.addEventListener("mouseout", checkHover);
      document.body.style.cursor = "none"; // Hide default cursor
    }

    // Clean up event listeners and reset cursor style
    return () => {
      if (isDesktop) {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseover", checkHover);
        window.removeEventListener("mouseout", checkHover);
        document.body.style.cursor = "auto"; // Reset the cursor
      }
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, [isDesktop]); // Dependency array includes isDesktop to re-run when the screen size changes

  return (
    isDesktop && (
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
    )
  );
}
