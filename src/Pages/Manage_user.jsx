import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_user() {

    const [data, setData] = useState([]);
    const fetchdata = async () => {
        const res = await axios.get(" http://localhost:3000/user");
        setData(res.data);
    }
    useEffect(() => {
        fetchdata();
    }, [])

    const ondelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        fetchdata();
    }

    return (
        <div>
            <main id="main" className="main">
                <div className="container mt-5 mb-5">
                    <div className="pagetitle">
                        <h1>Manage User</h1>
                    </div>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-18">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">users</h5>
                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Fname</th>
                                                        <th scope="col">Lname</th>
                                                        <th scope="col">Contact</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Password</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((value, index, entarr) => {
                                                            return (
                                                                <tr>
                                                                    <th>{value.id}</th>
                                                                    <td>{value.fname}</td>
                                                                    <td>{value.lname}</td>
                                                                    <td>{value.moblie}</td>
                                                                    <td>{value.address}</td>
                                                                    <td>{value.email}</td>
                                                                    <td>{value.password}</td>
                                                                    <td>
                                                                        <button className='btn btn-danger' onClick={() => ondelete(value.id)}>Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

        </div>
    )
}

export default Manage_user