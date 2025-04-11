"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

type CardType = {
  id: number
  emoji: string
  flipped: boolean
  matched: boolean
}

export function MemoryGame() {
  const emojis = ["🚀", "🎮", "💻", "🎨", "🎯", "🔥", "🌟", "🎸"]
  const [cards, setCards] = useState<CardType[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [gameComplete, setGameComplete] = useState<boolean>(false)
  const [gameStarted, setGameStarted] = useState<boolean>(false)

  // Initialize game
  const initializeGame = () => {
    // Create pairs of cards with emojis
    const cardPairs = [...emojis, ...emojis].map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }))

    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5)

    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameComplete(false)
    setGameStarted(true)
  }

  // Handle card click
  const handleCardClick = (id: number) => {
    // Ignore if card is already flipped or matched
    if (cards[id].flipped || cards[id].matched || flippedCards.length >= 2) return

    // Flip the card
    const updatedCards = [...cards]
    updatedCards[id].flipped = true
    setCards(updatedCards)

    // Add to flipped cards
    const updatedFlippedCards = [...flippedCards, id]
    setFlippedCards(updatedFlippedCards)

    // Check for match if two cards are flipped
    if (updatedFlippedCards.length === 2) {
      setMoves(moves + 1)

      const [firstCardId, secondCardId] = updatedFlippedCards
      if (cards[firstCardId].emoji === cards[secondCardId].emoji) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[firstCardId].matched = true
          matchedCards[secondCardId].matched = true
          setCards(matchedCards)
          setFlippedCards([])
          setMatchedPairs(matchedPairs + 1)

          // Check if game is complete
          if (matchedPairs + 1 === emojis.length) {
            setGameComplete(true)
          }
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          const unflippedCards = [...cards]
          unflippedCards[firstCardId].flipped = false
          unflippedCards[secondCardId].flipped = false
          setCards(unflippedCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">
          {gameStarted ? (
            <>
              <span>Moves: {moves}</span>
              <span className="mx-2">|</span>
              <span>
                Matches: {matchedPairs}/{emojis.length}
              </span>
            </>
          ) : (
            <span>Match the pairs!</span>
          )}
        </div>
        <Button size="sm" onClick={initializeGame} variant="outline" className="flex items-center gap-1">
          <Shuffle className="h-4 w-4" />
          {gameStarted ? "Restart" : "Start Game"}
        </Button>
      </div>

      {gameComplete && (
        <div className="mb-4 p-3 bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded-lg text-center animate-pulse">
          🎉 Congratulations! You completed the game in {moves} moves!
        </div>
      )}

      <div className="grid grid-cols-4 gap-2">
        {gameStarted ? (
          cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                aspect-square cursor-pointer transition-all duration-300 transform 
                ${card.flipped || card.matched ? "rotate-y-180" : ""}
                ${card.matched ? "opacity-70" : "hover:scale-105"}
              `}
            >
              <Card
                className={`h-full w-full flex items-center justify-center ${
                  card.flipped || card.matched
                    ? "bg-gradient-to-br from-gradient-purple-start to-gradient-purple-end text-white"
                    : "bg-muted"
                }`}
              >
                <CardContent className="p-0 h-full flex items-center justify-center">
                  {card.flipped || card.matched ? (
                    <span className="text-2xl">{card.emoji}</span>
                  ) : (
                    <span className="text-2xl">?</span>
                  )}
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-span-4 p-8 text-center">
            <p className="text-muted-foreground mb-4">Click "Start Game" to play!</p>
            <div className="flex justify-center gap-2">
              {emojis.slice(0, 4).map((emoji, i) => (
                <span key={i} className="text-2xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
