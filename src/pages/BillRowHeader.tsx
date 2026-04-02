import { useBillMonthStore } from "../state/useBillMonth";
import { format } from 'date-fns';

const BillRowHeader = () => {
  const { month, year } = useBillMonthStore();

  function getDisplayMonth(ago?: 1 | 2) {
    let displayMonth = month - 1;
    if (ago === 1) {
      if (month === 1) displayMonth = 12;
      else displayMonth -= ago;
    }
    if (ago === 2) {
      if (month === 1) displayMonth = 11;
      else displayMonth -= ago;
    }
    const date = new Date(year, displayMonth);
    const formattedMonth = format(date, 'MMM')
    return formattedMonth;
  }

  return (
    <div className="tw:w-[850px] tw:flex">
      <div className="tw:w-[300px]">Name</div>
      <div className="tw:w-[80px] tw:text-center">{getDisplayMonth(2)}</div>
      <div className="tw:w-[80px] tw:text-center">{getDisplayMonth(1)}</div>
      <div className="tw:w-[80px] tw:text-center">{getDisplayMonth()}</div>
    </div>
  );
};

export default BillRowHeader;
