import React, { useState, useEffect } from 'react'

const roles = [
  'Frontend developer',
  'Backend developer',
  'Aspiring UX designer',
  'Python programmer',
  'React developer'
]

const TypingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentIndex]

    let delay
    if (!isDeleting && displayText.length < currentRole.length) {
      delay = 80
    } else if (!isDeleting) {
      delay = 2000
    } else if (isDeleting && displayText.length > 0) {
      delay = 40
    } else {
      delay = 500
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setIsDeleting(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  return (
    <span>
      {displayText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  )
}

export default TypingText
