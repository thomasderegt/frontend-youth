import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProgressBar from './ProgressBar';

const NamesOfAllah = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const namesOfAllah = [
    { title: 'The Most Merciful', name: 'Ar-Rahman', id: 'ar-rahman' },
    { title: 'The Most Compassionate', name: 'Ar-Rahim', id: 'ar-rahim' },
    { title: 'The Ever-Living', name: 'Al-Hayy', id: 'al-hayy' },
    { title: 'The Self-Subsisting', name: 'Al-Qayyum', id: 'al-qayyum' },
    { title: 'Lord of all the Worlds', name: 'Rabb al-Alamin', id: 'rabb-al-alamin' },
    { title: 'The All-Knowing', name: 'Al-Alim', id: 'al-alim' },
    { title: 'The One and Only', name: 'Al-Ahad', id: 'al-ahad' },
    { title: 'The Self-Sufficient Master', name: 'As-Samad', id: 'as-samad' }
  ];

  return (
    <div className="min-h-screen p-6 text-center text-white">
      {/* Titel van de tabel */}
      <h2 className="text-3xl mb-2 font-bold" style={{ color: '#00f2fa', textShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa' }}>
        The Names of The One True God
      </h2>
      <p className="text-lg mb-6" style={{ color: '#00f2fa' }}>
        Press a name to learn more
      </p>

      {/* Namen Tabel */}
      <div className="grid grid-cols-2 gap-0">
        {namesOfAllah.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/names/${item.id}`)}
            className="p-4 h-40 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-700"
            style={{
              color: '#00f2fa',
              borderColor: '#00f2fa',
              minWidth: '150px',
              minHeight: '150px',
              borderBottom: '1px solid #00f2fa',
              borderRight: index % 2 === 0 ? '1px solid #00f2fa' : 'none'
            }}
          >
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-lg">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
        <button
          onClick={() => alert('Coming soon')}
          className="px-6 py-3 text-base rounded-lg border-2 transition-all duration-200 active:scale-95"
          style={{
            color: '#00f2fa',
            borderColor: '#00f2fa',
            backgroundColor: 'transparent',
            width: '200px',
            boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
            e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
            e.target.style.boxShadow = '0 0 5px #00f2fa, 0 0 10px #00f2fa, inset 0 0 15px rgba(0, 242, 250, 0.5)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
          }}
        >
          Quiz
        </button>
        
        <button
          onClick={() => navigate('/one-true-god')}
          className="px-6 py-3 text-base rounded-lg border-2 transition-all duration-200 active:scale-95"
          style={{
            color: '#FF007F',
            borderColor: '#FF007F',
            backgroundColor: 'transparent',
            width: '200px',
            boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 0, 127, 0.1)';
            e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.boxShadow = '0 0 10px #FF007F, 0 0 20px #FF007F';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
            e.target.style.boxShadow = '0 0 5px #FF007F, 0 0 10px #FF007F, inset 0 0 15px rgba(255, 0, 127, 0.5)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
          }}
        >
          Back to Introduction
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <ProgressBar 
          currentStep={3} 
          totalSteps={4} 
          steps={['Topic', 'Introduction', 'Overview', 'Detail']} 
        />
      </div>
    </div>
  );
};

export default NamesOfAllah;
