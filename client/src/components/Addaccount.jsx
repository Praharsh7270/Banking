/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Addaccount = () => {
  const navigate = useNavigate();

  const AccounSubmit = async (e) => {
    e.preventDefault();
    const AccountNumber = document.getElementById("accountNumber").value;
    const AccountHolderName = document.getElementById("accountHolderName").value;
    const AccountType = document.getElementById("accountType").value;
    const BranchName = document.getElementById("branchName").value;
    const IfscCode = document.getElementById("ifscCode").value;
    const balance = document.getElementById("balance").value;
    
    const data = {
      AccountNumber,
      AccountHolderName,
      AccountType,
      BranchName,
      IfscCode,
      balance,
    };
    
    try {
      const res = await fetch("/api/account/addAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (res.status === 201) {
        alert("Account Added Successfully");
        navigate("/");
      } else {
        const response = await res.json();
        alert(`Failed to add account: ${response.message}`);
      }
    } catch (error) {
      console.log(error.message);
      alert("Failed to add account");
      navigate("/dashboard?tab=profile");
    }
  };
  

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Add a New Bank Account
          </h1>
        </div>
        <div>
          <form className="space-y-6" onSubmit={AccounSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="accountNumber"
              >
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="accountHolderName"
              >
                Account Holder Name
              </label>
              <input
                type="text"
                name="accountHolderName"
                id="accountHolderName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="accountType"
              >
                Account Type
              </label>
              <input
                type="text"
                name="accountType"
                id="accountType"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="branchName"
              >
                Branch Name
              </label>
              <input
                type="text"
                name="branchName"
                id="branchName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="ifscCode"
              >
                IFSC Code
              </label>
              <input
                type="text"
                name="ifscCode"
                id="ifscCode"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="balance"
              >
                Balance
              </label>
              <input
                type="text"
                name="balance"
                id="balance"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addaccount;
