import React, { useState } from "react";

function CreateArea(props) {

  const [obj , setObj] = useState({
    title : ""  ,
    content : ""
  });

  function handleChange(event){
    const val = (event.target.value);
    const n = event.target.name;

    if(n==="title"){
      setObj((prevVal)=>{
        return (
          {title : val,
          content : prevVal.content
        });
      })}
    

    else if(n==="content"){
      setObj((prevVal)=>{
        return(
        {title : prevVal.title,
        content : val
        });
    })
    }
  }

  function handleClick(event){
    event.preventDefault();
    props.add(obj);
    setObj({
      title:"",
      content:""
    })
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={obj.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={obj.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
