import React from "react";
import { List } from "..";
import { FormList } from "../FormList";

// css
import './Form.css'

function Form() {

  const [ data , setData ] = React.useState([]);
  const [ value , setValue ] = React.useState({name:"" ,  age:"" , email:""});


 const Change = (e) =>{
     setValue((p) => ({...p , [e.target.name]:e.target.value}))
 }

 const Submit = (e) => {
    e.preventDefault();
    setData((p) => [...p , {...value , id:Date.now()}])
    setValue({name:"" ,  age:"" , email:""})
 }

 const deletItem = (id) => {
   setData((p) => p.filter((item) => item.id !== id))
 }

 const editItem = (obj) =>{
   setData((p) => p.map((item) => item.id === obj.id ? obj : item))
 }


  return (
    <>
      <div className="container pt-5">
        <div className="d-flex align-items-top justify-content-between">
          {/* <form className="form" onSubmit={Submit}>
                  <div className="mb-3">
                      <input className="form-inp" onChange={Change} value={value.name} type="text" name="name" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                      <input className="form-inp" onChange={Change} value={value.age}  type="number" name="age" placeholder="Your age" />
                  </div>
                  <div className="mb-3">
                      <input className="form-inp" onChange={Change} value={value.email}  type="email" name="email" placeholder="Your email" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
            <FormList submit = {Submit}  change = {Change} value = {value} />

            <ul className="list">
              {data?.map((el,id) => <List edit = {editItem} del = {deletItem} key={id} {...el} />)}
            </ul>
        </div>
      </div>
    </>
  )
}

export default Form