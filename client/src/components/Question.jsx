import React from 'react';
import Button from './Button';

export default function Question({ 
  question, 
  options, 
  selectedAnswer,
  onAnswerSelect 
}) {
  return (
    <div className="space-y-6">
      {/* Question header card */}
      <div
        className="card-glass"
        style={{
          padding: '1rem 1.25rem',
          borderRadius: '1rem',
          boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex-none h-8 w-8 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              boxShadow: '0 6px 16px rgba(124,58,237,0.35)',
            }}
          />
          <h2 className="text-xl md:text-2xl font-semibold leading-snug">
            {question}
          </h2>
        </div>
      </div>

      {/* Options list */}
      <div className="grid gap-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={index}
              onClick={() => onAnswerSelect(option)}
              className="w-full text-left rounded-[999px] transition-all"
              style={{
                padding: '0.9rem 1.1rem',
                background: 'rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: isSelected
                  ? 'inset 0 0 0 2px rgba(168,85,247,0.6), 0 10px 26px rgba(0,0,0,0.35)'
                  : '0 6px 18px rgba(0,0,0,0.25)',
                transform: isSelected ? 'translateY(-1px)' : 'none',
              }}
            >
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
                <span className="text-base md:text-lg">{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
