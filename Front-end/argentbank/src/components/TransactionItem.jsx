import { formatCurrency } from '../utils/formatCurrency';
import PrimaryButton from './PrimaryButton';

const TransactionItem = ({ operation, argent, balance }) => {
  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-8">
      <div className="flex w-[80%] flex-col gap-3 bg-white p-[1.5rem] sm:flex-row sm:items-center sm:justify-between ">
        <div>
          <h3 className="text-base">{operation}</h3>
          <p className=" text-[2.5rem] font-bold leading-[3.2rem] ">
            {formatCurrency(argent)}
          </p>
          <p className="font-light">{balance}</p>
        </div>
        <div>
          <PrimaryButton
            label="View transactions"
            buttonStyle="borderSecondary"
            className={'w-full'}
          />
        </div>
      </div>
    </section>
  );
};

export default TransactionItem;
