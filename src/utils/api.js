/**
 * API Service for communicating with AI/ML Backend
 */

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Send message to AI chatbot
   * @param {string} user_id - Unique user identifier
   * @param {string} message - User's message
   * @param {string} goal - User's goal (doubts, explore, improve)
   * @param {number} level - User's level (1, 2, 3)
   * @returns {Promise<Object>} AI response
   */
  async sendChatMessage(user_id, message, goal, level) {
    try {
      const response = await fetch(`${this.baseURL}/api/chatbot/send/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication header when implemented
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id,
          message,
          goal,
          level
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending chat message:', error);
      throw error;
    }
  }

  /**
   * Get Islamic answer from RAG system
   * @param {string} question - User's question
   * @param {string} user_goal - User's goal (doubts, explore, improve)
   * @param {number} user_level - User's level (1, 2, 3)
   * @returns {Promise<Object>} Islamic answer
   */
  async getIslamicAnswer(question, user_goal, user_level) {
    try {
      const response = await fetch(`${this.baseURL}/api/rag/question/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication header when implemented
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          question,
          user_goal,
          user_level
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting Islamic answer:', error);
      throw error;
    }
  }

  /**
   * Search Islamic knowledge
   * @param {string} query - Search query
   * @param {string} goal - User's goal
   * @param {number} level - User's level
   * @returns {Promise<Object>} Search results
   */
  async searchIslamicKnowledge(query, goal, level) {
    try {
      const response = await fetch(`${this.baseURL}/api/rag/search/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          goal,
          level
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error searching Islamic knowledge:', error);
      throw error;
    }
  }

  /**
   * Get goal-specific content
   * @param {string} goal - User's goal
   * @param {number} level - User's level
   * @returns {Promise<Object>} Content structure
   */
  async getGoalContent(goal, level) {
    try {
      const response = await fetch(`${this.baseURL}/api/rag/content/${goal}/${level}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting goal content:', error);
      throw error;
    }
  }

  /**
   * Get AI personality information
   * @param {string} goal - User's goal
   * @returns {Promise<Object>} Personality information
   */
  async getPersonalityInfo(goal) {
    try {
      const response = await fetch(`${this.baseURL}/api/chatbot/personality/${goal}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting personality info:', error);
      throw error;
    }
  }
}

// Create singleton instance
const apiService = new ApiService();
export default apiService; 