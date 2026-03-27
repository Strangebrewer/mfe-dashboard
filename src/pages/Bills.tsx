import { FC, useState } from "react";
import BillModal from "../components/bills/BillModal";
import { useGetBills } from "../hooks/billHooks";

const Bills: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: bills } = useGetBills();

  return (
    <div>
      <h1>Hey there! I'm the Bills Page!</h1>
      <button onClick={() => setIsOpen(true)}>new Bill!</button>
      <h2>Bills</h2>
      {bills?.length ? bills.map((b: any) => {
        console.log('bill:::', b);
        return (
          <div key={b.id}>
            <p>name: {b.name}</p>
            <p>due date: {b.dueDay}</p>
          </div>
        )
      }) : null}
      <BillModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Bills;
