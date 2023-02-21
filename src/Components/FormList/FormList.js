import React from 'react'

function FormList({submit , change , value }) {

  return (
    <form className="form" onSubmit={submit}>
        <div className="mb-3">
            <input className="form-inp" onChange={change} value={value.name} type="text" name="name" placeholder="Your name" />
        </div>
        <div className="mb-3">
            <input className="form-inp" onChange={change} value={value.age}  type="number" name="age" placeholder="Your age" />
        </div>
        <div className="mb-3">
            <input className="form-inp" onChange={change} value={value.email}  type="email" name="email" placeholder="Your email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormList