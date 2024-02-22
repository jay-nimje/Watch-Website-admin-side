import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_product() {

    const [data, setdata] = useState([]);
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/product");
        setdata(res.data);
    }
    useEffect(() => {
        fetchdata();
    }, [])

    const ondelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/product/${id}`);
        fetchdata();
    }

    return (
        <div>
            <main id="main" className="main">
                <div className="container mt-5 mb-5">
                    <div className="pagetitle">
                        <h1>Manage Product</h1>
                    </div>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-18">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Product</h5>
                                            <table className="table table-bordered datatable text-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Images</th> 
                                                        <th scope="col">Brands</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Categories</th>
                                                        <th scope="col">Pro_Des</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Diss_Price</th>
                                                        <th scope="col">Edit</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((value, index, entarr) => {

                                                            return (
                                                                <tr>
                                                                    <th>{value.id}</th>
                                                                    <td><img src={value.img_link} alt="" height={"150px"} width={"150px"} /></td>
                                                                    <td>{value.pro_brand}</td>
                                                                    <td>{value.pro_type}</td>
                                                                    <td>{value.cat_name}</td>
                                                                    <td>{value.pro_des}</td>
                                                                    <td>{value.pro_price}</td>
                                                                    <td>{value.pro_dis_price}</td>
                                                                    <td>
                                                                        <button className='btn btn-success'>Edit</button>
                                                                    </td>
                                                                    <td>

                                                                        <button className='btn btn-danger' onClick={() => ondelete(value.id)}> <i class="bi bi-trash"> </i></button>

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

export default Manage_product