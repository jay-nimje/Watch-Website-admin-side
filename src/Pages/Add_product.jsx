import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function Add_product() {

    const [data, setdata] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get("http://localhost:3000/categories")
        setdata(res.data);
    };


    const [formvalue, setFormvalue] = useState({
        id: "",
        img_link: "",
        pro_brand: "",
        pro_type: "",
        pro_des: "",
        pro_price: "",
        cat_name:"",
        pro_dis_price: "",
    });

    const onchangeHeandal = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    }

    const validation = () => {
        var result = true;
        if (formvalue.img_link == null || formvalue.img_link == "") {
            toast.error('Please Enter the image path!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.pro_brand == null || formvalue.pro_brand == "") {
            toast.error('Please Enter the Product Brnad!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.pro_type == null || formvalue.pro_type == "") {
            toast.error('Please Enter the Product type!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.pro_des == null || formvalue.pro_des == "") {
            toast.error('Please Enter the Product dessciption!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.pro_price == null || formvalue.pro_price == "") {
            toast.error('Please Enter the Product Price!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        if (formvalue.pro_dis_price == null || formvalue.pro_dis_price== "") {
            toast.error('Please Enter the Disscounted price!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return false;
        }
        return result;
    };

    const onsubmit = async (e) =>{
        e.preventDefault();
        if (validation()) {
            const res = await axios.post("http://localhost:3000/product",formvalue);
            console.log(res);

            if (res.status == 201) {
                toast.success('Category added succesfully')
                setFormvalue({...formvalue, img_link: "", pro_brand: "", pro_type: "", pro_des: "", pro_price: "", pro_dis_price: "",cat_name:""});
            }
        }
    }

    return (
        <div>
            <main id="main" className="main">
                <div className="container mt-5 mb-5">
                    <div className="pagetitle">
                        <h1>Add Product</h1>
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
                                            <form className="row g-3">
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Image</label>
                                                    <input type="text" onChange={onchangeHeandal} value={formvalue.img_link} class="form-control" id="inputNanme4" name='img_link' placeholder='Image Path' />
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Brands</label>
                                                    <select class="form-select" name='pro_brand' onChange={onchangeHeandal} value={formvalue.pro_brand} aria-label="Default select example">
                                                        <option selected="selected"> Select Brands </option>
                                                        {
                                                            data.map((value, index) => (
                                                                <option key={index} value={value.brand}>{value.brand}</option>
                                                            ))
                                                        }

                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Products</label>
                                                    <select class="form-select" name='pro_type' onChange={onchangeHeandal} value={formvalue.pro_type} aria-label="Default select example">
                                                        <option selected="selected"> Select Product </option>
                                                        {
                                                            data.map((value, index) => (
                                                                <option key={index} value={value.product}>{value.product}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Categories</label>
                                                    <select class="form-select" name='cat_name' value={formvalue.cat_name} onChange={onchangeHeandal} aria-label="Default select example">
                                                        <option selected >Select the categories</option>
                                                        <option>Men</option>
                                                        <option>Woman</option>
                                                        <option>kid</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label">Product Description</label>
                                                    <input type="text" name='pro_des' onChange={onchangeHeandal} value={formvalue.pro_des} class="form-control" id="inputAddress" placeholder='Add Description' />
                                                </div>

                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label">Price</label>
                                                    <input type="text" name='pro_price' onChange={onchangeHeandal} value={formvalue.pro_price} class="form-control" id="inputAddress" placeholder='price' />
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label">Disscounted Price</label>
                                                    <input type="text" name='pro_dis_price' onChange={onchangeHeandal} value={formvalue.pro_dis_price} class="form-control" id="inputAddress" placeholder='Add Disscounted price' />
                                                </div>

                                                <div class="text">
                                                    <button type="submit" class="btn btn-primary" onClick={onsubmit}>Submit</button>
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

export default Add_product