'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface QuestCardProps {
  questNumber: number
  hint: string
  imageUrl: string
  isLocked: boolean
  onSolve: (answer: string) => void
}

export default function QuestCard({ questNumber, hint, imageUrl, isLocked, onSolve }: QuestCardProps) {
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg"
    >
      <h3 className="text-2xl font-bold mb-4 text-yellow-500">Quest #{questNumber}</h3>
      
      {isLocked ? (
        <div className="text-center py-8">
          <span className="text-gray-500">🔒 Complete previous quest to unlock</span>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Quest ${questNumber} Image`}
              fill
              className="object-cover"
              priority={questNumber === 1}
            />
          </div>

          <button 
            onClick={() => setShowHint(!showHint)}
            className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
          >
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>
          
          {showHint && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 italic"
            >
              🔍 {hint}
            </motion.p>
          )}

          <div className="mt-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer..."
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
            />
            <button
              onClick={() => onSolve(answer)}
              className="w-full mt-2 bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors"
            >
              Submit Answer
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
} 