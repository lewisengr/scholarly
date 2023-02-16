import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Algebra 2 - Leverett
// Chemistry - Swoboda
// Jud-Christ Phil - Estrada
// Trig-Precalc - Musich
// Wind Ens-History - Sapp
// Wind Ens-Theory - Sapp
// Honors Anatomy & Physiology - Brackett

export const Honors = () => {
  return (
    <Container className="text-center">
      <h1 style={{ marginTop: "25px" }}>Honors Classes</h1>
      <p style={{ marginTop: "10px" }}>This is the Honors page.</p>
      <Card
        className="p-3 border-primary"
        style={{ width: "100%", maxWidth: "10000px", margin: "0 auto" }}
      >
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-header">...</div>
              <div className="card-body">
                <Link className="card-title" to="Biology">
                  <h4>Biology</h4>
                </Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-header">Header 2</div>
              <div className="card-body">
                <Link className="card-title" to="Header2">
                  <h5>Header 2</h5>
                </Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-header">Header 3</div>
              <div className="card-body">
                <Link className="card-title" to="Header3">
                  <h5>Header 3</h5>
                </Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info mb-1">
              <div className="card-header">Header 4</div>
              <div className="card-body">
                <Link className="card-title" to="Header4">
                  <h5>Header 4</h5>
                </Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};
