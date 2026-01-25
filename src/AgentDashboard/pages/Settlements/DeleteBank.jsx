import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import lookupService from '../../../services/lookupService';

const DeleteBank = () => {
  const [accountTypes, setAccountTypes] = useState([]);
  const [bankNames, setBankNames] = useState([]);
  const [formData, setFormData] = useState({
    accountType: '',
    bankAccountNo: '',
    bankName: '',
    ifscCode: '',
    accountHolderName: ''
  });

  useEffect(() => {
    fetchAccountTypes();
    fetchBankNames();
  }, []);

  const fetchAccountTypes = async () => {
    try {
      const response = await lookupService.getAccountTypes();
      if (response && response.status === 1 && response.result) {
        setAccountTypes(response.result);
      }
    } catch (error) {
      console.error('Error fetching account types:', error);
    }
  };

  const fetchBankNames = async () => {
    try {
      const response = await lookupService.getBankNames();
      if (response && response.status === 1 && response.result) {
        setBankNames(response.result);
      }
    } catch (error) {
      console.error('Error fetching bank names:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      console.log('Deleting bank with data:', formData);
      toast.success('Bank deleted successfully!');
      
      // Reset form
      setFormData({
        accountType: '',
        bankAccountNo: '',
        bankName: '',
        ifscCode: '',
        accountHolderName: ''
      });
    } catch (error) {
      console.error('Error deleting bank:', error);
      toast.error('Failed to delete bank');
    }
  };

  const handleCancel = () => {
    setFormData({
      accountType: '',
      bankAccountNo: '',
      bankName: '',
      ifscCode: '',
      accountHolderName: ''
    });
    toast.info('Form cancelled');
  };
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="delete-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Settlement Account Type</label>
                <select 
                  className="custom-input custom-select"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Account Type</option>
                  {accountTypes.map((type) => (
                    <option key={type.statusId} value={type.statusId}>
                      {type.statusValue}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Bank A/C No.</label>
                <select 
                  className="custom-input custom-select"
                  name="bankAccountNo"
                  value={formData.bankAccountNo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Account Number</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Bank Name</label>
                <select 
                  className="custom-input custom-select"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Bank Name</option>
                  {bankNames.map((bank) => (
                    <option key={bank.statusId} value={bank.statusId}>
                      {bank.statusValue}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">IFSC Code</label>
                <input 
                  className="custom-input"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  placeholder="Enter IFSC code"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="form-label">A/C Holder Name</label>
                <input 
                  className="custom-input"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  placeholder="Enter account holder name"
                  required
                />
              </div>
              
              <div className="button-row">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delete-card {
          width: 685px;
          padding: 32px;
          border: 1px solid #D98FD9;
          border-radius: 8px;
          background: #ffffff;
        }

        .custom-input {
          width: 590px;
          height: 50px;
          border: 1px solid #D98FD9;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
        }

        .custom-input:focus {
          border-color: #C94AC9;
        }

        .custom-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 14px;
          padding-right: 40px;
        }

        .button-row {
          width: 590px;
          display: flex;
          justify-content: space-between;
          margin: 20px auto 0;
        }

        .cancel-btn {
          width: 148px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #7A7A7A;
          background: #ffffff;
          font-weight: 500;
        }

        .submit-btn {
          width: 148px;
          height: 40px;
          border-radius: 8px;
          border: none;
          background: #4BAF47;
          color: #ffffff;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default DeleteBank;