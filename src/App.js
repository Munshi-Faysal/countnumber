
import Conditional_Rendering from "./Components/Conditional_Rendering/Index";
import EventBinding from "./Components/Event_Binding/Index";
import Event_Handler from "./Components/Event_Handler/Index";
import FormRegister from "./Components/Form/Form";
import HooksUseState from "./Components/Hooks_UseState/index1";
import Child from "./Components/Satet_Lifting/Child";
import Home from "./Components/Satet_Lifting/Home";

function App() {
  const handleChildData =(onChildData)=>{
    //console.log(onChildData)
  }
  return (
    <div className="container" >
      <Conditional_Rendering />
      <Event_Handler />
      <EventBinding />
      {/* <HooksUseState />
      <FormRegister /> */}
      {/* <Child onChildData={handleChildData} /> */}
      < Home />
    </div>
  );
}
export default App;
