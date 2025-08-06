import React, { useState } from 'react';
import backgroundImage from '../../assets/BackgroundHomePageYouth4.png';

const SummaryStep = ({ step, onNext, onPrevious, onFinish }) => {
  const { content } = step;
  const [journalEntry, setJournalEntry] = useState('');
  const [completedItems, setCompletedItems] = useState([]);
  
  const handleCheckboxChange = (itemId) => {
    setCompletedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };
  
  const handleFinish = () => {
    onFinish({
      checklist: completedItems,
      journalEntry: journalEntry
    });
  };
  
  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.subtitle}</p>
        </div>
        
        {/* Summary Content */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          {/* Message */}
          {content.message && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">{content.message}</p>
            </div>
          )}
          
          {/* Checklist */}
          {content.checklist && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What have you learned?</h3>
              <div className="space-y-3">
                {content.checklist.map((item) => (
                  <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={completedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className={`text-gray-700 ${
                      completedItems.includes(item.id) ? 'line-through text-gray-500' : ''
                    }`}>
                      {item.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
          {/* Journal Prompt */}
          {content.journalPrompt && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Reflection</h3>
              <p className="text-gray-600 mb-3">{content.journalPrompt}</p>
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Write your thoughts here..."
                className="w-full h-24 p-3 border-2 border-gray-200 rounded-lg resize-none focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={handleFinish}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Complete Flow
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep; 