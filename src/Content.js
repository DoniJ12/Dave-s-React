import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [plan, setPlan] = useState([
    {
      id: 1,
      done: true,
      plan: "Tuto",
    },
    {
      id: 2,
      done: false,
      plan: "Project",
    },
    {
      id: 3,
      done: false,
      plan: "Game",
    },
    {
      id: 4,
      done: false,
      plan: "Report",
    },
  ]);
  const handleCheck = (id) => {
    const listPlans = plan.map((plan) => plan.id === id ? {...plan, done: !plan.done} : plan);
    setPlan(listPlans)
    localStorage.setItem('Week Plan', JSON.stringify(listPlans));
  };

  const handleDelete = (id) => {
    const listPlans = plan.filter((plan) => plan.id !== id);
    setPlan(listPlans)
    localStorage.setItem('Week Plan', JSON.stringify(listPlans));
  }

  return (
    <main>
      {plan.length ? (
        <ul>
          {plan.map((plan) => (
            <li className="plan" key={plan.id}>
              <input 
                onChange={() => handleCheck(plan.id)}
                type="checkbox" 
                checked={plan.done} />
              <label style={(plan.done) ? {textDecoration:'line-through'} : null} onDoubleClick={() => {handleCheck(plan.id)}}>{plan.plan}</label>
              <FaTrashAlt onClick={() => {handleDelete(plan.id)}} role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{marginTop: '2rem', fontSize: '2rem'}}>Your List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
