import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [plan, setPlan] = useState([
    {
      id: 1,
      done: false,
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

  return (
    <main>
      <ul>
        {plan.map((plan) => (
          <li className="plan" key={plan.id}>
            <input type="checkbox" checked={plan.done} />
            <label>{plan.plan}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
