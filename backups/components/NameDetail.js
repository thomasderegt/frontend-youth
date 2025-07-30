import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const namesOfAllah = [
  { id: 'ar-rahman', name: 'Ar-Rahman', title: 'The Most Merciful', description: '' },
  { id: 'ar-rahim', name: 'Ar-Rahim', title: 'The Most Compassionate', description: '' },
  { id: 'al-hayy', name: 'Al-Hayy', title: 'The Ever-Living', description: '' },
  { id: 'al-qayyum', name: 'Al-Qayyum', title: 'The Self-Subsisting', description: '' },
  { id: 'rabb-al-alamin', name: 'Rabb al-Alamin', title: 'Lord of all the Worlds', description: '' },
  { id: 'al-alim', name: 'Al-Alim', title: 'The All-Knowing', description: '' },
  { id: 'al-ahad', name: 'Al-Ahad', title: 'The One and Only', description: '' },
  { id: 'as-samad', name: 'As-Samad', title: 'The Self-Sufficient Master', description: '' }
];

const NameDetail = () => {
  const { nameId } = useParams();
  const navigate = useNavigate();
  const name = namesOfAllah.find(n => n.id === nameId);

  if (!name) return <div>Name not found</div>;

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen text-white">
      <div
        className="bg-black text-teal-400 border-4 rounded-full flex flex-col items-center justify-center"
        style={{
          color: '#00f2fa',
          borderColor: '#00f2fa',
          width: '350px',
          height: '350px',
          padding: '20px',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        <div style={{ marginBottom: '8px' }}>{name.name}</div>
        <div className="text-lg">{name.title}</div>
      </div>
      <p className="text-lg text-teal-200 mb-6 text-center">{name.description}</p>
      <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
        <button
          onClick={() => alert('Coming soon!')}
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
          More
        </button>
        
        <button
          onClick={() => alert('Coming soon!')}
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
          onClick={() => navigate('/names')}
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
          Back to Names
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <ProgressBar 
          currentStep={4} 
          totalSteps={4} 
          steps={['Topic', 'Introduction', 'Overview', 'Detail']} 
        />
      </div>
    </div>
  );
};

export default NameDetail;
