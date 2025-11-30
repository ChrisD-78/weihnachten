// API Client für Weihnachtskalender Backend
// Ersetzt localStorage-Aufrufe durch API-Aufrufe

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

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
        throw error;
    }
}

// ========== USERS ==========

export async function getUsers() {
    return apiCall('/users');
}

export async function getUser(userId) {
    return apiCall(`/users/${userId}`);
}

export async function createOrUpdateUser(userData) {
    return apiCall('/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
}

// ========== OPENED DOORS ==========

export async function getOpenedDoors(userId) {
    return apiCall(`/opened-doors/${userId}`);
}

export async function addOpenedDoor(userId, day) {
    return apiCall('/opened-doors', {
        method: 'POST',
        body: JSON.stringify({ userId, day })
    });
}

// ========== QUIZ ANSWERS ==========

export async function getQuizAnswers(userId) {
    return apiCall(`/quiz-answers/${userId}`);
}

export async function submitQuizAnswers(userId, day, answers, points) {
    return apiCall('/quiz-answers', {
        method: 'POST',
        body: JSON.stringify({ userId, day, answers, points })
    });
}

// ========== CHALLENGES ==========

export async function getChallengeSubmissions(challengeId) {
    return apiCall(`/challenges/${challengeId}/submissions`);
}

export async function getUserChallenges(userId) {
    return apiCall(`/challenges/user/${userId}`);
}

export async function submitChallenge(userId, challengeId, imageData) {
    return apiCall('/challenges/submit', {
        method: 'POST',
        body: JSON.stringify({ userId, challengeId, imageData })
    });
}

// ========== CHALLENGE VOTES ==========

export async function getChallengeVotes(challengeId) {
    return apiCall(`/challenges/${challengeId}/votes`);
}

export async function submitVote(challengeId, voterId, votedForUserId) {
    return apiCall('/challenges/vote', {
        method: 'POST',
        body: JSON.stringify({ challengeId, voterId, votedForUserId })
    });
}

// ========== HEALTH CHECK ==========

export async function checkHealth() {
    return apiCall('/health');
}

