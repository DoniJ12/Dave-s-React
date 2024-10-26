import PlanList from "./PlanList";

const Content = ({plan, handleCheck, handleDelete}) => {
  return (
    <main>
      {plan.length ? (
       <PlanList 
          plan = {plan}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
      ) : (
        <p style={{marginTop: '2rem', fontSize: '2rem'}}>Your List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
