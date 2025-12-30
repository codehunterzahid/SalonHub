import React, { useState } from "react";
import { adminTransactionsData } from "../../data/index";
import {
  DollarSign,
  TrendingUp,
  Store,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react";

const OverviewPage = () => {
  const [transactions, setTransactions] = useState(adminTransactionsData);

  const [pendingSalon, setPendingSalon] = useState({
    name: "Luxury Spa & Wellness",
    owner: "Sarah Davis",
    status: "pending",
  });

  const handleApprove = () => {
    setPendingSalon({ ...pendingSalon, status: "approved" });
  };

  const handleReject = () => {
    setPendingSalon({ ...pendingSalon, status: "rejected" });
  };

  return (
    <div className="p-2 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
        <p className="text-gray-500">Platform overview and statistics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Revenue */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="bg-green-500 p-3 rounded-lg">
            <DollarSign className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-bold text-black">$50000</p>
          </div>
        </div>

        {/* Commission */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="bg-purple-500 p-3 rounded-lg">
            <TrendingUp className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Commission (10%)</p>
            <p className="text-xl font-bold text-black">$5000</p>
          </div>
        </div>

        {/* Active Salons */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="bg-blue-500 p-3 rounded-lg">
            <Store className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Salons</p>
            <p className="text-xl font-bold text-black">10</p>
          </div>
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="bg-pink-500 p-3 rounded-lg">
            <Calendar className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <p className="text-xl font-bold text-black">345</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-bold text-black mb-4">Recent Transactions</h2>

         <div className="space-y-4">
          {transactions.map((txn) => (
            <div
              key={txn.id}
              className="border border-gray-100 bg-gray-50 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-md font-semibold text-black">{txn.salon}</p>
                <h3 className=" text-gray-600">{txn.date}</h3>
              </div>
              <div className="text-right">
              <p className="font-bold text-green-700">${txn.amount}</p>
              <p className="text-gray-500 text-xs">{txn.status}</p>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-bold text-black mb-4">Pending Approvals</h2>

          <div className="border border-yellow-100 bg-yellow-50 rounded-lg p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-black">{pendingSalon.name}</h3>
              <p className="text-sm text-gray-600">
                Owner: {pendingSalon.owner}
              </p>
            </div>

            {pendingSalon.status === "pending" && (
              <div className="flex gap-3">
                <button
                  onClick={handleApprove}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700"
                >
                  <CheckCircle size={18} />
                  Approve
                </button>

                <button
                  onClick={handleReject}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700"
                >
                  <XCircle size={18} />
                  Reject
                </button>
              </div>
            )}

            {pendingSalon.status === "approved" && (
              <p className="text-green-700 font-medium">Salon Approved</p>
            )}

            {pendingSalon.status === "rejected" && (
              <p className="text-red-700 font-medium">Salon Rejected</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
