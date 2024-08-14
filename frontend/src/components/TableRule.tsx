import  {useState, useEffect, useRef } from "react";

interface Props {
    header: string;
    values: string [];
}

function TableRule({header, values}: Props) {

    const tableRef = useRef(null); // Reference to the table element

    const isAlphaNumeric = (ch: any) => {
        // todo: make it this function more elegent.
        if (ch == '.')
            return true 
        if (ch == '-') 
            return true 
        return ch.match(/^[a-z0-9]+$/i) !== null;
    }

    useEffect(() => {
        const handleClick = (event: any) => {
            if (tableRef.current && !tableRef.current.contains(event.target)) {
                setSelectedIndex(-1); // Deselect the row if clicked outside the table
              }
        };

        document.addEventListener('click', handleClick);
    }, [])
    

    

    const lineParser = (line: string) => {


        let cur = ''
        let words = []
        for (let i=0;i<line.length;i++){
            if (isAlphaNumeric(line[i]) == true)
                cur += line[i]
            else{
                if (cur.length > 0) {
                    words.push(cur);
                }
                cur = '';
            }
        }
        return words;
    }

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleDeleteRule = (index : any) => {
        console.log('Delete the rule', values[index + 1]);
    }

    const handleEditRule = (index : any) => {
        console.log('Edit the rule', values[index + 1]);
    }
    

    return (
        // todo fix the return object a bit more elegent.
        <div>
        <h3>{header}</h3>
        {values.length < 2 && <p>No Rules for this chain</p> }
        {values.length >= 2 && 
        <table ref={tableRef} className="table">
            <thead>
            <tr>
                {lineParser(values[0]).map((items) =>(
                    <th scope="col">{items}</th>
                ))}
                <th></th>
            </tr>

            </thead>
            <tbody>
                {values.slice(1).map((items, index) => (
                    <tr
                    className={selectedIndex === index? "table-active": "table-light"}
                    onClick={()=>{
                        setSelectedIndex(index);
                    }} 
                    >
                    {lineParser(items).map( (items_ele) => (
                            <td>{items_ele}</td>
                    ))}
                    </tr>
                ))}
            </tbody>
        </table>
        }
        { 
        <button className="btn btn-info" onClick={() => {
            handleDeleteRule(selectedIndex);
        }}
        >Add Rule</button>
        }

        {values.length >=2 && 
        <button className="btn btn-warning" onClick={() => {
            handleDeleteRule(selectedIndex);
        }}
        disabled = {selectedIndex === -1}
        >Delete</button>
        }

        {values.length >=2 && 
        <button className="btn btn-danger" onClick={() => {
            handleEditRule(selectedIndex);
        }}
        disabled = {selectedIndex === -1}
        >Edit</button>
        }
        

        </div>
    )
}

export default TableRule;