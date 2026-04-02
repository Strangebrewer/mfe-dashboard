import { Button } from "@bka-stuff/mfe-utils";
import { FC } from "react";
import { useCreateTransaction } from "../hooks/transactionHooks";
import { usePayBill } from "../hooks/billHooks";

const Dashboard: FC = () => {
  const { mutate: payBill } = usePayBill();

  function newTransaction() {
    console.log(`whatever the fuck`);
    payBill({
      billId: '69c63136777be6d526fe3e55',
      amount: 325000,
      billMonth: '2026-04',
      date: '04-01-2026',
      description: 'this is great',
    });
  }

  return (
    <div>
      <h1>Hey there! I'm the Dashboard!</h1>
      <Button text="new txn" variant="purple" onClick={newTransaction} />
    </div>
  );
};

export default Dashboard;
