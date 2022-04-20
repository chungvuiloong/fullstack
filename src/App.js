import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";
import DeleteUser from "./Components/DeleteUser";
import Meow from "./Components/Meow";

function App() {
  return (
    <div className="App">
     <h5>Hello FullstackApp(React + PHP + MYSQL)</h5>
     <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create Users</Link>
          </li>
          <li>
            <Link to="user/meow">Meow</Link>
          </li> 
          <li>
            <Link to="user/delete">Delete</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={          <ListUser/>        }/>
        <Route path="user/create" element={          <CreateUser/>        }/>
        <Route path="user/meow" element={          <Meow/>        }/>
        <Route path="user/delete" element={          <DeleteUser/>        }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
