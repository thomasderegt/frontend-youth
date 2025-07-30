import React, { createContext, useContext, useState, useEffect } from 'react';

const StrategyContext = createContext();

export const useStrategy = () => {
  const context = useContext(StrategyContext);
  if (!context) {
    throw new Error('useStrategy must be used within a StrategyProvider');
  }
  return context;
};

// User Groups and their characteristics
export const USER_GROUPS = {
  GEN_Z: {
    id: 'gen_z',
    name: 'Gen Z (Youth)',
    description: 'Muslim youth aged 13-25 seeking to reconnect with their faith',
    subscription: 'FREE',
    features: [
      'Access to basic Islamic content',
      'Interactive wheel navigation',
      'Basic goal tracking',
      'Community features'
    ],
    modules: ['wheel', 'names', 'tazkiyyah', 'community'],
    support: 'Self-guided learning with community support'
  },
  PARENTS: {
    id: 'parents',
    name: 'Parents',
    description: 'Busy parents supporting their children\'s Islamic education',
    subscription: '$10/month',
    features: [
      'All Gen Z features',
      'Parent dashboard',
      'Progress tracking for children',
      'Scheduled reminders',
      'Family activity suggestions',
      'Busy schedule optimization'
    ],
    modules: ['wheel', 'names', 'tazkiyyah', 'parent-dashboard', 'family-activities'],
    support: 'Dedicated parent support with schedule optimization'
  },
  TEACHERS_IMAMS: {
    id: 'teachers_imams',
    name: 'Teachers & Imams',
    description: 'Islamic educators and community leaders',
    subscription: 'Premium',
    features: [
      'All Parent features',
      '1-on-1 session booking',
      'Student management',
      'Content creation tools',
      'Income generation',
      'Professional development',
      'Community leadership tools'
    ],
    modules: ['wheel', 'names', 'tazkiyyah', 'teaching-tools', 'session-management', 'content-creation'],
    support: 'Premium support with income generation opportunities'
  }
};

// Goal Modes for different user groups
export const GOAL_MODES = {
  GEN_Z: [
    { key: 'doubts', label: 'I\'m experiencing doubts and looking for answers' },
    { key: 'improve', label: 'I want to improve my Islam and connection with God' },
    { key: 'explore', label: 'I\'m curious and want to have a look around!' },
    { key: 'community', label: 'I want to connect with other Muslim youth' }
  ],
  PARENTS: [
    { key: 'support_children', label: 'I want to support my children\'s Islamic education' },
    { key: 'family_activities', label: 'I want to find family-friendly Islamic activities' },
    { key: 'busy_schedule', label: 'I need help managing Islamic education with my busy schedule' },
    { key: 'personal_growth', label: 'I want to grow in my own Islamic knowledge' }
  ],
  TEACHERS_IMAMS: [
    { key: 'teach_students', label: 'I want to teach and guide students effectively' },
    { key: 'generate_income', label: 'I want to generate additional income through teaching' },
    { key: 'community_leadership', label: 'I want to strengthen my community leadership' },
    { key: 'content_creation', label: 'I want to create and share Islamic content' }
  ]
};

// Modules available for each user group
export const MODULES = {
  wheel: {
    name: 'Wheel of Islam',
    description: 'Interactive exploration of Islamic topics',
    availableFor: ['gen_z', 'parents', 'teachers_imams']
  },
  names: {
    name: 'Names of Allah',
    description: 'Learn and reflect on the 99 Names of Allah',
    availableFor: ['gen_z', 'parents', 'teachers_imams']
  },
  tazkiyyah: {
    name: 'Tazkiyyah (Self-Purification)',
    description: 'Spiritual development and self-improvement',
    availableFor: ['gen_z', 'parents', 'teachers_imams']
  },
  'parent-dashboard': {
    name: 'Parent Dashboard',
    description: 'Track children\'s progress and manage family activities',
    availableFor: ['parents', 'teachers_imams']
  },
  'family-activities': {
    name: 'Family Activities',
    description: 'Islamic activities for the whole family',
    availableFor: ['parents', 'teachers_imams']
  },
  'teaching-tools': {
    name: 'Teaching Tools',
    description: 'Resources and tools for Islamic education',
    availableFor: ['teachers_imams']
  },
  'session-management': {
    name: 'Session Management',
    description: 'Manage 1-on-1 sessions and student bookings',
    availableFor: ['teachers_imams']
  },
  'content-creation': {
    name: 'Content Creation',
    description: 'Create and share Islamic educational content',
    availableFor: ['teachers_imams']
  },
  community: {
    name: 'Community',
    description: 'Connect with other Muslims',
    availableFor: ['gen_z', 'parents', 'teachers_imams']
  }
};

export const StrategyProvider = ({ children }) => {
  const [userGroup, setUserGroup] = useState(() => {
    const saved = localStorage.getItem('userGroup');
    return saved || null;
  });

  const [subscriptionTier, setSubscriptionTier] = useState(() => {
    const saved = localStorage.getItem('subscriptionTier');
    return saved || 'free';
  });

  const [availableModules, setAvailableModules] = useState([]);

  // Update available modules when user group changes
  useEffect(() => {
    if (userGroup) {
      const userGroupData = USER_GROUPS[userGroup.toUpperCase()];
      if (userGroupData) {
        setAvailableModules(userGroupData.modules);
      }
    }
  }, [userGroup]);

  // Save to localStorage when values change
  useEffect(() => {
    if (userGroup) {
      localStorage.setItem('userGroup', userGroup);
    }
  }, [userGroup]);

  useEffect(() => {
    localStorage.setItem('subscriptionTier', subscriptionTier);
  }, [subscriptionTier]);

  const getUserGroupData = () => {
    if (!userGroup) return null;
    return USER_GROUPS[userGroup.toUpperCase()];
  };

  const getGoalModes = () => {
    if (!userGroup) return [];
    return GOAL_MODES[userGroup.toUpperCase()] || [];
  };

  const isModuleAvailable = (moduleKey) => {
    return availableModules.includes(moduleKey);
  };

  const getSubscriptionFeatures = () => {
    const userGroupData = getUserGroupData();
    return userGroupData ? userGroupData.features : [];
  };

  const value = {
    userGroup,
    setUserGroup,
    subscriptionTier,
    setSubscriptionTier,
    availableModules,
    getUserGroupData,
    getGoalModes,
    isModuleAvailable,
    getSubscriptionFeatures,
    USER_GROUPS,
    GOAL_MODES,
    MODULES
  };

  return (
    <StrategyContext.Provider value={value}>
      {children}
    </StrategyContext.Provider>
  );
}; 