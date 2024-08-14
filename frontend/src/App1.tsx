import ListTablesRules from "./components/ListTableRules";
import { useEffect, useState } from "react";


function App1() {

  const [data, setData] = useState<any>({});



  
    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await fetch('http://127.0.0.1:8000',{
            headers: {'Content-Type': 'application/json'}, 
        });
          if (!response.ok) {
            console.log('Error')
            throw new Error("")
          }
          const data = await response.json();
          // console.log(result);
          setData(data);

        } catch (error) {
          console.error('Error' + error)
        }
    };
    fetchData();
  }, []);
   
  return (
    // todo: fix the warning
    <ListTablesRules data={data}></ListTablesRules>
  )
}

export default App1;