import React from 'react';
import img from '../../assets/image/aboutme.jpeg';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <img src={img} alt="About Me" className="img-fluid rounded-circle" />
        </div>
        <div className="col-lg-8">
          <h2>About Me</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium id in illum ullam eum nobis numquam delectus explicabo consequatur ex, quis voluptatum obcaecati, omnis aliquid? A, doloribus quos? Explicabo a labore omnis rem aliquid recusandae voluptatem accusamus odit blanditiis accusantium totam ratione, sapiente incidunt minima perspiciatis neque culpa esse dicta? Ut illum, provident ea modi voluptates repudiandae? Eligendi, fuga.
          </p>
          <button className="btn btn-primary">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
