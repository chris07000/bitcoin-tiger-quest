'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface StoryPageProps {
  onComplete: () => void
}

export default function StoryPage({ onComplete }: StoryPageProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showPortal, setShowPortal] = useState(false)
  const [hideText, setHideText] = useState(false)
  const [storyStarted, setStoryStarted] = useState(false)
  const [showFlash, setShowFlash] = useState(false)

  const storyLines = [
    "> INITIALIZING BITCOIN TIGER PROTOCOL_",
    "",
    "In the realm of Bitcoin Ordinals, where digital art",
    "found its home on the oldest blockchain, something",
    "extraordinary was stirring in the depths of the network...",
    "",
    "For too long, the space had yearned for true utility,",
    "a bridge between art and real value. The ancient scrolls",
    "spoke of a legendary force that would emerge...",
    "",
    "The Bitcoin Tigers, masters of the Lightning Network,",
    "guardians of innovation, have awakened from their slumber.",
    "",
    "These mystical creatures discovered an ancient power:",
    "the ability to forge smart contracts within Lightning itself,",
    "creating magical chests filled with Satoshi treasures.",
    "",
    "Through the sacred art of staking, Tigers grow stronger,",
    "evolving through tiers, unlocking greater powers.",
    "Each week, faithful Tigers claim their reward chests,",
    "containing anywhere from 25,000 to 500,000 sats.",
    "",
    "But the Tigers' vision extends beyond mere treasures...",
    "They're building a grand marketplace, where Tigers trade",
    "freely, their transactions protected by Lightning's speed.",
    "",
    "As the community grows stronger, new Tigers join daily,",
    "each contributing to the first true ecosystem on Bitcoin.",
    "A new era of utility is dawning...",
    "",
    "Will you join the Tiger Collective?",
    "Your quest awaits, brave one..."
  ]

  useEffect(() => {
    setStoryStarted(true)
    
    const typingInterval = setInterval(() => {
      if (currentLine < storyLines.length) {
        if (currentChar < storyLines[currentLine].length) {
          setCurrentChar(prev => prev + 1)
        } else {
          if (currentLine === storyLines.length - 1) {
            setTimeout(() => setHideText(true), 1000)
            setTimeout(() => setShowPortal(true), 2000)
            setTimeout(() => setShowFlash(true), 14000)
            setTimeout(() => {
              onComplete()
            }, 14500)
            clearInterval(typingInterval)
          }
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
        }
      }
    }, 65)

    return () => clearInterval(typingInterval)
  }, [currentLine, currentChar, onComplete, storyLines])

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 relative">
      <motion.div
        animate={{ opacity: hideText ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl relative z-40"
      >
        <div className="bg-black/20 rounded-lg p-3 sm:p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-500/50"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500/50"></div>
          </div>

          <div className="font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2">
            {storyLines.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className="text-yellow-500/90">
                {index === currentLine
                  ? line.slice(0, currentChar)
                  : line}
                {index === currentLine && <span className="animate-pulse">_</span>}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showPortal && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: 1
            }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ 
              duration: 3,
              times: [0, 0.7, 1]
            }}
            className="fixed inset-0 flex items-center justify-center z-20"
          >
            <div className="relative w-[280px] sm:w-[400px]">
              <Image
                src="/portal.gif"
                alt="Portal"
                width={400}
                height={400}
                className="rounded-full w-full h-auto"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2],
                  opacity: [0.5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-gradient-radial from-yellow-500/30 via-yellow-500/10 to-transparent rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-50"
          />
        )}
      </AnimatePresence>
    </div>
  )
}