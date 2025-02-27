'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import QuestPage from './components/QuestPage'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuest, setCurrentQuest] = useState(0)
  const [answer, setAnswer] = useState('')
  const [loadingText, setLoadingText] = useState('Initializing')
  const [blockHeight, setBlockHeight] = useState(0)
  const [hashRate, setHashRate] = useState('0.00')

  useEffect(() => {
    // Simuleer blockchain statistieken
    const interval = setInterval(() => {
      setBlockHeight(prev => prev + Math.floor(Math.random() * 3))
      setHashRate(prev => (parseFloat(prev) + Math.random()).toFixed(2))
    }, 1000)

    const texts = [
      'Decoding Bitcoin signatures_',
      'Scanning Tiger inscriptions_',
      'Connecting to network_'
    ]
    
    let i = 0
    const textInterval = setInterval(() => {
      setLoadingText(texts[i])
      i = (i + 1) % texts.length
    }, 2000)

    setTimeout(() => {
      setIsLoading(false)
      clearInterval(interval)
      clearInterval(textInterval)
    }, 6000)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0b1c] relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="fixed inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-yellow-500/30 font-mono text-xs animate-matrix"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {'01'.split('').map((char, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col items-center justify-center relative z-10"
          >
            <div className="text-center space-y-8">
              <motion.div
                className="relative w-32 h-32 mx-auto"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                  src="/btc-logo.png"
                  width={128}
                  height={128}
                  alt="Bitcoin Tiger Quest"
                  className="glow-subtle"
                  priority
                />
              </motion.div>

              <h1 className="text-yellow-500/90 font-mono text-lg tracking-wider">
                BITCOIN TIGER QUEST
              </h1>
              
              {/* Network Stats */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-black/30 rounded p-2">
                  <div className="text-yellow-500/60">BLOCK HEIGHT</div>
                  <div className="text-yellow-500">{blockHeight.toLocaleString()}</div>
                </div>
                <div className="bg-black/30 rounded p-2">
                  <div className="text-yellow-500/60">HASH RATE</div>
                  <div className="text-yellow-500">{hashRate} TH/s</div>
                </div>
              </div>

              {/* Loading text in terminal style */}
              <div className="bg-black/20 rounded-lg p-4 max-w-md mx-auto backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-sm text-left">
                  <span className="text-yellow-500/80">root@btc-tiger:~$</span>
                  <span className="text-white/90"> {loadingText}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-48 h-1 bg-yellow-500/20 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-yellow-500"
                  animate={{
                    width: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 6,
                    ease: 'linear',
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <QuestPage />
        )}
      </AnimatePresence>
    </div>
  )
} 