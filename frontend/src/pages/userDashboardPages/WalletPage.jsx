import React, { useState } from "react";
import { Plus, TrendingUp, DollarSign, RotateCcw } from "lucide-react";
import WalletLayout from "../../components/common/WalletLayout";
import AddFundsModal from "../../components/modals/userDashboardModals/AddFundsModal";

const UserWalletPage = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(150);

  const [transactions, setTransactions] = useState([]);

  const handleAddFunds = (value) => {
    if (!value) return;
    setBalance((b) => b + value);
    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "Added",
        amount: value,
        date: new Date().toLocaleDateString("en-GB"),
      },
      ...prev,
    ]);
    setShowModal(false);
  };

  return (
    <WalletLayout
      title="Wallet"
      subtitle="Manage your funds"
      balance={balance}
      primaryActionLabel="Add Funds"
      primaryActionIcon={<Plus size={18} />}
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
        <AddFundsModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          amount={amount}
          setAmount={setAmount}
          onAddFunds={handleAddFunds}
        />
      }
    />
  );
};

export default UserWalletPage;
