import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  const names = ["Chaltu", "Abebe", "Kebede"];
  const ran = Math.floor(Math.random() * 3);
  const name = names[ran];
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
