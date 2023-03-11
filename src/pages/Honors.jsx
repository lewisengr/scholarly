import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export const Honors = () => {
  return (
    <Container className="text-center">
      <h1 style={{ marginTop: "25px" }}>Honors</h1>
      <p style={{ marginTop: "10px" }}>
        Listed below include all WCHS Honors classes.
      </p>
      <Card
        className="p-3 border-primary"
        style={{
          resize: "both",
          overflow: "auto",
          maxWidth: "10000px",
          backgroundColor: "#1f1f1fb9",
          width: "145vh",
          height: "50vh",
        }}
      >
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-header">Leverett</div>
              <div className="card-body">
                <Link className="card-title" to="HAlg2">
                  <h4>Algebra 2</h4>
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
              <div className="card-header">Kim Swoboda</div>
              <div className="card-body">
                <Link className="card-title" to="HChem">
                  <h4>Chemistry</h4>
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
              <div className="card-header">Estrada</div>
              <div className="card-body">
                <Link className="card-title" to="HJud-Christ Phil">
                  <h4>Jud-Christ Phil</h4>
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
              <div className="card-header">Laird Musich</div>
              <div className="card-body">
                <Link className="card-title" to="HTrig-Precalc">
                  <h4>Trig-Precalc</h4>
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
              <div className="card-header">Sapp</div>
              <div className="card-body">
                <Link className="card-title" to="HWindEns-History">
                  <h4>Wind Ens-History</h4>
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
              <div className="card-header">Sapp</div>
              <div className="card-body">
                <Link className="card-title" to="HWindEns-Theory">
                  <h4>Wind Ens-Theory</h4>
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
              <div className="card-header">Brackett</div>
              <div className="card-body">
                <Link className="card-title" to="HAnatomyPhy">
                  <h4>Anatomy & Physiology</h4>
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
