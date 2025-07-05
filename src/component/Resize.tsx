import {useEffect} from "react";

export const Resize = () => {
  const handleResize = () => {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    document.documentElement.style.setProperty("--100vh", `${window.innerHeight}px`)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return <div></div>
}