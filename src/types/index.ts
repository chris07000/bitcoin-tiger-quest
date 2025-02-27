export interface Quest {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  reward: number
  isCompleted: boolean
}

export interface Chest {
  id: string
  type: 'common' | 'rare' | 'legendary'
  rewards: {
    tokenAmount: number
    specialItems?: string[]
  }
}

export interface Tiger {
  id: string
  name: string
  rarity: string
  isStaked: boolean
  stakingStartTime?: number
} 