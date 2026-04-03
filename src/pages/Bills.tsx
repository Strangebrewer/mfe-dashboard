import { FC, useRef, useState } from "react";
import BillModal from "../components/bills/BillModal";
import { useGetBills } from "../hooks/billHooks";
import { useBillMonthStore } from "../state/useBillMonth";
import BillRowHeader from "./BillRowHeader";
import BillRow from "./BillRow";

const TRANSACTION_COL_COUNT = 3;

const Bills: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { billMonth, month, year } = useBillMonthStore();
  const cellRefs = useRef<Array<Array<HTMLInputElement | null>>>([]);
  const { data: bills } = useGetBills(billMonth);

  function registerRef(rowIndex: number, colIndex: number, el: HTMLInputElement | null) {
    if (!cellRefs.current[rowIndex]) {
      cellRefs.current[rowIndex] = new Array(TRANSACTION_COL_COUNT).fill(null);
    }
    cellRefs.current[rowIndex][colIndex] = el;
  }

  function focusNextRow(rowIndex: number, colIndex: number) {
    cellRefs.current[rowIndex + 1]?.[colIndex]?.focus();
  }

  return (
    <div>
      <h1>Hey there! I'm the Bills Page!</h1>
      <button onClick={() => setIsOpen(true)}>new Bill!</button>
      <h2>Bills</h2>
      <BillRowHeader />
      {bills?.length ? bills.map((b: any, i: number) => (
        <BillRow
          key={b.id}
          bill={b}
          rowIndex={i}
          month={month}
          year={year}
          registerRef={registerRef}
          onEnter={focusNextRow}
        />
      )) : null}
      <BillModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Bills;
