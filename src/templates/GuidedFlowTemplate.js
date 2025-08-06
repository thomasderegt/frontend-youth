import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StepProgress from '../atoms/StepProgress';
import StepRenderer from '../organisms/StepRenderer';
import SaveButton from '../atoms/SaveButton';
import backgroundImage from '../assets/BackgroundHomePageYouth4.png';
// Progress tracking will be handled by backend

const GuidedFlowTemplate = ({ flow, onFlowComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [flowData, setFlowData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // Progress data will be handled by backend
  const navigate = useNavigate();
  
  useEffect(() => {
    // Initialize flow data
    setFlowData({});
    
    // Progress loading will be handled by backend
    setCurrentStepIndex(0);
  }, [flow?.slug, flow?.steps]);
  
  // Validate flow data
  if (!flow || !flow.steps || !Array.isArray(flow.steps)) {
    console.error('Invalid flow data:', flow);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Invalid Flow Data</h2>
          <p className="text-gray-600">The flow could not be loaded properly.</p>
        </div>
      </div>
    );
  }
  
  const currentStep = flow.steps[currentStepIndex];
  const totalSteps = flow.steps.length;
  
  console.log('Flow loaded successfully:', {
    title: flow.title,
    totalSteps,
    currentStepIndex,
    currentStepType: currentStep?.type
  });
  
  const handleNext = (stepData = null) => {
    setIsLoading(true);
    
    // Store step data
    if (stepData) {
      const stepDataWithId = { [currentStep.id]: stepData };
      console.log('📝 Step data being saved:', { stepId: currentStep.id, stepData, stepDataWithId });
      setFlowData(prev => ({
        ...prev,
        ...stepDataWithId
      }));
      
      // Progress saving will be handled by backend
    }
    
    // Simulate loading for better UX
    setTimeout(() => {
      if (currentStepIndex < totalSteps - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
      setIsLoading(false);
    }, 300);
  };
  
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };
  
  const handleFinish = () => {
    if (onFlowComplete) {
      onFlowComplete(flowData);
    }
    
    // Navigate back to home
    navigate('/home');
  };

  const handleSave = (flowSlug, currentStepIndex, totalSteps) => {
    console.log('💾 Save button clicked:', { flowSlug, currentStepIndex, totalSteps, flowData });
    
    // Progress saving will be handled by backend
    alert('Progress saving will be implemented in the backend.');
    
    // Navigate back to home
    navigate('/home');
  };
  
  // const handleSkip = () => {
  //   if (currentStep.navigation?.next) {
  //     const nextStepIndex = flow.steps.findIndex(step => step.id === currentStep.navigation.next);
  //     if (nextStepIndex !== -1) {
  //       setCurrentStepIndex(nextStepIndex);
  //     }
  //   }
  // };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Laden...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {flow.title}
              </h1>
              <p className="text-sm text-gray-600">
                {flow.subtitle}
              </p>
              {/* Progress info will be handled by backend */}
            </div>
            
            <div className="flex items-center gap-3">
              <SaveButton
                onSave={handleSave}
                flowSlug={flow?.slug || 'test'}
                currentStepIndex={currentStepIndex}
                totalSteps={totalSteps}
              />
              <button
                onClick={() => navigate('/home')}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-4">
            <StepProgress 
              currentStep={currentStepIndex + 1} 
              totalSteps={totalSteps}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div 
        className="flex-1 flex flex-col"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <StepRenderer
              step={currentStep}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onFinish={handleFinish}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedFlowTemplate; 