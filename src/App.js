import "./App.css";
import Sidebar from "./components/sidebar";
import UserTable from "./components/usertable";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="self-center ml-16 gap-4 flex flex-col">
      <Navbar/>
      <UserTable />
      </div>
    </div>
  );
}

export default App;
