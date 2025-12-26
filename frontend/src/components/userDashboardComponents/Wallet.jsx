import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  RotateCcw,
  ArrowDownToLine,
  Plus,
  Clock,
} from "lucide-react";
import AddFundsModal from "../modals/userDashboardModals/AddFundsModal";

const Wallet = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(150);

  const [transactions, setTransactions] = useState([
    { id: 1, type: "Added", amount: 100, date: "12 Aug 2025" },
    { id: 2, type: "Spent", amount: -40, date: "10 Aug 2025" },
    { id: 3, type: "Received", amount: 60, date: "05 Aug 2025" },
  ]);

  const handleAddFunds = (value) => {
    if (!value) return;

    setBalance((prev) => prev + value);

    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "Added",
        amount: value,
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      },
      ...prev,
    ]);

    setAmount("");
    setShowModal(false);
  };

  return (
    <div className="p-6 space-y-6 px-16">
      
      <div>
        <h1 className="text-2xl font-bold text-black">Wallet</h1>
        <p className="text-gray-500">Manage your funds</p>
      </div>

      <div className="rounded-2xl p-6 text-white bg-linear-to-r from-purple-600 via-pink-500 to-indigo-500">
        <p className="text-sm">Available Balance</p>
        <h2 className="text-3xl font-bold mt-2">${balance}</h2>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 py-3 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center gap-2"
          >
            <Plus size={18} /> Add Funds
          </button>

          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex-1 py-3 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center gap-2"
          >
            <Clock size={18} /> History
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow">
          <div className="p-3 rounded-lg bg-green-100 text-green-600">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">This Month</p>
            <p className="text-lg font-bold text-black">-$230</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow">
          <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Spent</p>
            <p className="text-lg font-bold text-black">$1,450</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow">
          <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
            <RotateCcw size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="text-lg font-bold text-black">24</p>
          </div>
        </div>
      </div>

      {showHistory && (
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-5 text-black">Recent Transactions</h3>

          <div className="space-y-4">
            {transactions.map((t) => (
              <div
                key={t.id}
                className="flex justify-between items-center bg-[#faf7ff] px-5 py-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      t.amount > 0
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {t.amount > 0 ? (
                      <TrendingUp size={18} />
                    ) : (
                      <ArrowDownToLine size={18} />
                    )}
                  </div>

                  <div>
                    <p className="font-medium text-black">{t.type}</p>
                    <p className="text-sm text-gray-500">{t.date}</p>
                  </div>
                </div>

                <p
                  className={`font-semibold ${
                    t.amount > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {t.amount > 0 ? "+" : "-"}${Math.abs(t.amount)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <AddFundsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        amount={amount}
        setAmount={setAmount}
        onAddFunds={handleAddFunds}
      />
    </div>
  );
};

export default Wallet;
