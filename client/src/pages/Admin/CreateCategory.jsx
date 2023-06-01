import React from 'react'
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div>
        <div
          className="container-fluid m-3 p-3"
          style={{
            marginTop: "100px",
          }}
        >
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1 style={{marginTop:"50px"}}>Create Category</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateCategory;