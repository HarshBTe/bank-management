import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const UpdateBankInfo = () => {
    const {id} = useParams()
    const [ifsc, setIfsc] = useState()
    const [branchName, setBranchName] = useState()
    const [bankName, setBankName] = useState()
    const [accountNumber, setAccountNumber] = useState()
    const [accountHolderName, setAccountHolderName] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3002/getAccount/' + id )
        .then(result => {
            setIfsc(result.data.ifsc)
            setBranchName(result.data.branchName)
            setBankName(result.data.bankName)
            setAccountNumber(result.data.accountNumber)
            setAccountHolderName(result.data.accountHolderName)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3002/updateAccount/" + id, {ifsc, branchName, bankName, accountNumber, accountHolderName})
        .then(result => {
          console.log(result)
          navigate('/')
      })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Account</h2>

                    <div className="mb-2">
                       <label htmlFor="">IFSC</label>
                       <input type="text" placeholder="Enter IFSC" className="form-control"
                             value={ifsc} onChange={(e) => setIfsc(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Branch Name</label>
                       <input type="text" placeholder="Enter Branch Name" className="form-control"
                           value={branchName} onChange={(e) => setBranchName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Bank Name</label>
                       <input type="text" placeholder="Enter Bank Name" className="form-control"
                           value={bankName} onChange={(e) => setBankName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Account Number</label>
                       <input type="text" placeholder="Enter Account Number" className="form-control"
                           value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Account Holder</label>
                       <input type="text" placeholder="Enter Account Holder" className="form-control"
                          value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />
                    </div>

                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBankInfo