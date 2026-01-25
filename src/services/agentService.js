import api from './api';

// Agent Management API Services
export const agentService = {
  // Get All Agents
  getAllAgents: async () => {
    return await api.get('/agents/getAllAgentDetails');
  },

  // Create Agent
  createAgent: async (agentData) => {
    return await api.post('/agents/create', agentData);
  },

  // Update Agent
  updateAgent: async (agentId, agentData) => {
    return await api.put(`/agents/update/${agentId}`, agentData);
  },

  // Update Agent Status
  updateAgentStatus: async (agentId, payload) => {
    return await api.put(`/agents/updateStatus/${agentId}`, payload);
  },

  // Delete Agent
  deleteAgent: async (agentId) => {
    return await api.delete(`/agents/delete/${agentId}`);
  },
};

export default agentService;