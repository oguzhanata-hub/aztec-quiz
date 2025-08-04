import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTrophy, FaUsers, FaQuestionCircle, FaClock } from 'react-icons/fa';

const Stat = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="text-pui-20/90"><Icon /></div>
    <div className="text-xl font-semibold">{value}</div>
    <div className="text-sm subtle">{label}</div>
  </div>
);

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container-page text-center">
        {/* Hero */}
        <h1
          className="heading"
          style={{
            textShadow:
              '0 0 24px rgba(255,255,255,0.28), 0 0 60px rgba(112,99,131,0.35)',
          }}
        >
          The Aztec Quiz
        </h1>
        <p className="subtle mt-3 text-lg">
          Challenge your mind. Test your knowledge about the Aztec network.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/start">
            <button
              className="btn !text-black rounded-full px-6 py-3"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #5aa5ff 0%, #7a5cff 100%)',
                boxShadow:
                  '0 10px 30px rgba(122,92,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                <FaArrowRight /> Start Quiz
              </span>
            </button>
          </Link>

          <Link to="/leaderboard">
            <button
              className="btn !text-black rounded-full px-6 py-3"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #a855f7 0%, #f43f5e 100%)',
                boxShadow:
                  '0 10px 30px rgba(244,63,94,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                <FaTrophy /> View Leaderboard
              </span>
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 mx-auto grid grid-cols-3 max-w-md">
          <Stat icon={FaUsers} value="226+" label="Players" />
          <Stat icon={FaQuestionCircle} value="19" label="Questions" />
          <Stat icon={FaClock} value="24/7" label="Available" />
        </div>

        {/* Footer note */}
        <div className="mt-10 text-sm subtle">
          Made with <span className="text-pui-20">♥</span> for the Aztec community
        </div>
      </div>
    </div>
  );
};

export default Homepage;
