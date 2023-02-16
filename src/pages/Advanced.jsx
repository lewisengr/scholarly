import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Algebra 1 - Hall DONE
// Algebra 1 - Mooney DONE
// Algebra 2 - Leverett DONE
// American Lit. - Hall DONE
// Biblical History - Thompson DONE
// Biology - Brackett
// Biology - Washington
// British Lit. - Blake
// Chemistry - Swoboda
// Christian Living - Lytle
// Economics - Haikey
// Environmental Science
// Geomertry - Hall
// Intro to Lit. - Hall
// Intro to Lit. - Hagan
// Jud-Christ Phil - Burdett
// Jud-Christ Phil - Estrada
// Lit. Analysis - Burdett
// Physics - Ludwig
// Spanish 1 - Mays
// Spanish 2 - Helman
// Spanish 3 - Helman
// Trig-Precalc - Musich
// US History - Scheurer
// World History - Scheurer
// World Lit. - Garcia

export const Advanced = () => {
  return (
    <Container className="text-center">
      <h1 style={{ marginTop: "25px" }}>Advanced Classes</h1>
      <p style={{ marginTop: "10px" }}>This is the ADVANCED page.</p>
      <Card
        className="p-3 border-primary"
        style={{ width: "100%", maxWidth: "10000px", margin: "0 auto" }}
      >
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-header">FIRSTNAME Hall</div>
              <div className="card-body">
                <Link className="card-title" to="Algebra 1">
                  <h4>Algebra 1</h4>
                </Link>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          {/* SINGLE CLASSROOM BLOCK */}
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-header">FIRSTNAME Mooney</div>
              <div className="card-body">
                <Link className="card-title" to="Algebra 1M">
                  <h4>Algebra 1</h4>
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
              <div className="card-header">Leverett</div>
              <div className="card-body">
                <Link className="card-title" to="Algebra 2">
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
            <div className="card border-info mb-1">
              <div className="card-header">Caleb Hall</div>
              <div className="card-body">
                <Link className="card-title" to="American Lit">
                  <h4>American Lit.</h4>
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
              <div className="card-header">Thompson</div>
              <div className="card-body">
                <Link className="card-title" to="Biblical History">
                  <h4>Biblical History</h4>
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
