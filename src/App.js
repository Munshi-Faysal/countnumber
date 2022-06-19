
import FormRange from "react-bootstrap/esm/FormRange";
import Conditional_Rendering from "./Components/Conditional_Rendering/Index";
import EventBinding from "./Components/Event_Binding/Index";
import Event_Handler from "./Components/Event_Handler/Index";
import FormRegister from "./Components/Form/Form";
import HooksUseState from "./Components/Hooks_UseState/index1";

function App() {
  return (
    <div className="container" >
      <Conditional_Rendering />
      <Event_Handler />
      <EventBinding />
      <HooksUseState />
      <FormRegister />
    </div>
  );
}
export default App;
