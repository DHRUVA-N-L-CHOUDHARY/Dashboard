import "./App.css";
import Sidebar from "./components/sidebar";
import UserTable from "./components/usertable";
import ConfirmationalModal from "./components/confirmationalmodal"
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="self-center ml-16 gap-10 flex flex-col">
      <div><Navbar/> </div>
      <UserTable />
      </div>
      {/* <ConfirmationalModal/> */}
    </div>
  );
}

export default App;
