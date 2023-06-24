import Header from "./components/Header/Header";
import Feed from "./components/feed/Feed.component";
import Login from "./components/login/Login.component";
import RightSidebar from "./components/right-side-bar/RightSidebar.component";
import Sidebar from "./components/sidebar/Sidebar.component";
import { useStateValue } from "./components/state/StateProvider";

const App=()=> {
  const [{ user }] = useStateValue();
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
