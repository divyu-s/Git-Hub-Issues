import Header from "./components/Header/";
import {useState} from "react";
import IssueTable from './components/IssueTable/';
import './App.css';


const API = "https://api.github.com/repos/${username}/${reponame}/issues";
function App() {
  const [res, setRes] = useState([]);
  const [error,setError] = useState("");
  const [flag,setFlag] = useState(false);
  return (
    <div className="App">
             <Header setRes={setRes} setError={setError} setFlag={setFlag}/>
             <IssueTable res={res} error={error} flag={flag}/>
    </div>
  );
}
export default App;
