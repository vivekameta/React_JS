import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Edit({ editpost, posts }) {
  const { id } = useParams();

  

  const a=posts.find(post=>post.id===parseInt(id))

  const [name, setName] = useState(a.name);
  const [size, setSize] = useState(a.size);
  const [cost, setCost] = useState(a.cost);
  const [desc, setDesc] = useState(a.desc);
  const [images, setImages] = useState(a.images);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    editpost(a.id, name, size, cost, desc, images);
    navigate('/');
  }

  function handleChange(e) {
    setImages(e.target.files[0]);
  }

  return (
    <div>
      <header>
        <Link to="/">BACK TO HOME</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/add">ADD TO POST</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/edit/:id`}>EDIT POST</Link>
      </header>

      <div className='m1'>
        <center>
          <br /> <br />
          <h3 style={{ fontFamily: "initial", color: "blue" }}>  *** CREATE PRODUCTS  *** </h3>
          <br /> <br />
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="" className="form-label">* Product Name</label>
              <input type="text" className="form-control" id="inputEmail4" placeholder="Enter Product Name ...." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label htmlFor="" className="form-label">* Size</label>
              <select id="" className="form-select" style={{ textAlign: "center" }} value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Choose the Product size...</option>
                <option value='s'>S</option>
                <option value='m'>M</option>
                <option value='l'>L</option>
                <option value='xl'>XL</option>
                <option value='xxl'>XXL</option>
                <option value='xxxl'>XXXL</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="" className="form-label"> * Item Cost</label>
              <input type="number" className="form-control" id="inputEmail4" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <div className="col-12">
              <label htmlFor="" className="form-label"> * Description</label> <br />
              <textarea name="" className="form-control" id="inputAddress" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
            <div className="col-md-8">
              <label htmlFor="" className="form-label">Choose the Product images...</label>
              <input type="file" className="form-control" id="inputCity" onChange={handleChange} />
            </div>
            <div className="col-12">
              <br />
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Edit;
