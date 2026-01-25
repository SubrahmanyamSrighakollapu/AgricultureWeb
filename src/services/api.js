// API Configuration and Base Setup
const API_BASE_URL = 'http://113.11.231.249:89/api';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRtaW5AdG90YWxuZWVkcy5pbiIsInJvbGUiOiJTdXBlciBBZG1pbiIsImlhdCI6MTc2OTIyOTU5NywiZXhwIjoxNzY5ODM0Mzk3fQ.c9pA9hYo0PXfoImvpqACJ39XWHIaP2Eu5r4yeOcCtGc';

// Base API function
const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const isFormData = options.body instanceof FormData;

  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// API Methods
export const api = {
  // GET request
  get: (endpoint) =>
    apiCall(endpoint, { method: 'GET' }),

  // POST request (JSON or FormData)
  post: (endpoint, data) =>
    apiCall(endpoint, {
      method: 'POST',
      body: data instanceof FormData ? data : JSON.stringify(data),
    }),

  // PUT request (JSON or FormData)
  put: (endpoint, data) =>
    apiCall(endpoint, {
      method: 'PUT',
      body: data instanceof FormData ? data : JSON.stringify(data),
    }),

  // PATCH request (JSON or FormData)
  patch: (endpoint, data) =>
    apiCall(endpoint, {
      method: 'PATCH',
      body: data instanceof FormData ? data : JSON.stringify(data),
    }),

  // DELETE request
  delete: (endpoint) =>
    apiCall(endpoint, { method: 'DELETE' }),
};

export default api;
