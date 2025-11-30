// API Client für Weihnachtskalender Backend
// Ersetzt localStorage-Aufrufe durch API-Aufrufe

// API URL - Netlify Functions
const API_BASE_URL = '/.netlify/functions/api';

// Helper function for API calls
async function apiCall(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Call Error:', error);
        // Fallback to localStorage if API is not available
        if (window.USE_LOCALSTORAGE_FALLBACK) {
            console.warn('API not available, using localStorage fallback');
            return null;
        }
        throw error;
    }
}

// ========== USERS ==========

window.getUsers = async function() {
    return apiCall('/users');
};

window.getUser = async function(userId) {
    return apiCall(`/users/${userId}`);
};

window.createOrUpdateUser = async function(userData) {
    return apiCall('/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
};

// ========== OPENED DOORS ==========

window.getOpenedDoors = async function(userId) {
    return apiCall(`/opened-doors/${userId}`);
};

window.addOpenedDoor = async function(userId, day) {
    return apiCall('/opened-doors', {
        method: 'POST',
        body: JSON.stringify({ userId, day })
    });
};

// ========== QUIZ ANSWERS ==========

window.getQuizAnswers = async function(userId) {
    return apiCall(`/quiz-answers/${userId}`);
};

window.submitQuizAnswers = async function(userId, day, answers, points) {
    return apiCall('/quiz-answers', {
        method: 'POST',
        body: JSON.stringify({ userId, day, answers, points })
    });
};

// ========== CHALLENGES ==========

window.getChallengeSubmissions = async function(challengeId) {
    return apiCall(`/challenges/${challengeId}/submissions`);
};

window.getUserChallenges = async function(userId) {
    return apiCall(`/challenges/user/${userId}`);
};

window.submitChallenge = async function(userId, challengeId, imageData) {
    return apiCall('/challenges/submit', {
        method: 'POST',
        body: JSON.stringify({ userId, challengeId, imageData })
    });
};

// ========== CHALLENGE VOTES ==========

window.getChallengeVotes = async function(challengeId) {
    return apiCall(`/challenges/${challengeId}/votes`);
};

window.submitVote = async function(challengeId, voterId, votedForUserId) {
    return apiCall('/challenges/vote', {
        method: 'POST',
        body: JSON.stringify({ challengeId, voterId, votedForUserId })
    });
};

// ========== HEALTH CHECK ==========

window.checkHealth = async function() {
    return apiCall('/health');
};
