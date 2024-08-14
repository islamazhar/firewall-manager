// import Message  from "./Message"
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

// import { useEffect, useState } from "react";
// import { ReactDOM } from "react";
// import AddPost from "./components/AddPost";
// import Post from "./components/Post";



function App() {
  // return <div><Message /></div>;
  let items = [
    'New York',
    'San Franciso',
    'Tokyo',
    'London',
    'Paris'
  ];
  const handleSelectItem = (item: String) => {console.log(item); }
  // const defaultValue  = true 
  // const [showTextVisibile, setShowTextVisibility] = useState(false);
  const showTextVisibile = true  
  const [showText, setShowText] = useState('Dummy text')
  
  // const handleButtonClick = () => {console.log("Button clicked!");}
  // const handleButtonClick = () => {setShowTextVisibility(!showTextVisibile)};

  const [data, setData] = useState<any>(null);



  const handleGetButton = async () => {
    
    // setShowTextVisibility(!showTextVisibile);
    console.log('clicked handlePostButton');
    // event.preventDefault();
    
    try{
      const response = await fetch('http://127.0.0.1:8000',{
        headers: {'Content-Type': 'application/json'}, 
    });
      if (!response.ok) {
        console.log('Error')
        throw new Error("")
      }
      const result = await response.json();
      // setData(result)
      console.log(result);
      // setShowText(result['rules']);
      let rules = "";
      for(var k in result){
        rules += k ;
        rules += result[k];
        rules += "<h1>";
      }
      setShowText(rules);

    } catch (error) {
      console.error('Error' + error)
    }
  };

  // const handlePostButton = async () => {
    
  //   // setShowTextVisibility(!showTextVisibile);
  //   console.log('clicked handlePostButton');
  //   // event.preventDefault();
    
  //   const payload = {
  //     title: "Dummy",
  //     body: "Dummy",
  //   };
  //   try{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       headers: {'Content-Type': 'application/json'}, 
  //       method: 'POST',
  //       body: JSON.stringify(payload),
  //     });
  //     if (!response.ok) {
  //       console.log('Error')
  //       throw new Error("")
  //     }
  //     const result = await response.json();
  //     console.log('result' + result)
  //     // setData(result)
  //     console.log(result)
  //   } catch (error) {
  //     console.error('Error' + error)
  //   }
  // };
  

  
  


  return (
  <>
  <div>
    {/* <Alert>
    Hello <span>world</span>
    </Alert> */}
    <Button buttonText="Get rules" 
      onButtonSelect={handleGetButton} 
      showText={showText}
      showTextVisibile={showTextVisibile}
      ></Button>
    {/* <ListGroup items={items} heading={"Cities"} 
    onSelectItem={handleSelectItem}/>   */}
    </div>

  </>
  )
    // this component has its own state
}

// function App() {
//   const [posts, setPosts] = useState([]);

//   // fetching posts from the api
//   const fetchPosts = async () => {
//     const response = await fetch('https://jsonplacholder.typicode.com/posts?_limit=4');
//     const data = await response.json();
//     setPosts(data);
//   }

//   // this is used to keep the post sync
//   useEffect(() => {
//     fetchPosts()
//   }, []);

//   const addPost = async (title, body) => {
//     const response = fetch('https://jsonplacholder.typicode.com/posts', 
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         title : title, 
//         body: body,
//         userId : Math.random().toString(36).slice(2),
//       }), 
//       headers: {
//         'content-type' : 'application/json; charset=UTF-8',
//       },
//     });
//     const data = (await response).json();
//     setPosts((prevPosts) => [data, ...prevPosts])
//   };


//   const deletePost = async (id) => {
//     fetch(`ttps://jsonplacholder.typicode.com/posts/${id}`, {
//       method : 'DELETE',
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         setPosts(
//           posts.filter((post))
//         )
//       }
//     })
//   };


//   return (
//     <main>
//       <h1>Consuming REST API tutorial</h1>
//       <AddPost addPost={addPost} />
//       <section className="posts-container">
//         <h2>Posts</h2>
//         {posts.map((post) =>
//         <Post 
//           id={post.id}
//           title={post.title}
//           body={post.body}
//           onDeleteButtonSelect={deletePost}
//         />
//         )}
//       </section>
//     </main>
//   )
// }

export default App;