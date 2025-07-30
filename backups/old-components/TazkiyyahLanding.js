import React from 'react';
import twoWingsImg from '../assets/thetwowings.png';
import { useNavigate } from 'react-router-dom';

const TazkiyyahLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      <img
        src={twoWingsImg}
        alt="The Two Wings"
        className="max-w-md w-full rounded-lg shadow-lg mb-6"
      />

      <p className="text-center max-w-xl text-lg leading-relaxed mb-8">
        Tazkiyyah, or purification of the heart, is about cleansing the soul from spiritual diseases
        like pride, envy, and hypocrisy — and nurturing it with sincerity, humility, and love for Allah.
        The two wings of balance are fear and hope. Without either, the journey cannot take flight.
      </p>

      <button
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded"
        onClick={() => navigate('/')}
      >
        🔙 Back to Wheel
      </button>
    </div>
  );
};

export default TazkiyyahLanding;
