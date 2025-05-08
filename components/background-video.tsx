"use client"

import { useEffect, useRef, useState } from 'react'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Try to play the video as soon as it can
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play()
        }
      } catch (error) {
        console.error("Video autoplay failed:", error)
      }
    }

    // Check if video is loaded
    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        // If already loaded
        setIsVideoLoaded(true)
        playVideo()
      } else {
        // Add event listener for when loaded
        videoRef.current.addEventListener('loadeddata', () => {
          setIsVideoLoaded(true)
          playVideo()
        })
      }
    }

    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true)
        })
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/sakura01.mov" type="video/quicktime" />
        {/* Fallback message for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay to ensure content remains visible */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent z-10" />
      
      {/* Fallback if video hasn't loaded yet - show a static color with slight animation */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-pink-50/20 animate-pulse-slow">
          {/* Fallback content can include a simple sakura-colored gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 to-transparent" />
        </div>
      )}
    </div>
  )
}