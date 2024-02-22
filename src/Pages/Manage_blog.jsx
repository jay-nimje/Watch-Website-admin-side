import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_blog() {

    const [data, Setdata] = useState([]);
    const fetchdata = async () => {
        const rce = await axios.get("http://localhost:3000/blog")
        Setdata(rce.data);
    }
    useEffect(() => {
        fetchdata();
    }, [])

    const onclick = async (id) => {
        const rce = await axios.delete(`http://localhost:3000/blog/${id}`);
        fetchdata();
    }
    return (
        <div>
            <main id="main" className="main">
                <div className="container mt-5 mb-5">
                    <div className="pagetitle">
                        <h1>Manage Blogs</h1>
                    </div>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-18">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Blogs</h5>
                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Discription</th>
                                                        <th scope="col">images</th>
                                                        <th scope="col">Edit</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((value, index, entaar) => {
                                                            return (
                                                                <tr>
                                                                    <th>{value.id}</th>
                                                                    <td>{value.title}</td>
                                                                    <td>{value.desc}</td>
                                                                    <td>-</td>
                                                                    <td>
                                                                        <button className='btn btn-success'>Edit</button>
                                                                    </td>
                                                                    <td>
                                                                        <button className='btn btn-danger' onClick={() => onclick(value.id)}>Delete</button>
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

export default Manage_blog