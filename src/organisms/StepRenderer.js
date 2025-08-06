import React from 'react';
import IntroStep from './steps/IntroStep';
import QuestionStep from './steps/QuestionStep';
import ReflectionStep from './steps/ReflectionStep';
import ActionStep from './steps/ActionStep';
import CommitmentStep from './steps/CommitmentStep';
import CompletionStep from './steps/CompletionStep';
import VisualCardStep from './steps/VisualCardStep';
import QuoteStep from './steps/QuoteStep';
import TeachingStep from './steps/TeachingStep';
import SelfTestStep from './steps/SelfTestStep';
import InputStep from './steps/InputStep';
import ChoiceStep from './steps/ChoiceStep';
import SummaryStep from './steps/SummaryStep';
import GoalsStep from './steps/GoalsStep';
import FallbackStep from './steps/FallbackStep';
import SimpleVisualCardStep from './steps/SimpleVisualCardStep';
import ProgressInsightStep from './steps/ProgressInsightStep';
import ScaleStep from './steps/ScaleStep';

const StepRenderer = ({ step, onNext, onPrevious, onFinish }) => {
  const stepComponents = {
    intro: IntroStep,
    question: QuestionStep,
    reflection: ReflectionStep,
    action: ActionStep,
    commitment: CommitmentStep,
    completion: CompletionStep,
    'visual-card': VisualCardStep,
    'simple-visual-card': SimpleVisualCardStep,
    quote: QuoteStep,
    teaching: TeachingStep,
    selftest: SelfTestStep,
    input: InputStep,
    choice: ChoiceStep,
    summary: SummaryStep,
    goals: GoalsStep,
    'progress-insight': ProgressInsightStep,
    scale: ScaleStep
  };
  
  // Validate step data
  if (!step || !step.type) {
    console.error('Invalid step data:', step);
    return (
      <div className="flex items-center justify-center min-h-96">
        <p className="text-red-600">Invalid step data</p>
      </div>
    );
  }
  
  const StepComponent = stepComponents[step.type];
  
  if (!StepComponent) {
    console.error(`Unknown step type: ${step.type}. Available types:`, Object.keys(stepComponents));
    return <FallbackStep step={step} onNext={onNext} onPrevious={onPrevious} onFinish={onFinish} />;
  }
  
  return (
    <StepComponent
      step={step}
      onNext={onNext}
      onPrevious={onPrevious}
      onFinish={onFinish}
    />
  );
};

export default StepRenderer; 