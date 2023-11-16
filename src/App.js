import "./App.css";
import Sidebar from "./components/sidebar";
import UserTable from "./components/usertable";
import ConfirmationalModal from "./components/confirmationalmodal"
function App() {
  return (
    <div className="flex w-screen h-screen">
      {/* <Sidebar />
      <div className="self-center ml-16 mt-40 w-[1000px] h-4/6"><UserTable /></div> */}
      <ConfirmationalModal/>
    </div>
  );
}

export default App;
