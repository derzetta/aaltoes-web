import { useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
}

export default function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/65 group ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Video Overlay - Play State */}
      <div className={`absolute inset-0 bg-zinc-950/50 transition-opacity duration-200 ${isPlaying ? 'opacity-0' : 'group-hover:opacity-0'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-zinc-100/10 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-100/20 transition-colors"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex items-center gap-6">
          {/* Play/Pause */}
          <button 
            onClick={togglePlay}
            className="text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted
                  setVolume(videoRef.current.muted ? 0 : 1)
                }
              }}
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              </svg>
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 accent-zinc-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 