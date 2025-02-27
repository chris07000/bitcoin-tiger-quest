export const STAKING_REWARDS_RATE = 0.1 // 10% APY
export const MINIMUM_STAKE_TIME = 7 * 24 * 60 * 60 // 7 days in seconds

export const CHEST_TYPES = {
  COMMON: {
    minReward: 100,
    maxReward: 500,
    dropRate: 0.6
  },
  RARE: {
    minReward: 500,
    maxReward: 2000,
    dropRate: 0.3
  },
  LEGENDARY: {
    minReward: 2000,
    maxReward: 10000,
    dropRate: 0.1
  }
}

export const QUEST_DIFFICULTIES = {
  EASY: {
    timeLimit: 24 * 60 * 60, // 24 hours
    rewardMultiplier: 1
  },
  MEDIUM: {
    timeLimit: 48 * 60 * 60, // 48 hours
    rewardMultiplier: 2
  },
  HARD: {
    timeLimit: 72 * 60 * 60, // 72 hours
    rewardMultiplier: 4
  }
} 