import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GuidedFlowTemplate from '../templates/GuidedFlowTemplate';
import { flowRegistry } from '../flows';

const FlowPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [flow, setFlow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadFlow = async () => {
      try {
        setLoading(true);
        console.log('Loading flow with slug:', slug);
        console.log('Available flows:', Object.keys(flowRegistry));
        
        // Check if flow exists in registry
        if (!flowRegistry[slug]) {
          throw new Error(`Flow '${slug}' not found. Available flows: ${Object.keys(flowRegistry).join(', ')}`);
        }
        
        // Dynamically import the flow
        const flowModule = await flowRegistry[slug]();
        const flowData = flowModule.default;
        console.log('Flow module loaded:', flowModule);
        console.log('Flow data:', flowData);
        
        // Validate flow data
        if (!flowData || !flowData.steps || !Array.isArray(flowData.steps)) {
          throw new Error('Invalid flow data structure');
        }
        
        console.log('Flow loaded successfully:', {
          slug,
          title: flowData.title,
          stepsCount: flowData.steps.length
        });
        
        setFlow(flowData);
      } catch (err) {
        console.error('Error loading flow:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadFlow();
  }, [slug]);
  
  const handleFlowComplete = (flowData) => {
    console.log('Flow completed with data:', flowData);
    // Here you could save the flow data to localStorage, send to API, etc.
    
    // Show completion message
    alert('Gefeliciteerd! Je hebt de flow voltooid.');
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Flow laden...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Flow niet gevonden
          </h2>
          <p className="text-gray-600 mb-4">
            {error}
          </p>
          <button
            onClick={() => navigate('/flows')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Terug naar Flows
          </button>
        </div>
      </div>
    );
  }
  
  if (!flow) {
    return null;
  }
  
  return (
    <GuidedFlowTemplate 
      flow={flow} 
      onFlowComplete={handleFlowComplete}
    />
  );
};

export default FlowPage; 