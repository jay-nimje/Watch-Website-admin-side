import React from 'react'

function Add_blog() {
  return (
    <div>
        <main id="main" className="main">
                <div className="container mt-5 mb-5">
                    <div className="pagetitle">
                        <h1>Add Blog</h1>
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
                                            <form className="row g-3">
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Id</label>
                                                    <input type="text" class="form-control" id="inputNanme4" placeholder='Id' />
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Title</label>
                                                    <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Title' />
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNanme4" class="form-label">Discription</label>
                                                    <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Discription' />
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label">Imges</label>
                                                    <input type="file" class="form-control" id="inputAddress" placeholder='Images' />
                                                </div>
                                                <div class="text">
                                                    <button type="submit" class="btn btn-primary">Submit</button>
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

export default Add_blog