import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateBankInfo = () => {
    const [ifsc, setIfsc] = useState()
    const [branchName, setBranchName] = useState()
    const [bankName, setBankName] = useState()
    const [accountNumber, setAccountNumber] = useState()
    const [accountHolderName, setAccountHolderName] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:3002/createAccount", {ifsc, branchName, bankName, accountNumber, accountHolderName})
          .then(result => {
            console.log(result)
            alert("Account Created Successfully!")
            navigate('/')
        })
          .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Account</h2>

                    <div className="mb-2">
                       <label htmlFor="">IFSC</label>
                       <input type="text" placeholder="Enter IFSC" className="form-control"
                              onChange={(e) => setIfsc(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Branch Name</label>
                       <input type="text" placeholder="Enter Branch Name" className="form-control"
                           onChange={(e) => setBranchName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Bank Name</label>
                       <input type="text" placeholder="Enter Bank Name" className="form-control"
                           onChange={(e) => setBankName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Account Number</label>
                       <input type="text" placeholder="Enter Account Number" className="form-control"
                           onChange={(e) => setAccountNumber(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Account Holder</label>
                       <input type="text" placeholder="Enter Account Holder" className="form-control"
                           onChange={(e) => setAccountHolderName(e.target.value)} />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBankInfo
