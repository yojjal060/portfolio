"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, HelpCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// List of 5-letter words for the game
const WORDS = [
  "react",
  "state",
  "props",
  "hooks",
  "redux",
  "build",
  "style",
  "debug",
  "array",
  "class",
  "event",
  "fetch",
  "async",
  "await",
  "route",
  "stack",
  "queue",
  "graph",
  "logic",
  "scope",
  "media",
  "input",
  "focus",
  "hover",
  "click",
  "touch",
  "swipe",
  "modal",
  "toast",
  "alert",
  "theme",
  "color",
  "space",
  "width",
  "model",
  "cache",
  "store",
  "proxy",
  "query",
  "param",
]

// Maximum number of attempts
const MAX_ATTEMPTS = 6

// Game status
type GameStatus = "playing" | "won" | "lost"

export function WordGame() {
  // Get a random word from the list
  const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

  const [targetWord, setTargetWord] = useState<string>(getRandomWord())
  const [attempts, setAttempts] = useState<string[]>([])
  const [currentAttempt, setCurrentAttempt] = useState<string>("")
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
  const [showHint, setShowHint] = useState<boolean>(false)
  const [keyboardStatus, setKeyboardStatus] = useState<Record<string, string>>({})
  const [shake, setShake] = useState<boolean>(false)
  const [stats, setStats] = useState({
    played: 0,
    wins: 0,
    currentStreak: 0,
    maxStreak: 0,
    distribution: [0, 0, 0, 0, 0, 0],
  })

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem("wordGameStats")
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }
  }, [])

  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem("wordGameStats", JSON.stringify(stats))
  }, [stats])

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== "playing") return

      if (e.key === "Enter") {
        submitGuess()
      } else if (e.key === "Backspace") {
        setCurrentAttempt((prev) => prev.slice(0, -1))
      } else if (/^[a-z]$/i.test(e.key) && currentAttempt.length < 5) {
        setCurrentAttempt((prev) => prev + e.key.toLowerCase())
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentAttempt, gameStatus])

  // Update keyboard status based on guesses
  useEffect(() => {
    const newKeyboardStatus: Record<string, string> = {}

    attempts.forEach((attempt) => {
      for (let i = 0; i < attempt.length; i++) {
        const letter = attempt[i]

        if (targetWord[i] === letter) {
          // Correct position
          newKeyboardStatus[letter] = "correct"
        } else if (targetWord.includes(letter) && newKeyboardStatus[letter] !== "correct") {
          // Correct letter, wrong position
          newKeyboardStatus[letter] = "present"
        } else if (!targetWord.includes(letter) && !newKeyboardStatus[letter]) {
          // Wrong letter
          newKeyboardStatus[letter] = "absent"
        }
      }
    })

    setKeyboardStatus(newKeyboardStatus)
  }, [attempts, targetWord])

  // Submit the current guess
  const submitGuess = () => {
    if (currentAttempt.length !== 5) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }

    // Add the current attempt to the list of attempts
    const newAttempts = [...attempts, currentAttempt]
    setAttempts(newAttempts)
    setCurrentAttempt("")

    // Check if the player won
    if (currentAttempt === targetWord) {
      setGameStatus("won")
      const attemptNumber = newAttempts.length - 1

      // Update stats
      const newDistribution = [...stats.distribution]
      newDistribution[attemptNumber] += 1

      setStats({
        played: stats.played + 1,
        wins: stats.wins + 1,
        currentStreak: stats.currentStreak + 1,
        maxStreak: Math.max(stats.maxStreak, stats.currentStreak + 1),
        distribution: newDistribution,
      })

      return
    }

    // Check if the player lost
    if (newAttempts.length >= MAX_ATTEMPTS) {
      setGameStatus("lost")

      // Update stats
      setStats({
        played: stats.played + 1,
        wins: stats.wins,
        currentStreak: 0,
        maxStreak: stats.maxStreak,
        distribution: stats.distribution,
      })

      return
    }
  }

  // Start a new game
  const newGame = () => {
    setTargetWord(getRandomWord())
    setAttempts([])
    setCurrentAttempt("")
    setGameStatus("playing")
    setShowHint(false)
  }

  // Get the color for a letter in a guess
  const getLetterColor = (letter: string, index: number, word: string) => {
    if (targetWord[index] === letter) {
      return "bg-green-500 text-white border-green-500"
    } else if (targetWord.includes(letter)) {
      return "bg-yellow-500 text-white border-yellow-500"
    } else {
      return "bg-gray-500 text-white border-gray-500"
    }
  }

  // Render the keyboard
  const renderKeyboard = () => {
    const rows = [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ]

    return (
      <div className="mt-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-2">
            {row.map((key) => {
              let className = "mx-0.5 text-xs font-medium rounded min-w-[2rem] h-10 flex items-center justify-center"

              if (key === "enter") {
                className += " px-2 text-xs"
              } else if (key === "backspace") {
                className += " px-2 text-xs"
              } else {
                className += " w-8"
              }

              if (keyboardStatus[key] === "correct") {
                className += " bg-green-500 text-white"
              } else if (keyboardStatus[key] === "present") {
                className += " bg-yellow-500 text-white"
              } else if (keyboardStatus[key] === "absent") {
                className += " bg-gray-500 text-white"
              } else {
                className += " bg-gray-200 dark:bg-gray-700"
              }

              return (
                <button
                  key={key}
                  className={className}
                  onClick={() => {
                    if (gameStatus !== "playing") return

                    if (key === "enter") {
                      submitGuess()
                    } else if (key === "backspace") {
                      setCurrentAttempt((prev) => prev.slice(0, -1))
                    } else if (currentAttempt.length < 5) {
                      setCurrentAttempt((prev) => prev + key)
                    }
                  }}
                >
                  {key === "backspace" ? "⌫" : key.toUpperCase()}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Word Guess</CardTitle>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How to Play</DialogTitle>
                <DialogDescription>Guess the 5-letter word in 6 tries.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p>Each guess must be a valid 5-letter word.</p>
                <p>
                  After each guess, the color of the tiles will change to show how close your guess was to the word.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded">A</div>
                  <span>The letter is in the word and in the correct spot.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded">B</div>
                  <span>The letter is in the word but in the wrong spot.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-500 text-white rounded">C</div>
                  <span>The letter is not in the word.</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                Stats
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Statistics</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold">{stats.played}</div>
                    <div className="text-xs text-muted-foreground">Played</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0}%
                    </div>
                    <div className="text-xs text-muted-foreground">Win %</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.currentStreak}</div>
                    <div className="text-xs text-muted-foreground">Current Streak</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.maxStreak}</div>
                    <div className="text-xs text-muted-foreground">Max Streak</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Guess Distribution</h4>
                  <div className="space-y-1">
                    {stats.distribution.map((count, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 text-xs">{index + 1}</div>
                        <div
                          className="h-5 bg-theme-primary text-white text-xs flex items-center px-1 rounded-sm"
                          style={{
                            width: `${count > 0 ? Math.max((count / Math.max(...stats.distribution)) * 100, 8) : 0}%`,
                            minWidth: count > 0 ? "20px" : "0",
                          }}
                        >
                          {count > 0 ? count : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent>
        {/* Game board */}
        <div className="grid grid-rows-6 gap-1 mb-4">
          {/* Render previous attempts */}
          {attempts.map((attempt, attemptIndex) => (
            <div key={attemptIndex} className="grid grid-cols-5 gap-1">
              {attempt.split("").map((letter, letterIndex) => (
                <div
                  key={letterIndex}
                  className={`w-full aspect-square flex items-center justify-center text-xl font-bold uppercase border-2 ${getLetterColor(
                    letter,
                    letterIndex,
                    attempt,
                  )}`}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}

          {/* Render current attempt */}
          {gameStatus === "playing" && attempts.length < MAX_ATTEMPTS && (
            <div className={`grid grid-cols-5 gap-1 ${shake ? "animate-shake" : ""}`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-full aspect-square flex items-center justify-center text-xl font-bold uppercase border-2 ${
                    index < currentAttempt.length ? "border-theme-primary" : "border-gray-300 dark:border-gray-700"
                  }`}
                >
                  {index < currentAttempt.length ? currentAttempt[index] : ""}
                </div>
              ))}
            </div>
          )}

          {/* Fill in empty rows */}
          {gameStatus === "playing" &&
            Array.from({ length: MAX_ATTEMPTS - attempts.length - 1 }).map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-1">
                {Array.from({ length: 5 }).map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className="w-full aspect-square flex items-center justify-center text-xl font-bold uppercase border-2 border-gray-300 dark:border-gray-700"
                  ></div>
                ))}
              </div>
            ))}
        </div>

        {/* Game status message */}
        {gameStatus !== "playing" && (
          <div
            className={`text-center py-2 rounded-md font-medium mb-4 ${
              gameStatus === "won" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            }`}
          >
            {gameStatus === "won"
              ? `You won in ${attempts.length} ${attempts.length === 1 ? "try" : "tries"}!`
              : `You lost! The word was "${targetWord}".`}
          </div>
        )}

        {/* Keyboard */}
        {renderKeyboard()}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setShowHint(!showHint)} disabled={gameStatus !== "playing"}>
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>

        {showHint && gameStatus === "playing" && (
          <div className="text-sm text-muted-foreground">
            First letter: <span className="font-bold">{targetWord[0].toUpperCase()}</span>
          </div>
        )}

        <Button onClick={newGame} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          New Game
        </Button>
      </CardFooter>
    </Card>
  )
}

// Add this to your tailwind.config.ts keyframes
// "shake": {
//   "0%, 100%": { transform: "translateX(0)" },
//   "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
//   "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
// },
