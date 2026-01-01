import React, { useState } from "react";
import { TrendingUp, DollarSign, RotateCcw, ArrowDownToLine } from "lucide-react";
import WalletLayout from "../../components/common/WalletLayout";
import WithdrawFundsModal from "../../components/modals/adminDashboardModals/WithdrawFundsModal";

const AdminWalletPage = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(150);

  const [transactions, setTransactions] = useState([]);

  const handleWithdrawFunds = (value) => {
    if (!value) return;
    if (value > balance) return alert("Insufficient balance");

    setBalance((prev) => prev - value);
    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "Withdraw",
        amount: -value,
        date: new Date().toLocaleDateString("en-GB"),
      },
      ...prev,
    ]);
    setShowModal(false);
  };

  return (
    <WalletLayout
      title="Platform Wallet"
      subtitle="Manage platform commission earnings"
      balance={balance}
      primaryActionLabel="Withdraw"
      primaryActionIcon={<ArrowDownToLine size={18} />}
      onPrimaryAction={() => setShowModal(true)}
      showHistory={showHistory}
      toggleHistory={() => setShowHistory(!showHistory)}
      transactions={transactions}
      stats={[
        {
          label: "This Month",
          value: "-$230",
          icon: <TrendingUp size={20} />,
          bg: "bg-green-100",
          color: "text-green-600",
        },
        {
          label: "Total Spent",
          value: "$1,450",
          icon: <DollarSign size={20} />,
          bg: "bg-purple-100",
          color: "text-purple-600",
        },
        {
          label: "Transactions",
          value: transactions.length,
          icon: <RotateCcw size={20} />,
          bg: "bg-blue-100",
          color: "text-blue-600",
        },
      ]}
      modal={
        <WithdrawFundsModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          amount={amount}
          setAmount={setAmount}
          onWithdrawFunds={handleWithdrawFunds}
        />
      }
    />
  );
};

export default AdminWalletPage;
