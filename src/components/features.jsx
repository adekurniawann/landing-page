import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>About Us</h2>
          <h3>Prumahan  A adalah bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla</h3>
        </div>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Mengapa Perumahan A</h2>
          <h3> Beberapa alasan mengapa anda harus segera memiliki hunian di Perumahan A. Lokasi dan investasi terbaik: Lokasi super strategis.</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
