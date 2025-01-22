import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { getRestaurants, addVote } from '../api/restaurants'

interface Restaurant {
  id: number
  name: string
  position_x: number
  position_y: number
  likes: string  // Numbers come as strings from Postgres
  dislikes: string
}

export default function FoodChart() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [voting, setVoting] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchRestaurants()
  }, [])

  const fetchRestaurants = async () => {
    try {
      console.log('Fetching restaurants...')
      const data = await getRestaurants()
      console.log('Received data:', data)
      setRestaurants(data as Restaurant[])
    } catch (err: any) {
      const message = err.message || 'Failed to load restaurants'
      console.error('Error fetching restaurants:', message)
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const handleVote = async (id: number, isLike: boolean) => {
    const cookieKey = `voted_${id}`
    const existingVote = Cookies.get(cookieKey)
    
    // If already voted with same choice, remove the vote
    if (existingVote === JSON.stringify(isLike)) {
      setVoting(String(id))
      try {
        await addVote(id, null) // Cancel vote
        Cookies.remove(cookieKey)
        await fetchRestaurants()
      } catch (err: any) {
        const message = err.message || 'Failed to cancel vote'
        console.error('Error canceling vote:', message)
        setError(message)
      } finally {
        setVoting(null)
      }
      return
    }

    // If switching vote, first cancel the old vote
    setVoting(String(id))
    try {
      if (existingVote !== null) {
        await addVote(id, null) // Cancel previous vote
      }
      await addVote(id, isLike) // Add new vote
      Cookies.set(cookieKey, JSON.stringify(isLike), { expires: 365 })
      await fetchRestaurants()
    } catch (err: any) {
      const message = err.message || 'Failed to vote'
      console.error('Error voting:', message)
      setError(message)
    } finally {
      setVoting(null)
    }
  }

  if (loading) {
    return (
      <div className="h-screen bg-neutral-950 p-6 flex items-center justify-center">
        <div className="font-mono text-neutral-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-neutral-950 p-6">
      <div className="h-full max-w-4xl mx-auto">
        <div className="h-full rounded-3xl bg-neutral-900/30 backdrop-blur-sm p-6 border border-white/[0.08] flex flex-col">
          <div className="mb-8">
            <h1 className="font-mono text-2xl font-bold text-neutral-100 tracking-tighter">
              Aaltoes Events food chart
            </h1>
            <p className="font-mono text-sm text-neutral-400">
              last updated 22.01.25
            </p>
            {error && (
              <p className="font-mono text-sm text-red-400 mt-2">
                {error}
              </p>
            )}
          </div>

          <div className="relative w-full h-[calc(100%-6rem)] bg-neutral-900/50 rounded-xl border border-white/[0.08] p-6">
            {/* Axis labels */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-sm text-neutral-400">michelin 3 star</div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-sm text-neutral-400">its alright...</div>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-sm text-neutral-400">€€€</div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 rotate-90 font-mono text-sm text-neutral-400">€</div>
              
              {/* Axis lines */}
              <div className="absolute w-[1px] h-full bg-neutral-700/30"></div>
              <div className="absolute w-full h-[1px] bg-neutral-700/30"></div>

              {/* Restaurant items */}
              {restaurants.map((restaurant) => {
                const existingVote = Cookies.get(`voted_${restaurant.id}`)
                const hasVotedLike = existingVote === 'true'
                const hasVotedDislike = existingVote === 'false'
                const isVoting = voting === String(restaurant.id)

                return (
                  <motion.div 
                    key={restaurant.id}
                    className="absolute bg-white/[0.03] p-2 rounded-lg border border-white/[0.08]"
                    style={{
                      left: `${restaurant.position_x}%`,
                      top: `${restaurant.position_y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="font-mono text-sm text-neutral-300 text-center mb-2">
                      {restaurant.name}
                    </div>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => handleVote(restaurant.id, true)}
                        disabled={isVoting}
                        className={`flex-1 px-2 py-1 rounded font-mono text-xs ${
                          isVoting
                            ? 'bg-neutral-800/30 text-neutral-500'
                            : hasVotedLike
                              ? 'bg-green-900/30 hover:bg-neutral-800/70 text-green-300'
                              : 'bg-neutral-800/50 hover:bg-neutral-800/70 text-neutral-300'
                        }`}
                      >
                        👍 {restaurant.likes}
                      </button>
                      <button 
                        onClick={() => handleVote(restaurant.id, false)}
                        disabled={isVoting}
                        className={`flex-1 px-2 py-1 rounded font-mono text-xs ${
                          isVoting
                            ? 'bg-neutral-800/30 text-neutral-500'
                            : hasVotedDislike
                              ? 'bg-red-900/30 hover:bg-neutral-800/70 text-red-300'
                              : 'bg-neutral-800/50 hover:bg-neutral-800/70 text-neutral-300'
                        }`}
                      >
                        👎 {restaurant.dislikes}
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 