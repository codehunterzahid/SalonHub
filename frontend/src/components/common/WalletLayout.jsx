import React from "react";
import {
  TrendingUp,
  DollarSign,
  RotateCcw,
  ArrowDownToLine,
  Clock,
  Plus,
} from "lucide-react";

const WalletLayout = ({
  title,
  subtitle,
  balance,
  primaryActionLabel,
  primaryActionIcon,
  onPrimaryAction,
  showHistory,
  toggleHistory,
  stats,
  transactions,
  note,
  modal,
}) => {
  return (
    <div className="p-6 space-y-6 px-16">
      <div>
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>

      {/* Balance Card */}
      <div className="rounded-2xl p-6 text-white bg-linear-to-r from-purple-600 via-pink-500 to-indigo-500">
        <p className="text-sm">Available Balance</p>
        <h2 className="text-3xl font-bold mt-2">${balance}</h2>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onPrimaryAction}
            className="flex-1 py-3 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center gap-2"
          >
            {primaryActionIcon} {primaryActionLabel}
          </button>

          <button
            onClick={toggleHistory}
            className="flex-1 py-3 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center gap-2"
          >
            <Clock size={18} /> History
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow"
          >
            <div className={`p-3 rounded-lg ${item.bg} ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-bold text-black">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Transactions */}
      {showHistory && (
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-5 text-black">
            Recent Transactions
          </h3>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center bg-[#faf7ff] px-5 py-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      transaction.amount > 0
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {transaction.amount > 0 ? (
                      <TrendingUp size={18} />
                    ) : (
                      <ArrowDownToLine size={18} />
                    )}
                  </div>

                  <div>
                    <p className="font-medium text-black">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>

                <p
                  className={`font-semibold ${
                    transaction.amount > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional Note */}
      {note && (
        <div className="border border-gray-300 rounded-2xl">
          <p className="text-blue-900 p-4 text-sm">{note}</p>
        </div>
      )}

      {/* Modal */}
      {modal}
    </div>
  );
};

export default WalletLayout;
