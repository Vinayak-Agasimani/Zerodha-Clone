import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Track Tickets</a>
        </button>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Track account opening, </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Track segment activation, </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Intraday margins, </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;