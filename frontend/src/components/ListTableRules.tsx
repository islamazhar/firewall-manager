import TableRule from "./TableRule";

interface Props {
    data: JSON;
}

function ListTablesRules({data}: Props) {
    // parse JSON string ...

    // Object.keys(json_data).map((key) => [key, json_data[key]]);
    console.log(data)
    return (
        <div className="container">
        {Object.entries(data).map(([key, value]) => (
            <TableRule header={key} values={value}/>
        ))}
        </div>
    )    
}

export default ListTablesRules;