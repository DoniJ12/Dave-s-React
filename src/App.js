import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const names = ["Chaltu", "Abebe", "Kebede"];
  const ran = Math.floor(Math.random() * 3);
  const name = names[ran];
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
    <div className="App">
      <Header title='Plan for the Week' />
      <Content 
        plan = {plan}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
      <Footer length = {plan.length}/>
    </div>
  );
}

export default App;
