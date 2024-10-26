import LinePlan from "./LinePlan"

const PlanList = ({ plan, handleCheck, handleDelete }) => {
  return (
    <ul>
    {plan.map((plan) => (
      <LinePlan 
        key={plan.id}
        plan={plan}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
  )
}

export default PlanList