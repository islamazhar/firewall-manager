// import { Fragment } from "react/jsx-runtime";

import { MouseEvent, useState } from "react";

// items [], heading: string
interface Props {
    items: string [];
    heading: string ;
    onSelectItem: (item: string ) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // return <h1>ListGroup</h1>;
    // return (
    //     // <h1>List</h1> can not write this since React does not allow returning multiple elements. 
    //     // e.g., this will evetually compiled down to React.createElement('h1')
    //     <ul className="list-group">
    //     <li className="list-group-item"> An item </li>
    //     <li className="list-group-item"> An second item </li>
    // </ul>
    // );


    // the following code uses an additional div element to make sure this function 
    // returns only one element and to make react happy. A better way is to use Fragment.
    // return (
    //     <div>
    //     <h1>List</h1>
    //     <ul className="list-group">
    //     <li className="list-group-item"> An item </li>
    //     <li className="list-group-item"> An second item </li>
    //     </ul>
    // </div>
    // );

    // return (
    //     <Fragment>
    //     <h1>List</h1>
    //     <ul className="list-group">
    //     <li className="list-group-item"> An item </li>
    //     <li className="list-group-item"> An second item </li>
    //     </ul>
    // </Fragment>
    // );
    // <> is basically asking react to create an empty fragment. 

    //     return (
    //     <>
    //     <h1>List</h1>
    //     <ul className="list-group">
    //     <li className="list-group-item"> An item </li>
    //     <li className="list-group-item"> An second item </li>
    //     </ul>
    //     </>
    // );


    // let selectedIndex = 0;
    // Hook 
    // const arr = useState(-1)
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater function 

    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const [name, setName] = useState('')

    // JSX does not have for loop
    
    // items = [];
    // const message = items.length == 0 ? <p> No item Found </p>: null
    // const getMessage = () => {
    //    return items.length === 0 ? <p> No item Found </p>: null
    // }
    // Event handler 
    // const handleClick = 
    //     (event : MouseEvent, item : Object, index: Object) => 
    //         console.log('clicked', item, index, event)

    

    return (
        <>
        <h1>{heading}</h1>
        {items.length == 0 && <p>No item found</p>}
        <ul className="list-group">
        {items.map((item, index) =>(
                <li className = {selectedIndex === index
                ? "list-group-item active"    
                : "list-group-item"
                }
                key={item}
                // onClick={(event) => handleClick(event, item, index)}
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                }}
                >{item}
                </li>
        ))}
        </ul>
        </>
    )

}

export default ListGroup;