import { useEffect, useRef } from "react"
import "./styles.css"

export const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const requestRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const followerPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY }
    }

    const animateFollower = () => {
      const delay = 0.1
      followerPosition.current.x += (mousePosition.current.x - followerPosition.current.x) * delay
      followerPosition.current.y += (mousePosition.current.y - followerPosition.current.y) * delay

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePosition.current.x - 4}px, ${mousePosition.current.y - 4}px)`
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPosition.current.x - 16}px, ${followerPosition.current.y - 16}px)`
      }

      requestRef.current = requestAnimationFrame(animateFollower)
    }

    window.addEventListener('mousemove', mouseMoveHandler)
    requestRef.current = requestAnimationFrame(animateFollower)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 9999 }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-blue rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 9998 }}
      />
    </>
  )
}
