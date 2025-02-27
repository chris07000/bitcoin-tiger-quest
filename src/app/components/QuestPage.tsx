'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function QuestPage() {
  const [currentQuest] = useState(1)
  const [showMascot, setShowMascot] = useState(false)
  const [mascotMessage, setMascotMessage] = useState('')

  const messages = [
    "Are you bullish enough? 🚀",
    "Bitcoin Tiger Collective - First true ecosystem on Ordinals!",
    "How's that quest going, anon? 😎",
    "Utility on Ordinals? We're building it! ⚡",
    "Lightning Network is the way! ⚡",
    "Keep pushing, the key is near! 🔑",
    "True Tigers never give up! 🐯"
  ]

  useEffect(() => {
    // Toon mascotte periodiek
    const interval = setInterval(() => {
      if (!showMascot) {
        setMascotMessage(messages[Math.floor(Math.random() * messages.length)])
        setShowMascot(true)
        // Verberg mascotte na 5 seconden
        setTimeout(() => setShowMascot(false), 5000)
      }
    }, 15000) // Verschijn elke 15 seconden

    return () => clearInterval(interval)
  }, [showMascot])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Floating Mascot - aangepaste positionering en grootte voor mobiel */}
      <AnimatePresence>
        {showMascot && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-4 left-4 flex items-end gap-2 sm:bottom-8 sm:left-8 sm:gap-4 z-50"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-16 h-16 sm:w-24 sm:h-24"
            >
              <Image
                src="/tiger-pixel.png"
                alt="Bitcoin Tiger"
                width={96}
                height={96}
                className="glow-subtle"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-black/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-2 sm:mb-4 max-w-[200px] sm:max-w-xs"
            >
              <div className="font-mono text-xs sm:text-sm text-yellow-500/90">
                {mascotMessage}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Quest Title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse"></div>
          <h1 className="text-yellow-500/90 font-mono text-lg sm:text-xl">QUEST {currentQuest + 1}</h1>
        </div>

        {/* Grid Puzzle - aangepaste spacing voor mobiel */}
        <div className="bg-black/30 rounded-lg p-4 sm:p-8 backdrop-blur-sm">
          <div className="font-mono text-yellow-500/90 mb-4 sm:mb-6">Grid:</div>
          <div className="grid grid-cols-10 gap-2 sm:gap-4 text-center font-mono text-base sm:text-lg">
            <div>.</div><div>.</div><div>T</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div>
            <div>T</div><div>H</div><div>E</div><div>.</div><div>.</div><div>M</div><div>X</div><div>.</div><div>.</div><div>.</div>
            <div>.</div><div>.</div><div>R</div><div>.</div><div>.</div><div>O</div><div>.</div><div>K</div><div>.</div><div>.</div>
            <div>.</div><div>.</div><div>U</div><div>.</div><div>.</div><div>V</div><div>.</div><div>Q</div><div>.</div><div>.</div>
            <div>.</div><div>.</div><div>E</div><div>T</div><div>I</div><div>L</div><div>I</div><div>T</div><div>Y</div><div>.</div>
            <div>.</div><div>.</div><div>.</div><div>I</div><div>S</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div>
          </div>
        </div>

        {/* Twitter Instructions - aangepaste padding voor mobiel */}
        <div className="bg-black/30 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
            <span className="text-blue-400 font-mono text-sm sm:text-base">HOW TO SUBMIT</span>
          </div>
          <div className="font-mono text-xs sm:text-sm space-y-2 text-blue-400/80">
            <p>1. Check <a href="https://x.com/OrdinalTigerBTC" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">@OrdinalTigerBTC</a> Twitter feed for clues</p>
            <p>2. Solve the grid puzzle using the clues</p>
            <p>3. Tweet your answer and tag <a href="https://x.com/OrdinalTigerBTC" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">@OrdinalTigerBTC</a></p>
            <p>4. First correct answer wins the key!</p>
          </div>
          <div className="mt-3 sm:mt-4 text-xs font-mono text-blue-400/60">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
              <span>TIP: Our Twitter feed contains essential hints to solve this puzzle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 