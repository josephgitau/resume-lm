"use client"
import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, Maximize2, Sparkles } from "lucide-react"

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)

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

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
      } else {
        document.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    const handleVideoEnd = () => {
      setIsPlaying(false)
    }
    
    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', handleVideoEnd)
    }
    
    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [])

  return (
    <section className="relative py-20 lg:py-32 px-4 bg-slate-900" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-200 font-medium text-sm">Live Demo</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Experience TalantaLM
            <span className="block text-violet-400">in Action</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Watch our AI transform ordinary resumes into compelling career stories. 
            See real-time improvements and professional formatting in action.
          </p>
        </div>
        
        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className="relative aspect-video">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/ResumeLM.mp4"
                  poster="/thumbnail.png"
                  onEnded={() => setIsPlaying(false)}
                />
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button 
                      onClick={togglePlay}
                      className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-900 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
                      aria-label="Play video"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </button>
                  </div>
                )}
                
                {/* Video Controls */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Top Controls */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      Live Demo
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Toggle fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      
                      <button className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-white text-sm bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      TalantaLM Demo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">AI-Powered Enhancement</h3>
              <p className="text-sm text-slate-400">Real-time content optimization and professional formatting</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Interactive Experience</h3>
              <p className="text-sm text-slate-400">See every step of the resume transformation process</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Professional Results</h3>
              <p className="text-sm text-slate-400">Industry-standard formatting that impresses recruiters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}