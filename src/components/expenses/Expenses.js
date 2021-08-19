import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
