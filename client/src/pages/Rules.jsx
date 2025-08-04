import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Rules = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container-page text-center">
        <h1
          className="heading"
          style={{
            textShadow:
              '0 0 24px rgba(255,255,255,0.28), 0 0 60px rgba(112,99,131,0.35)',
          }}
        >
          Quiz Rules
        </h1>

        <div
          className="card-glass mx-auto mt-6"
          style={{
            maxWidth: '48rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1.25rem',
            boxShadow: '0 15px 50px rgba(0,0,0,0.45)',
          }}
        >
          <ul className="text-left space-y-3">
            <li>• The quiz consists of 10 questions.</li>
            <li>• Answer as quickly as you can; faster answers yield better scores.</li>
            <li>• Each question has one correct answer.</li>
            <li>• You cannot change your answer once selected.</li>
          </ul>
        </div>

        <Link to="/quiz">
          <button
            className="btn mt-8 !text-black rounded-full px-6 py-3"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #f43f5e 100%)',
              boxShadow:
                '0 12px 36px rgba(168,85,247,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            START
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
