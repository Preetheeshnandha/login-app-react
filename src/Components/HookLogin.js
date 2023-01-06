import React, { useState } from 'react'
import './LoginStyle.css'

function HookLogin() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password1: '',
    })

    const [submit, setSubmit] = useState(false)
    const [valid, setValid] = useState(false)
    



    const handleUsername = e => {
        setValues({ ...values, username: e.target.value })
    }

    const handleEmail = e => {
        setValues({ ...values, email: e.target.value })
    }

    const handlePassword = e => {
        setValues({ ...values, password: e.target.value })
    }

    const handlePassword1 = e => {
        setValues({ ...values, password1: e.target.value })
    }

    const checkVaule = (event) => {
        event.preventDefault();
        console.log("click")
        setSubmit(true)
        if(values.username && values.email && values.password && values.password1 && !passwordValid()){
            setValid(true)
        }
    }

    const passwordValid = () => {
        if(values.password !== values.password1){
            return true
        }
    }

    


    return (

        

        <div className="container">



            <h2 className="header text-center fw-bold fs-3 py-3">Create account</h2>

            <form action="" method="" onSubmit={checkVaule}>

                <div className="form-floating mb-4">

                    <input
                        type="text"
                        value={values.username}
                        onChange={handleUsername}
                        className="form-control" placeholder="name@example.com" />
                    <label>Username</label>
                    { submit && !values.username ? <span className='text-danger'>Please enter username</span> : null }
                </div>


                <div className="form-floating mb-4">
                    <input
                        type="email"
                        value={values.email}
                        onChange={handleEmail}
                        className="form-control" placeholder="name@example.com" />
                    <label >Email address</label>
                    { submit && !values.email ? <span className='text-danger'>Please enter valid email ID</span> : null }

                </div>



                <div className="form-floating mb-4">
                    <input
                        type="password"
                        value={values.password}
                        onChange={handlePassword}
                        className="form-control" placeholder="name@example.com" />
                    <label >Password</label>
                    { submit && !values.password ?<span className='text-danger'>Please enter password</span> : null }

                </div>


                <div className="form-floating mb-4">
                    <input
                        type="password"
                        value={values.password1}
                        onChange={handlePassword1}
                        className="form-control" placeholder="name@example.com" />
                    <label >Confirm Password</label>
                    { submit && passwordValid() ?<span className='text-danger'>Password should be same</span> : null }
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-outline-primary mb-4" name="button">Sumit</button>
                    { submit &&  valid ? <span className='text-success'>Submitted Successfully</span> : null }
                </div>

            </form>


        </div>
    )
}

export default HookLogin
