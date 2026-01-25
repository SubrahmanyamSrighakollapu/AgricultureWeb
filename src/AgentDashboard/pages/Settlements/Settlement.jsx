import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import lookupService from '../../../services/lookupService';

const Settlement = () => {
  const [accountTypes, setAccountTypes] = useState([]);
  const [bankNames, setBankNames] = useState([]);
  const [formData, setFormData] = useState({
    accountType: '',
    bankAccountNo: '',
    contactNo: '',
    bankName: '',
    ifscCode: '',
    accountHolderName: '',
    bankitFee: '',
    totalSettlementBalance: '',
    amount: '',
    transactionPin: '',
    transferMode: 'Instant',
    securePlusAssurance: false,
    agreeTerms: false
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
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    try {
      // Simulate API call
      console.log('Processing settlement with data:', formData);
      toast.success('Settlement processed successfully!');
      
      // Reset form
      setFormData({
        accountType: '',
        bankAccountNo: '',
        contactNo: '',
        bankName: '',
        ifscCode: '',
        accountHolderName: '',
        bankitFee: '',
        totalSettlementBalance: '',
        amount: '',
        transactionPin: '',
        transferMode: 'Instant',
        securePlusAssurance: false,
        agreeTerms: false
      });
    } catch (error) {
      console.error('Error processing settlement:', error);
      toast.error('Failed to process settlement');
    }
  };

  const handleCancel = () => {
    setFormData({
      accountType: '',
      bankAccountNo: '',
      contactNo: '',
      bankName: '',
      ifscCode: '',
      accountHolderName: '',
      bankitFee: '',
      totalSettlementBalance: '',
      amount: '',
      transactionPin: '',
      transferMode: 'Instant',
      securePlusAssurance: false,
      agreeTerms: false
    });
    toast.info('Form cancelled');
  };
  return (
    <div className="card shadow-sm p-4 rounded-3">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Settlement Account Type</label>
            <select 
              className="form-select"
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
          <div className="col-md-6">
            <label className="form-label">Bank A/C No.</label>
            <input 
              className="form-control"
              name="bankAccountNo"
              value={formData.bankAccountNo}
              onChange={handleInputChange}
              placeholder="Enter bank account number"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Contact No.</label>
            <input 
              className="form-control"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Bank Name</label>
            <select 
              className="form-select"
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
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">IFSC Code</label>
            <input 
              className="form-control"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              placeholder="Enter IFSC code"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">A/C Holder Name</label>
            <input 
              className="form-control"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              placeholder="Enter account holder name"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">
              Bankit Fee <span className="text-danger">*</span>
            </label>
            <input 
              className="form-control"
              name="bankitFee"
              value={formData.bankitFee}
              onChange={handleInputChange}
              placeholder="Enter bankit fee"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Total Settlement Balance</label>
            <input 
              className="form-control"
              name="totalSettlementBalance"
              value={formData.totalSettlementBalance}
              onChange={handleInputChange}
              placeholder="Enter total settlement balance"
            />
          </div>
        </div>

        <div className="mb-1">
          <label className="form-label">
            Amount <span className="text-danger">*</span>
          </label>
          <input 
            className="form-control w-100"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
            required
          />
        </div>

        <p className="text-danger small mb-4">
          You can not make any settlement exceeding your Total Settlement Balance /
          Allowed Settlement Limit / Wallet Balance
        </p>

        <div className="row align-items-start mb-4">
          <div className="col-md-6">
            <label className="form-label">
              Transaction Pin <span className="text-danger">*</span>
            </label>
            <input 
              type="password" 
              className="form-control"
              name="transactionPin"
              value={formData.transactionPin}
              onChange={handleInputChange}
              placeholder="Enter transaction pin"
              required
            />
            <div className="text-center mt-1">
              <small className="text-muted">Change Transaction Pin</small>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Transfer Mode <span className="text-danger">*</span>
            </label>
            <select 
              className="form-select"
              name="transferMode"
              value={formData.transferMode}
              onChange={handleInputChange}
              required
            >
              <option value="Instant">Instant</option>
            </select>
          </div>
        </div>

        <div className="form-check mb-2">
          <input 
            className="form-check-input" 
            type="checkbox"
            name="securePlusAssurance"
            checked={formData.securePlusAssurance}
            onChange={handleInputChange}
          />
          <label className="form-check-label text-danger small">
            Rs. 0 will be charged for opting SecurePlus assurance plan on this transaction
          </label>
        </div>

        <div className="form-check mb-4">
          <input 
            className="form-check-input" 
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            required
          />
          <label className="form-check-label small">
            I hereby agree to the terms & Conditions of this settlement transaction.
          </label>
        </div>

        <div className="d-flex justify-content-between px-5">
          <button type="button" style={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>

          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  cancelBtn: {
    width: "148px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #57B846",
    backgroundColor: "#57B846",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "500",
  },
  submitBtn: {
    width: "148px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #7A7A7A",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default Settlement;