import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


function Add_categories() {

    const [formvalue, setFormvalue] = useState ({
        id: "",
        brand: "",
        product: ""
    });

 const onchangeHeandal = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    };

    const validation = () => {
        var result = true;
        if (formvalue.brand == null || formvalue.brand == "") {
            toast.error('Please Enter the Brands!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.product == null || formvalue.product == "") {
            toast.error('Please Enter the Product!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }

        return result;
    };

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post('http://localhost:3000/categories', formvalue);
            // console.log(res);
            if (res.status == 201) {
                toast.success('Category added succesfully')
                setFormvalue({ ...formvalue, brand: "", product: "" })

            }

        }

    };

    return (
        <div>
            <main id="main" className="main">
                <div className="container mt-5 mb-5">
                    <div className="pagetitle">
                        <h1>Add Categories</h1>
                    </div>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-18">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Categories</h5>
                                            <form className="row g-3">
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Brands</label>
                                                    <input type="text" class="form-control" name='brand' value={formvalue.brand} onChange={onchangeHeandal} id="inputAddress" placeholder='Add Brand Name' />

                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Products</label>
                                                    <input type="text" class="form-control" name='product' value={formvalue.product} onChange={onchangeHeandal} id="inputAddress" placeholder='Add Product Name' />
                                                </div>
                                                <div class="text">
                                                    <button type="submit" class="btn btn-primary"onClick={onsubmit} >Submit</button>
                                                </div>
                                            </form>
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

export default Add_categories