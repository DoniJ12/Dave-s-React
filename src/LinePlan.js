import { FaTrashAlt } from "react-icons/fa";

const LinePlan = ({ plan, handleCheck, handleDelete }) => {
  return (
    <li className="plan" key={plan.id}>
      <input
        onChange={() => handleCheck(plan.id)}
        type="checkbox"
        checked={plan.done}     
      />
      <label
        style={plan.done ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => {
          handleCheck(plan.id);
        }}
      >
        {plan.plan}
      </label>
      <FaTrashAlt
        onClick={() => {
          handleDelete(plan.id);
        }}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${plan.plan}`}
      />
    </li>
  );
};

export default LinePlan;