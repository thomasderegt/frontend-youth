// Test script to debug localStorage save functionality
console.log('🧪 Testing localStorage functionality...');

// Test 1: Basic localStorage operations
try {
  localStorage.setItem('test_key', 'test_value');
  const retrieved = localStorage.getItem('test_key');
  console.log('✅ Basic localStorage test:', retrieved === 'test_value' ? 'PASSED' : 'FAILED');
} catch (error) {
  console.error('❌ Basic localStorage test failed:', error);
}

// Test 2: JSON operations
try {
  const testData = {
    visits: 1,
    currentStepIndex: 3,
    totalSteps: 10,
    answers: { 'step-1': { answer: 'test' } }
  };
  
  localStorage.setItem('test_json', JSON.stringify(testData));
  const retrieved = JSON.parse(localStorage.getItem('test_json'));
  
  console.log('✅ JSON localStorage test:', 
    retrieved.currentStepIndex === 3 ? 'PASSED' : 'FAILED'
  );
} catch (error) {
  console.error('❌ JSON localStorage test failed:', error);
}

// Test 3: ProgressTracker simulation
try {
  const STORAGE_KEY = 'wheel_of_islam_progress';
  const flowSlug = 'test-flow';
  
  // Simulate ProgressTracker.saveFlowProgress
  const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const currentProgress = allProgress[flowSlug] || {
    visits: 0,
    currentStepIndex: 0,
    totalSteps: 0,
    answers: {}
  };
  
  // Update progress
  currentProgress.visits += 1;
  currentProgress.currentStepIndex = 5;
  currentProgress.totalSteps = 12;
  currentProgress.answers = { ...currentProgress.answers, 'step-5': { answer: 'test' } };
  
  // Save
  allProgress[flowSlug] = currentProgress;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
  
  // Verify
  const verifyData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const verifyProgress = verifyData[flowSlug];
  
  console.log('✅ ProgressTracker simulation test:', 
    verifyProgress.currentStepIndex === 5 ? 'PASSED' : 'FAILED'
  );
  
  console.log('📊 Test results:', {
    currentStepIndex: verifyProgress.currentStepIndex,
    totalSteps: verifyProgress.totalSteps,
    visits: verifyProgress.visits,
    answersCount: Object.keys(verifyProgress.answers).length
  });
  
} catch (error) {
  console.error('❌ ProgressTracker simulation failed:', error);
}

// Test 4: Check for existing progress data
try {
  const STORAGE_KEY = 'wheel_of_islam_progress';
  const existingData = localStorage.getItem(STORAGE_KEY);
  console.log('📚 Existing progress data:', existingData ? 'EXISTS' : 'NONE');
  
  if (existingData) {
    const parsed = JSON.parse(existingData);
    console.log('📊 Existing flows:', Object.keys(parsed));
    
    Object.keys(parsed).forEach(flowSlug => {
      const progress = parsed[flowSlug];
      console.log(`📈 Flow "${flowSlug}":`, {
        currentStepIndex: progress.currentStepIndex,
        totalSteps: progress.totalSteps,
        visits: progress.visits,
        progress: progress.progress
      });
    });
  }
} catch (error) {
  console.error('❌ Error checking existing data:', error);
}

console.log('🧪 localStorage tests completed!'); 