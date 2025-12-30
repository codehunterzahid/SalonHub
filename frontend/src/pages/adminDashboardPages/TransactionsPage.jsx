import React, { useState } from "react";
import { adminTransactionsData } from "../../data/index";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState(adminTransactionsData);

  const releasePayment = (id) => {
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.id === id ? { ...txn, status: "completed" } : txn
      )
    );
  };

  return (
    <div className="p-2 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Transactions</h1>
        <p className="text-gray-500">View all platform transactions</p>
      </div>

      <div className="space-y-4">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-center"
          >
            <div className="space-y-1">
              <div className="flex gap-2">
                {/* Type Badge */}
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    txn.type === "COMMISSION"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {txn.type}
                </span>

                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    txn.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {txn.status}
                </span>
              </div>

              <p className="font-semibold text-black">{txn.salon}</p>
              <p className="text-sm text-gray-500">{txn.date}</p>
            </div>

            <div className="text-right space-y-2">
              <p className="text-xl font-bold text-green-600">
                ${txn.amount}
              </p>

              {(txn.type === "COMMISSION" || txn.type === "REFUND") &&
                txn.status === "pending" && (
                  <button
                    onClick={() => releasePayment(txn.id)}
                    className="bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-purple-700"
                  >
                    Release Payment
                  </button>
                )}

              {txn.status === "completed" && (
                <p className="text-sm text-green-600 font-medium">
                  Payment Released
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsPage;
