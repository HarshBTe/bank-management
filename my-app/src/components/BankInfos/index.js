
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/h')
        .then(result => setTasks(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3002/deleteBank/' + id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/createAccount" className="btn btn-success">Add +</Link>
                <table className="table">
                      <thead>
                        <tr>
                            <th>IFSC</th>
                            <th>BranchName</th>
                            <th>BankName</th>
                            <th>AccountNumber</th>
                            <th>AccountHolderName</th>
                        </tr>
                      </thead>
                      <tbody>
                         {
                            tasks.map((task) => {
                             return   <tr>
                                    <td>{task.ifsc}</td>
                                    <td>{task.branchName}</td>
                                    <td>{task.bankName}</td>
                                    <td>{task.accountNumber}</td>
                                    <td>{task.accountHolderName}</td>
                                    <td>
                                    <Link to={`/update/${task._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={(e) => handleDelete(task._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                         }
                      </tbody>
                </table>
               
            </div>
        
        </div>
    )
}

export default Tasks