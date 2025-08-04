import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useQuizStore from '../store/useQuizStore';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Quiz = () => {
  const navigate = useNavigate();
  const {
    difficulty,
    questions,
    setQuestions,
    currentQuestion,
    nextQuestion,
    incrementCorrectAnswers,
    setTimeTaken,
  } = useQuizStore();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://aztec-quiz-pro.vercel.app/api/questions?difficulty=${difficulty}`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    if (difficulty) {
      fetchQuestions();
    }

    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const secs = Math.floor((now - startTimeRef.current) / 1000);
      setElapsedSeconds(secs);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [difficulty, setQuestions]);

  const handleAnswerClick = (option) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === questions[currentQuestion].correctAnswer) {
      incrementCorrectAnswers();
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        nextQuestion();
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - startTimeRef.current) / 1000);
        setTimeTaken(timeTaken);
        clearInterval(timerRef.current);
        navigate('/score');
      }
    }, 2000);
  };

  if (questions.length === 0) {
    return <div className="container mx-auto max-w-4xl p-4 flex items-center justify-center h-screen">Loading questions...</div>;
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="container mx-auto max-w-4xl p-4 flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">Question {currentQuestion + 1} of {questions.length}</div>
          {/* Elapsed time pill */}
          <div
            className="flex items-center gap-2"
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '999px',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
              fontWeight: 600
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#a855f7', boxShadow: '0 0 10px rgba(168,85,247,0.8)' }} />
            <span>{elapsedSeconds}s</span>
          </div>
        </div>
        <div
          className="card-glass"
          style={{
            padding: '1rem 1.25rem',
            borderRadius: '1.25rem',
            boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
          }}
        >
          <h2 className="text-xl md:text-2xl font-semibold leading-snug text-center mb-6">{currentQ.question}</h2>
          <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
            {JSON.parse(currentQ.options).map((option, index) => {
              const isCorrect = option === currentQ.correctAnswer;
              const isSelected = option === selectedAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isAnswered}
                  className="w-full text-left rounded-[999px] transition-all"
                  style={{
                    padding: '0.9rem 1.1rem',
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: isSelected
                      ? 'inset 0 0 0 2px rgba(168,85,247,0.6), 0 10px 26px rgba(0,0,0,0.35)'
                      : '0 6px 18px rgba(0,0,0,0.25)',
                    transform: isSelected ? 'translateY(-1px)' : 'none',
                    cursor: isAnswered ? 'default' : 'pointer',
                    opacity: isAnswered && !isSelected && !isCorrect ? 0.6 : 1
                  }}
                >
                  <div className="flex items-center gap-3 justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center justify-center flex-none"
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 999,
                          background: isSelected
                            ? 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)'
                            : 'rgba(255,255,255,0.04)',
                          color: isSelected ? '#0b0b12' : '#cecbd5',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: isSelected
                            ? '0 6px 16px rgba(124,58,237,0.35)'
                            : 'none',
                        }}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base md:text-lg" style={{ color: '#ffffff' }}>{option}</span>
                    </div>

                    {isAnswered && (isCorrect || isSelected) && (
                      <span
                        className="flex items-center justify-center"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 999,
                          background: isCorrect ? '#34d399' : '#ef4444',
                          color: '#0b0b12'
                        }}
                      >
                        {isCorrect ? <FaCheck /> : <FaTimes />}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
