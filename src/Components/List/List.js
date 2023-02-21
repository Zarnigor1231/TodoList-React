import React from "react";
// css
import './List.css'

function List({id , name , age , email , del , edit}) {
    const [ state , setState ] = React.useState(true)
    const [ value , setValue ] = React.useState({name ,  age , email});

    const Change = (e) =>{
        setValue((p) => ({...p , [e.target.name]:e.target.value}))
    }
   
    const Submit = (e) => {
       e.preventDefault();
    //    setValue((p) => ({...p , [e.target.name]:e.target.value}))
       edit({...value , id})
       setState(true)
    }

  return (
    <>
    {
        state ? 
        ( 
        <li className="shadow p-4 px-5 mb-5 bg-body rounded">
            <h2>{name}</h2>
            <p className="p-0 m-0">{age}</p>
            <p className="p-0 m-0 mb-1">{email}</p>
            <div>
                <button onClick={() => setState(!state)}  className="btn btn-info me-2">Edit</button>
                <button onClick={() => del(id)} className="btn btn-danger">Del</button>
            </div>
        </li>
        )
    :
    (

        // <FormList onSubmit= {Submit} setValue = {setValue}/>
        <form className="form" onSubmit={Submit}>
            <div className="mb-3">
                <input className="form-inp" onChange={Change} value={value.name} type="text" name="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
                <input className="form-inp" onChange={Change} value={value.age}  type="number" name="age" placeholder="Your age" />
            </div>
            <div className="mb-3">
                <input className="form-inp" onChange={Change} value={value.email}  type="email" name="email" placeholder="Your email" />
            </div>
            <button type="submit" className="btn btn-primary">Change</button>
        </form>
    )
    }
    </>
  )
}

export default List