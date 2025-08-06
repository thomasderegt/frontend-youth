const testFlow = {
  slug: 'test-flow',
  title: 'Test Flow',
  subtitle: 'Testing save functionality',
  steps: [
    {
      id: 'intro',
      type: 'intro',
      title: 'Welcome',
      content: 'This is a test flow to debug save functionality.'
    },
    {
      id: 'question-1',
      type: 'question',
      title: 'Test Question',
      content: 'How are you feeling today?',
      options: ['Good', 'Okay', 'Not great']
    },
    {
      id: 'reflection-1',
      type: 'reflection',
      title: 'Reflection',
      content: 'Take a moment to reflect on your answer.'
    },
    {
      id: 'completion',
      type: 'completion',
      title: 'Complete',
      content: 'You have completed the test flow!'
    }
  ]
};

export default testFlow; 