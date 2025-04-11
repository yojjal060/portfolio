"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"

type Player = "X" | "O" | null

export function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [winner, setWinner] = useState<Player | "draw" | null>(null)
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })

  // Check for winner
  useEffect(() => {
    const winner = calculateWinner(board)
    if (winner) {
      setWinner(winner)
      if (winner !== "draw") {
        setScores((prev) => ({
          ...prev,
          [winner as "X" | "O"]: prev[winner as "X" | "O"] + 1,
        }))
      } else {
        setScores((prev) => ({
          ...prev,
          draws: prev.draws + 1,
        }))
      }
    }
  }, [board])

  // Handle square click
  const handleClick = (index: number) => {
    // Return if square is filled or there's a winner
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  // Reset scores
  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 })
    resetGame()
  }

  // Render a square
  const renderSquare = (index: number) => {
    return (
      <button
        className={`w-full h-20 text-2xl font-bold flex items-center justify-center border-2 border-muted transition-all duration-200 ${
          board[index] ? (board[index] === "X" ? "text-theme-primary" : "text-theme-accent") : "hover:bg-muted/20"
        } ${winner && board[index] === winner ? "bg-theme-light/30" : ""}`}
        onClick={() => handleClick(index)}
        disabled={!!board[index] || !!winner}
      >
        {board[index]}
      </button>
    )
  }

  // Get status message
  const getStatus = () => {
    if (winner === "draw") {
      return "Game ended in a draw!"
    } else if (winner) {
      return `Player ${winner} wins!`
    } else {
      return `Next player: ${isXNext ? "X" : "O"}`
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Tic Tac Toe</CardTitle>
        <div className="flex justify-between text-sm mt-2">
          <div className="flex gap-4">
            <span className="text-theme-primary font-medium">X: {scores.X}</span>
            <span className="text-theme-accent font-medium">O: {scores.O}</span>
            <span className="text-muted-foreground">Draws: {scores.draws}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={resetScores} className="h-7 px-2">
            Reset Scores
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-1 mb-4">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div
          className={`text-center py-2 rounded-md font-medium ${
            winner === "X"
              ? "bg-theme-primary/10 text-theme-primary"
              : winner === "O"
                ? "bg-theme-accent/10 text-theme-accent"
                : winner === "draw"
                  ? "bg-muted/20 text-muted-foreground"
                  : "text-muted-foreground"
          }`}
        >
          {getStatus()}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={resetGame} className="w-full flex items-center gap-2" variant="outline">
          <RefreshCw className="h-4 w-4" />
          New Game
        </Button>
      </CardFooter>
    </Card>
  )
}

// Helper function to calculate winner
function calculateWinner(squares: Player[]): Player | "draw" | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  // Check for winner
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  // Check for draw
  if (squares.every((square) => square !== null)) {
    return "draw"
  }

  return null
}
