"use client";

import { useState, useEffect, useCallback } from "react";
import { tools } from "@/data/tools";
import { motion } from "framer-motion";
import { Trophy, RotateCcw, Target, Zap, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  description: string;
  correctAnswer: string;
  options: string[];
  toolName: string;
}

function generateQuestions(): Question[] {
    const allCommands: { toolName: string; title: string; cmd: string }[] = [];
    tools.forEach((tool) => {
      tool.commands.forEach((cmd) => {
        if (cmd.cmd !== "N/A - Interface gráfica") {
          allCommands.push({ toolName: tool.name, title: cmd.title, cmd: cmd.cmd });
        }
      });
    });

    const shuffled = [...allCommands].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    return selected.map((cmd, idx) => {
      const options = [cmd.cmd];
      while (options.length < 4) {
        const randomCmd = allCommands[Math.floor(Math.random() * allCommands.length)].cmd;
        if (!options.includes(randomCmd)) {
          options.push(randomCmd);
        }
      }
      return {
        id: idx,
        description: `${cmd.toolName}: ${cmd.title}`,
        correctAnswer: cmd.cmd,
        options: options.sort(() => 0.5 - Math.random()),
        toolName: cmd.toolName,
      };
    });
  }

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [questions, setQuestions] = useState<Question[]>(() => generateQuestions());

  const resetQuiz = () => {
    const newQuestions = generateQuestions();
    setQuestions(newQuestions);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setSelectedOption(null);
    setTimeLeft(20);
  };

  const handleOptionClick = useCallback((option: string) => {
    if (selectedOption) return;

    setSelectedOption(option);
    const correct = option === questions[currentQuestionIndex].correctAnswer;
    if (correct) setScore(score + 1);

    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setTimeLeft(20);
        } else {
          setShowResult(true);
        }
    }, 1500);
  }, [questions, currentQuestionIndex, score, selectedOption]);

  useEffect(() => {
    if (showResult || selectedOption) return;

    if (timeLeft === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedOption("");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult, selectedOption]);

  useEffect(() => {
    if (selectedOption === "" && !showResult) {
      const timeout = setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
          setTimeLeft(20);
        } else {
          setShowResult(true);
        }
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [selectedOption, showResult, currentQuestionIndex, questions.length]);

  if (questions.length === 0) return null;

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-[40px] p-12 shadow-2xl border border-gray-100 dark:border-gray-700"
        >
            <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-yellow-600 dark:text-yellow-400" size={48} />
            </div>
            <h2 className="text-4xl font-black mb-2">Mandou bem!</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Você acertou {score} de {questions.length} comandos.</p>
            
            <div className="flex flex-col gap-3">
                <button
                    onClick={resetQuiz}
                    className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                    <RotateCcw size={20} /> Jogar Novamente
                </button>
                <Link
                    href="/"
                    className="w-full py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-2xl font-bold transition-all hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                    Voltar para Home
                </Link>
            </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-12">
        <Link href="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-400">
            <ChevronLeft size={24} />
        </Link>
        <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${timeLeft < 5 ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                <Zap size={16} />
                <span className="text-xs font-black uppercase tracking-widest min-w-7.5 text-center">
                    {timeLeft}s
                </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                <Target size={18} className="text-indigo-600" />
                <span className="text-xs font-black text-indigo-700 dark:text-indigo-300 uppercase tracking-widest">
                    {currentQuestionIndex + 1} / {questions.length}
                </span>
            </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-4 shadow-lg shadow-indigo-200 dark:shadow-none">
            {currentQuestion.toolName}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Qual o comando para <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">
            {currentQuestion.description.split(': ')[1]}?
          </span>
        </h1>
      </div>

      <div className="grid gap-4">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedOption === option;
          const isCorrectOption = option === currentQuestion.correctAnswer;
          
          let stateStyles = "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-md";
          if (selectedOption) {
            if (isCorrectOption) {
              stateStyles = "bg-green-500 border-green-500 text-white shadow-lg shadow-green-200 dark:shadow-none";
            } else if (isSelected) {
              stateStyles = "bg-red-500 border-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none";
            } else {
                stateStyles = "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800 opacity-50";
            }
          }

          return (
            <motion.button
              key={idx}
              whileHover={!selectedOption ? { y: -4, scale: 1.01 } : {}}
              whileTap={!selectedOption ? { scale: 0.98 } : {}}
              onClick={() => handleOptionClick(option)}
              disabled={!!selectedOption}
              className={`w-full p-6 text-left rounded-3xl border-2 transition-all font-mono text-sm leading-relaxed ${stateStyles}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedOption && isCorrectOption && <Target size={18} />}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-12">
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    className="h-full bg-indigo-600"
                />
          </div>
      </div>
    </div>
  );
}