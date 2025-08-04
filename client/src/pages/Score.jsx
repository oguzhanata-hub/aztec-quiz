import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useQuizStore from '../store/useQuizStore';
import { FaTwitter, FaTrophy } from 'react-icons/fa';

const Score = () => {
  const {
    username,
    correctAnswers,
    timeTaken,
    difficulty,
    reset,
  } = useQuizStore();

  useEffect(() => {
    const saveScore = async () => {
      try {
        await axios.post('http://localhost:3001/api/scores', {
          username,
          correctAnswers,
          timeTaken,
          difficulty,
        });
      } catch (error) {
        console.error('Error saving score:', error);
      }
    };

    if (username) {
      saveScore();
    }
  }, [username, correctAnswers, timeTaken, difficulty]);

  const percentage = Math.round((correctAnswers / 10 || 0) * 100);
  const safeTime = Number.isFinite(timeTaken) ? timeTaken : 0;
  const timeFormatted = new Date((safeTime) * 1000).toISOString().substr(14, 5);

  // Build X (formerly Twitter) share URL properly encoded
  const siteUrl = 'https://aztec-quiz-pro.vercel.app/';
  const rawText = `I just scored ${correctAnswers ?? 0}/10 (${percentage}%) on the Aztec Quiz!\n\n⏲️ Time taken: ${timeFormatted}\n\nTry it yourself: ${siteUrl}`;
  const params = new URLSearchParams({ text: rawText });
  // Use X's compose endpoint (twitter.com still redirects, but use x.com explicitly as requested)
  const twitterShareUrl = `https://x.com/intent/tweet?${params.toString()}`;

  // Guard render: if store henüz yüklenmediyse veya değerler boşsa
  if (
    correctAnswers === undefined ||
    timeTaken === undefined ||
    correctAnswers === null ||
    timeTaken === null
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center subtle">Loading result…</div>
      </div>
    );
  }

  // Eğer sonuçlar geçersiz ise kullanıcıyı ana sayfaya yönlendir (güvenli fallback)
  if (!Number.isFinite(timeTaken) || !Number.isFinite(correctAnswers)) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="subtle mb-4">Result not available.</div>
          <Link to="/" className="btn !text-black rounded-full px-6 py-3"
            style={{
              backgroundImage: 'linear-gradient(135deg, #5aa5ff 0%, #7a5cff 100%)',
              boxShadow: '0 10px 30px rgba(122,92,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container-page">
        <div
          className="card-glass mx-auto"
          style={{
            maxWidth: '48rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1.25rem',
            boxShadow: '0 15px 50px rgba(0,0,0,0.45)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #706383 0%, #8f869e 100%)',
                boxShadow: '0 10px 24px rgba(112,99,131,0.35)',
                color: '#0b0b12',
                fontWeight: 700,
              }}
            >
              ☆
            </div>
            <div>
              <div className="text-lg font-semibold">@{username || 'you'}</div>
              <div className="subtle -mt-0.5 text-sm">Aztec Quiz Result</div>
            </div>
          </div>

          {/* Big score */}
          <div className="text-center mt-4">
            <div
              className="text-5xl md:text-6xl font-extrabold"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #f43f5e 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {correctAnswers}/10
            </div>
            <div className="mt-1 text-xl subtle">{percentage}% Correct</div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <div
              className="text-center rounded-xl p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(34,197,94,0.12), rgba(34,197,94,0.06))',
                border: '1px solid rgba(34,197,94,0.25)',
              }}
            >
              <div className="text-2xl font-semibold" style={{ color: '#34d399' }}>
                {correctAnswers}
              </div>
              <div className="subtle text-sm mt-1">Correct</div>
            </div>

            <div
              className="text-center rounded-xl p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(59,130,246,0.12), rgba(59,130,246,0.06))',
                border: '1px solid rgba(59,130,246,0.25)',
              }}
            >
              <div className="text-2xl font-semibold" style={{ color: '#60a5fa' }}>
                {timeFormatted}
              </div>
              <div className="subtle text-sm mt-1">Time</div>
            </div>

            <div
              className="text-center rounded-xl p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(245,158,11,0.12), rgba(245,158,11,0.06))',
                border: '1px solid rgba(245,158,11,0.25)',
              }}
            >
              <div className="text-2xl font-semibold" style={{ color: '#f59e0b' }}>
                {percentage}%
              </div>
              <div className="subtle text-sm mt-1">Accuracy</div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !text-black rounded-full px-6 py-3 text-center"
              style={{
                backgroundImage: 'linear-gradient(135deg, #5aa5ff 0%, #7a5cff 100%)',
                boxShadow: '0 10px 30px rgba(122,92,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                <FaTwitter /> Share Result
              </span>
            </a>

            <Link to="/leaderboard" onClick={reset} className="contents">
              <button
                className="btn !text-black rounded-full px-6 py-3"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #f43f5e 100%)',
                  boxShadow: '0 10px 30px rgba(244,63,94,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <FaTrophy /> Leaderboard
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
