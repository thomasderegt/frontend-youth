import React from 'react';
import { useButtonStyles } from '../utils/buttonStyles';

const SaveButton = ({ onSave, flowSlug, currentStepIndex, totalSteps }) => {
  const { secondaryButtonStyle, getHoverEffects } = useButtonStyles();

  const handleSave = () => {
    console.log('🔘 Save button clicked:', { flowSlug, currentStepIndex, totalSteps });
    
    // Save current progress
    if (onSave) {
      onSave(flowSlug, currentStepIndex, totalSteps);
    } else {
      console.error('❌ onSave function is not provided');
    }
  };

  return (
    <button
      style={{
        ...secondaryButtonStyle,
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
      }}
      onClick={handleSave}
      {...getHoverEffects(false)}
    >
      💾 Save & Stop
    </button>
  );
};

export default SaveButton; 