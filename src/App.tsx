import { useState } from 'react'
import mascotImage from './assets/01_full_03.png'
import correctReactionImage from './assets/01_full_09.png'
import incorrectReactionImage from './assets/01_full_04.png'
import { quizModeList, quizModes, type QuizModeId } from './quizData'

function App() {
  const [mode, setMode] = useState<QuizModeId>('proBaseball')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const currentMode = quizModes[mode]
  const quizData = currentMode.questions
  const currentQuestion = quizData[currentIndex]
  const isAnswered = selectedIndex !== null
  const isCorrect = selectedIndex === currentQuestion.correctIndex
  const isLastQuestion = currentIndex === quizData.length - 1

  const handleModeChange = (nextMode: QuizModeId) => {
    if (nextMode === mode) return
    setMode(nextMode)
    setCurrentIndex(0)
    setSelectedIndex(null)
  }

  const handleSelect = (index: number) => {
    if (isAnswered) return
    setSelectedIndex(index)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
    setSelectedIndex(null)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedIndex(null)
  }

  const getOptionClassName = (index: number) => {
    const base =
      'w-full rounded-xl border-2 px-5 py-4 text-left text-base font-medium transition'

    if (!isAnswered) {
      return `${base} border-blue-200 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50 active:scale-[0.99]`
    }

    if (index === currentQuestion.correctIndex) {
      return `${base} border-green-500 bg-green-50 text-green-800`
    }

    if (index === selectedIndex) {
      return `${base} border-red-400 bg-red-50 text-red-800`
    }

    return `${base} border-slate-200 bg-slate-50 text-slate-400`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-blue-50">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-10">
        <header className="mb-8">
          <div className="mb-6 mt-16 flex justify-end">
            <div className="relative">
              <div className="absolute bottom-full right-0 z-10 mb-2 w-52 sm:w-60">
                <div className="relative rounded-2xl border-2 border-blue-200 bg-white px-3 py-2.5 text-left text-xs font-medium leading-relaxed text-slate-700 shadow-md sm:text-sm">
                  野球クイズへようこそ！サポートする調子くんだよ！
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b-2 border-r-2 border-blue-200 bg-white"
                  />
                </div>
              </div>
              <img
                src={mascotImage}
                alt="調子くん"
                className="h-28 w-auto object-contain sm:h-32"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-blue-500">
              Baseball Quiz
            </p>
            <h1 className="text-3xl font-bold text-blue-900">野球クイズ</h1>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {quizModeList.map((quizMode) => {
              const isActive = mode === quizMode.id

              return (
                <button
                  key={quizMode.id}
                  type="button"
                  onClick={() => handleModeChange(quizMode.id)}
                  className={`rounded-xl border-2 px-5 py-3 text-sm font-semibold transition sm:text-base ${
                    isActive
                      ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'border-blue-200 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {quizMode.label}
                </button>
              )
            })}
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg shadow-blue-100/60">
            <div className="mb-6 flex items-center justify-between text-sm font-medium text-blue-600">
              <span>
                問題 {currentIndex + 1} / {quizData.length}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1">{currentMode.badge}</span>
            </div>

            <h2 className="mb-8 text-xl font-bold leading-relaxed text-slate-800">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelect(index)}
                  disabled={isAnswered}
                  className={getOptionClassName(index)}
                >
                  <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {isAnswered && (
              <div className="mt-8 space-y-4">
                <div
                  className={`relative rounded-xl px-5 py-4 pr-24 sm:pr-28 ${
                    isCorrect
                      ? 'border border-green-200 bg-green-50'
                      : 'border border-red-200 bg-red-50'
                  }`}
                >
                  <img
                    src={isCorrect ? correctReactionImage : incorrectReactionImage}
                    alt={isCorrect ? '調子くん（正解）' : '調子くん（不正解）'}
                    className="absolute right-3 top-3 h-16 w-auto object-contain sm:h-20"
                  />
                  <p
                    className={`mb-2 text-lg font-bold ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}
                  >
                    {isCorrect ? '正解！' : '不正解…'}
                  </p>
                  <p className="leading-relaxed text-slate-700">
                    {currentQuestion.explanation}
                  </p>
                </div>

                {!isLastQuestion ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
                  >
                    次の問題へ
                  </button>
                ) : (
                  <div className="space-y-3 text-center">
                    <p className="font-semibold text-blue-800">クイズ終了！お疲れさまでした。</p>
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="w-full rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
                    >
                      最初からやり直す
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
