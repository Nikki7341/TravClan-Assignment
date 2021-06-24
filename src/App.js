import React,{useState, useEffect} from 'react'
import axios from "axios";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


const App = () => {
  const [data, getData] = useState([]);
  useEffect(() => { 
    const fetchJobs = async () => {

      const response = await axios('/merchants');
      console.log(response.data);
      getData(response.data);
    };
 
    fetchJobs();
  }, []);

  return (
    <>
    <div className="container">
    <div className="row p-5">
    <h1 className="text-center">Trav Clan Assignment</h1>
    </div>
    <Table data={data} />
    </div>   
    </>
  )
}

export default App
