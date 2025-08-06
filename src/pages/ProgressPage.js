import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
// Progress tracking will be handled by backend
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import backgroundImage from '../assets/BackgroundHomePageYouth4.png';
import backgroundNeonNight3 from '../assets/BackgroundHomePageYouthNightMode3.png';

const ProgressPage = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const { nightMode } = useSettings();
  const [progressData, setProgressData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Define pageStyle at the top to avoid hoisting issues
  const pageStyle = {
    minHeight: '100vh',
    backgroundImage: themeName === 'neon' && nightMode ? `url(${backgroundNeonNight3})` : `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  useEffect(() => {
    setIsLoading(true);
    
    // Progress data will be loaded from backend
    setProgressData({});
    setIsLoading(false);
  }, []);

  const getFlowTitle = (flowSlug) => {
    const flowTitles = {
      'test': 'Testflow: The Door That Never Closes',
      'guilt-return': 'Return to Mercy',
      'spirituality': 'Spiritual Growth',
      'belief': 'Belief Journey'
    };
    return flowTitles[flowSlug] || flowSlug;
  };

  const getDaysSinceLastVisit = (lastVisit) => {
    if (!lastVisit) return 'Never';
    const days = Math.floor((new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    if (progress >= 20) return 'bg-blue-500';
    return 'bg-gray-300';
  };

  const getStepIndicator = (currentStep, totalSteps, stepNames = []) => {
    const steps = stepNames.length > 0 ? stepNames : Array.from({ length: totalSteps }, (_, i) => `Step ${i + 1}`);
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Your Current Position</span>
          <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0" style={{ minWidth: '60px', maxWidth: '120px' }}>
              <div 
                className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  index < currentStep - 1 
                    ? 'bg-green-500 text-white' 
                    : index === currentStep - 1 
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300' 
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index < currentStep - 1 ? '✓' : index + 1}
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center px-1 leading-tight">
                <span className="hidden sm:inline">{step}</span>
                <span className="sm:hidden">{index + 1}</span>
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={`flex-1 h-0.5 mt-2 mx-1 ${
                    index < currentStep - 1 ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                  style={{ minWidth: '20px' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getSavedFlows = () => {
    const savedFlows = [];
    
    Object.keys(progressData).forEach(flowSlug => {
      // Skip test flows
      if (flowSlug.startsWith('test')) {
        return;
      }
      
      const progress = progressData[flowSlug];
      if (progress.currentStepIndex !== undefined && progress.savedAt) {
        savedFlows.push({
          slug: flowSlug,
          title: getFlowTitle(flowSlug),
          currentStep: progress.currentStepIndex + 1,
          totalSteps: progress.totalSteps,
          savedAt: progress.savedAt,
          progress: Math.round((progress.currentStepIndex / progress.totalSteps) * 100),
          stepNames: progress.stepNames || []
        });
      }
    });
    
    return savedFlows;
  };

  const getInsightMessage = (flowSlug, progress) => {
    if (progress.visits <= 1) return null;

    const insights = [];
    
    if (progress.visits >= 3) {
      insights.push({
        icon: '🌟',
        message: `You've visited ${progress.visits} times - building a habit!`
      });
    }

    if (progress.progress > 50) {
      insights.push({
        icon: '📈',
        message: `You're ${Math.round(progress.progress)}% through this journey!`
      });
    }

    if (progress.answers.emotion) {
      insights.push({
        icon: '💙',
        message: `You've been working on your ${progress.answers.emotion}`
      });
    }

    // Goal-based insights
    if (progress.goals) {
      const goals = progress.goals;
      
      // Confrontation phase insights
      if (goals.confrontation?.emotionAwareness) {
        if (goals.confrontation.emotionAwareness === 'hope') {
          insights.push({
            icon: '🌱',
            message: 'You\'re moving from fear to hope - that\'s growth!'
          });
        } else if (goals.confrontation.shameReduction > 5) {
          insights.push({
            icon: '💚',
            message: 'You\'re learning to be kinder to yourself'
          });
        }
      }

      // Mercy phase insights
      if (goals.mercy?.trustInForgiveness > 6) {
        insights.push({
          icon: '🕊️',
          message: 'You\'re building trust in Allah\'s forgiveness'
        });
      }

      // Self-recognition phase insights
      if (goals.selfRecognition?.sincerityLevel === 'sincere') {
        insights.push({
          icon: '✨',
          message: 'Your sincerity is growing - that\'s beautiful!'
        });
      }

      // Return phase insights
      if (goals.return?.personalDua) {
        insights.push({
          icon: '📝',
          message: 'You\'ve created your own dua - that\'s powerful!'
        });
      }
    }

    return insights;
  };

  if (isLoading) {
    return (
      <div style={pageStyle}>
        <Header />
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          paddingTop: '80px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              animation: 'spin 1s linear infinite',
              borderRadius: '50%',
              height: '3rem',
              width: '3rem',
              borderBottom: '2px solid #2563eb',
              margin: '0 auto 1rem'
            }}></div>
            <p style={{ color: '#6b7280' }}>Loading your progress...</p>
          </div>
        </div>
      </div>
    );
  }

  const hasAnyProgress = Object.keys(progressData).length > 0;

  const mainStyle = {
    flex: 1,
    paddingTop: '80px',
    paddingBottom: '2rem'
  };

  const contentStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 1rem'
  };

  return (
    <div style={pageStyle}>
      <Header />
      
      <main style={mainStyle}>
        <div style={contentStyle}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '0.5rem' 
            }}>
              Your Spiritual Journey
            </h1>
            <p style={{ color: '#6b7280' }}>
              Track your progress and see where you are in your journey
            </p>
          </div>

          {/* Saved Flows Section */}
          {(() => {
            const savedFlows = getSavedFlows();
            if (savedFlows.length > 0) {
              return (
                <div style={{ marginBottom: '2rem' }}>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#111827', 
                    marginBottom: '1rem' 
                  }}>
                    💾 Saved Flows - Continue Where You Left Off
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {savedFlows.map((flow) => (
                      <div key={flow.slug} style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                          <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>
                              {flow.title}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                              You are at step {flow.currentStep} of {flow.totalSteps} • {flow.progress}% complete
                            </p>
                            <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                              Saved: {new Date(flow.savedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => navigate(`/flow/${flow.slug}`)}
                            style={{
                              background: 'linear-gradient(45deg, #8b5cf6, #a855f7)',
                              color: 'white',
                              padding: '0.75rem 1.5rem',
                              borderRadius: '8px',
                              border: 'none',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'scale(1.05)';
                              e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'scale(1)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            Continue Here
                          </button>
                        </div>
                        
                        {/* Step Indicator */}
                        <div className="overflow-x-auto">
                          {getStepIndicator(flow.currentStep, flow.totalSteps, flow.stepNames)}
                        </div>
                        
                        <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '4px', height: '8px' }}>
                          <div 
                            style={{ 
                              width: `${flow.progress}%`, 
                              background: 'linear-gradient(45deg, #8b5cf6, #a855f7)', 
                              height: '8px', 
                              borderRadius: '4px',
                              transition: 'width 0.3s ease'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })()}

          {!hasAnyProgress ? (
            /* No progress yet */
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <div className="text-6xl mb-4">🌱</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Start Your Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  You haven't started any flows yet. Begin your spiritual journey today!
                </p>
                <button
                  onClick={() => navigate('/home')}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Flows
                </button>
              </div>
            </div>
          ) : (
            /* Progress overview */
            <div className="space-y-6">
              {Object.entries(progressData)
                .filter(([flowSlug]) => !flowSlug.startsWith('test'))
                .map(([flowSlug, progress]) => {
                const insights = getInsightMessage(flowSlug, progress);
                const currentStep = progress.currentStepIndex !== undefined ? progress.currentStepIndex + 1 : 1;
                const totalSteps = progress.totalSteps || 1;
                const stepNames = progress.stepNames || [];
                
                return (
                  <div key={flowSlug} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {getFlowTitle(flowSlug)}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Last visited: {getDaysSinceLastVisit(progress.lastVisit)}
                        </p>
                      </div>
                      <button
                        onClick={() => navigate(`/flow/${flowSlug}`)}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Continue
                      </button>
                    </div>

                    {/* Step Indicator */}
                    {progress.currentStepIndex !== undefined && (
                      <div className="mb-4 overflow-x-auto">
                        {getStepIndicator(currentStep, totalSteps, stepNames)}
                      </div>
                    )}

                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Overall Progress</span>
                        <span>{Math.round(progress.progress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(progress.progress)}`}
                          style={{ width: `${progress.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {progress.visits}
                        </div>
                        <div className="text-sm text-blue-600">
                          Visits
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {Object.keys(progress.answers).length}
                        </div>
                        <div className="text-sm text-green-600">
                          Steps Completed
                        </div>
                      </div>
                    </div>

                    {/* Goal Progress */}
                    {progress.goals && (
                      <div className="border-t pt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Your Spiritual Journey
                        </h4>
                        {console.log('🎯 Rendering goals:', progress.goals)}
                        <div className="space-y-3">
                          {/* Confrontation Phase */}
                          {progress.goals.confrontation && (
                            <div className="bg-red-50 p-3 rounded-lg">
                              <h5 className="text-xs font-semibold text-red-700 mb-2">Confrontation Phase</h5>
                              <div className="space-y-1">
                                {progress.goals.confrontation.emotionAwareness && (
                                  <div className="text-xs text-red-600">
                                    Emotion: {progress.goals.confrontation.emotionAwareness}
                                  </div>
                                )}
                                <div className="text-xs text-red-600">
                                  Self-compassion: {progress.goals.confrontation.shameReduction}/10
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Mercy Phase */}
                          {progress.goals.mercy && (
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h5 className="text-xs font-semibold text-blue-700 mb-2">Mercy Phase</h5>
                              <div className="space-y-1">
                                <div className="text-xs text-blue-600">
                                  Trust in forgiveness: {progress.goals.mercy.trustInForgiveness}/10
                                </div>
                                <div className="text-xs text-blue-600">
                                  Hope level: {progress.goals.mercy.hopeLevel}/10
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Self-Recognition Phase */}
                          {progress.goals.selfRecognition && (
                            <div className="bg-green-50 p-3 rounded-lg">
                              <h5 className="text-xs font-semibold text-green-700 mb-2">Self-Recognition Phase</h5>
                              <div className="space-y-1">
                                {progress.goals.selfRecognition.sincerityLevel && (
                                  <div className="text-xs text-green-600">
                                    Sincerity: {progress.goals.selfRecognition.sincerityLevel}
                                  </div>
                                )}
                                <div className="text-xs text-green-600">
                                  Vulnerability comfort: {progress.goals.selfRecognition.vulnerabilityComfort}/10
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Return Phase */}
                          {progress.goals.return && (
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <h5 className="text-xs font-semibold text-purple-700 mb-2">Return Phase</h5>
                              <div className="space-y-1">
                                {progress.goals.return.personalDua && (
                                  <div className="text-xs text-purple-600">
                                    Personal dua: ✓ Created
                                  </div>
                                )}
                                <div className="text-xs text-purple-600">
                                  Practice intention: {progress.goals.return.practiceIntention}/10
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Insights */}
                    {insights && insights.length > 0 && (
                      <div className="border-t pt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Your Growth
                        </h4>
                        <div className="space-y-2">
                          {insights.map((insight, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <span>{insight.icon}</span>
                              <span>{insight.message}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/home')}
              className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Explore More Flows
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgressPage; 