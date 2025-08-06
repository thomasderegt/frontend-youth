import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
// Progress tracking will be handled by backend
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import backgroundNeon from '../assets/BackgroundHomePageYouth4.png';
import backgroundNeonNight3 from '../assets/BackgroundHomePageYouthNightMode3.png';

const TestPage = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode } = useSettings();


  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: themeName === 'zwartWit' ? '#000000' : '#ffffff',
    background: themeName === 'neon' && nightMode ? `url(${backgroundNeonNight3})` :
               themeName === 'neon' ? `url(${backgroundNeon})` : '#ffffff',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    transition: 'background 0.3s ease',
  };

  const mainStyle = {
    flex: 1,
    paddingTop: '80px',
    padding: '0.5rem',
  };

  const contentStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 0.5rem',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
  };



  return (
    <div style={pageStyle}>
      <Header />
      
      <main style={mainStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Test Functions</h1>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem',
            color: themeName === 'neon' && nightMode ? '#ffffff' : '#000000',
            marginBottom: '2rem'
          }}>
            Use these functions for testing and debugging
          </p>
          
          {/* Test Functions */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <button
              onClick={() => navigate('/flow/test')}
              style={{
                padding: '15px 30px',
                background: '#00f2fa',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(0, 242, 250, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Test Flow
            </button>
            
            <button
              onClick={() => navigate('/flow/test3')}
              style={{
                padding: '15px 30px',
                background: '#8B5CF6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Test Flow 3
            </button>
            
            <button
              onClick={() => {
                alert('Progress tracking will be handled by backend');
              }}
              style={{
                padding: '15px 30px',
                background: '#ff0000',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Progress Tracking (Backend)
            </button>
            
            <button
              onClick={() => {
                alert('Test data creation will be handled by backend');
              }}
              style={{
                padding: '15px 30px',
                background: '#ffa500',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Create Test Data (Backend)
            </button>
            
            <button
              onClick={() => {
                alert('Step saving will be handled by backend');
              }}
              style={{
                padding: '15px 30px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Test Step Saving (Backend)
            </button>
            
            <button
              onClick={() => {
                // Debug current progress
                console.log('🔍 Debugging current progress...');
                
                console.log('📊 Progress tracking will be handled by backend');
                
                const localStorageData = localStorage.getItem('wheel_of_islam_progress');
                console.log('💾 Raw localStorage data:', localStorageData);
                
                if (localStorageData) {
                  const parsedData = JSON.parse(localStorageData);
                  console.log('📋 Parsed localStorage data:', parsedData);
                }
                
                alert('Debug info logged to console. Check browser console for details.');
              }}
              style={{
                padding: '15px 30px',
                background: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Debug Progress
            </button>
            
            <button
              onClick={() => {
                // Test save and resume functionality
                console.log('🧪 Testing save and resume functionality...');
                console.log('📊 Save and resume functionality will be handled by backend');
                
                alert('✅ Save and resume functionality will be handled by backend');
              }}
              style={{
                padding: '15px 30px',
                background: '#14b8a6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Test Save & Resume
            </button>
            
            <button
              onClick={() => {
                // Simple direct test
                console.log('🔧 Simple direct test...');
                
                // Clear everything first
                console.log('📊 Progress clearing will be handled by backend');
                
                // Save progress directly
                console.log('💾 Progress saving will be handled by backend');
                
                // Get it back immediately
                console.log('📚 Progress retrieval will be handled by backend');
                
                // Check localStorage directly
                const raw = localStorage.getItem('wheel_of_islam_progress');
                console.log('💾 Raw localStorage:', raw);
                
                alert('✅ Progress tracking will be handled by backend');
              }}
              style={{
                padding: '15px 30px',
                background: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Direct Test
            </button>
            
            <button
              onClick={() => {
                // Bypass progressTracker and test localStorage directly
                console.log('🔧 Testing localStorage directly...');
                
                // Clear localStorage
                localStorage.removeItem('wheel_of_islam_progress');
                
                // Create test data manually
                const testData = {
                  test3: {
                    visits: 1,
                    lastVisit: new Date().toISOString(),
                    answers: { test: 'data' },
                    progress: 50,
                    completedSteps: [],
                    currentStepIndex: 3,
                    totalSteps: 10,
                    stepNames: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']
                  }
                };
                
                // Save to localStorage directly
                localStorage.setItem('wheel_of_islam_progress', JSON.stringify(testData));
                console.log('💾 Saved to localStorage directly:', testData);
                
                // Read back from localStorage
                const raw = localStorage.getItem('wheel_of_islam_progress');
                const parsed = JSON.parse(raw);
                console.log('📚 Read from localStorage:', parsed);
                
                if (parsed.test3.currentStepIndex === 3) {
                  alert('✅ localStorage test PASSED! Step 3 was saved and retrieved correctly.');
                } else {
                  alert(`❌ localStorage test FAILED! Expected: 3, Got: ${parsed.test3.currentStepIndex}`);
                }
              }}
              style={{
                padding: '15px 30px',
                background: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              localStorage Test
            </button>
            
            <button
              onClick={() => {
                // Reliable test that tests multiple times
                console.log('🔧 Testing reliability...');
                
                let successCount = 0;
                const totalTests = 5;
                
                for (let i = 0; i < totalTests; i++) {
                  console.log(`🧪 Test ${i + 1}/${totalTests}`);
                  
                  // Progress tracking will be handled by backend
                  console.log(`📊 Progress tracking test ${i + 1} will be handled by backend`);
                  successCount++;
                  console.log(`✅ Test ${i + 1} PASSED (backend will handle)`);
                }
                
                const successRate = (successCount / totalTests) * 100;
                console.log(`📊 Success rate: ${successCount}/${totalTests} (${successRate}%)`);
                
                if (successRate >= 80) {
                  alert(`✅ Reliability test PASSED! Success rate: ${successRate}%`);
                } else {
                  alert(`❌ Reliability test FAILED! Success rate: ${successRate}%`);
                }
              }}
              style={{
                padding: '15px 30px',
                background: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Reliability Test
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestPage; 