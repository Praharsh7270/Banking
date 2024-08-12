// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";


const AccountUser = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    
    const fetchAccounts = async () => {
      try {
        const res = await fetch("/api/account/seeAccount");
        const data = await res.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);
  const handleDelete = async (accountNumber) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      try {
        const res = await fetch(`/api/account/deleteAccount`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ AccountNumber: accountNumber }),
        });
        if (res.status === 200) {
          alert("Account deleted successfully!");
          setAccounts(accounts.filter((account) => account.AccountNumber !== accountNumber));
        } else {
          alert("Failed to delete account.");
        }
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    }
  };
  

  const handleUpdate = async (accountNumber) => {
    const newBalance = prompt("Enter the new balance:");
  
    if (!newBalance) {
      return; 
    }
  
    const balance = parseFloat(newBalance);
  
    if (isNaN(balance)) {
      alert("Please enter a valid number.");
      return;
    }
  
    try {
      const res = await fetch(`/api/account/updateAccount`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ AccountNumber: accountNumber, newBalance: balance }),
      });
    
      if (res.ok) {
        console.log('Update successful!');
        alert("Balance updated successfully!");
      } else {
        const errorData = await res.json();
        console.error('Update failed:', errorData);
        alert(`Failed to update balance: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };
  
  

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto ">
        <h1 className="text-2xl font-bold dark:text-white mb-4 text-center">
          Bank Accounts List
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Account Number</th>
                <th scope="col" className="px-6 py-3">Holder Name</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Branch Name</th>
                <th scope="col" className="px-6 py-3">IFSC Code</th>
                <th scope="col" className="px-6 py-3">Balance</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr
                  key={account._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{account.AccountNumber}</td>
                  <td className="px-6 py-4">{account.AccountHolderName}</td>
                  <td className="px-6 py-4">{account.AccountType}</td>
                  <td className="px-6 py-4">{account.BranchName}</td>
                  <td className="px-6 py-4">{account.IfscCode}</td>
                  <td className="px-6 py-4">{account.balance}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={() => handleUpdate(account.AccountNumber)}
                    >
                      Update
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={() => handleDelete(account.AccountNumber)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountUser;
