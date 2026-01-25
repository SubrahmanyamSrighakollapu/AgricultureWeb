import api from './api';

// Employee Management API Services
export const employeeService = {
  // Create Employee (Onboard Employee)
  onboardEmployee: async (employeeData) => {
    return await api.post('/employees/onboardEmployee', employeeData);
  },

  // Get All Employees
  getAllEmployees: async () => {
    return await api.get('/employees');
  },

  // Get Employee by ID
  getEmployeeById: async (employeeId) => {
    return await api.get(`/employees/${employeeId}`);
  },

  // Update Employee
  updateEmployee: async (employeeId, employeeData) => {
    return await api.put(`/employees/${employeeId}`, employeeData);
  },

  // Delete Employee
  deleteEmployee: async (employeeId) => {
    return await api.delete(`/employees/${employeeId}`);
  },
};

export default employeeService;