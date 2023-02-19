import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Honors = (props) => {
  const honorsClasses = [
    { name: "Algebra 2", teacher: "Leverett" },
    { name: "Chemistry", teacher: "Kim Swoboda" },
    { name: "Jud-Christ Phil", teacher: "Estrada" },
    { name: "Trig-Precalc", teacher: "Laird Musich" },
    { name: "Wind Ens-History", teacher: "Sapp" },
    { name: "Wind Ens-Theory", teacher: "Sapp" },
    { name: "Anatomy & Physiology", teacher: "Brackett" },
  ];

  const [value, setValue] = useState(props.value ?? '');
  const [sortOrder, setSortOrder] = useState("asc");

  const sortClasses = (order) => {
    const sortedClasses = [...honorsClasses].sort((a, b) =>
      order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    return sortedClasses;
  };

  const sortedClasses = sortClasses(sortOrder);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <Container className="text-center">
      <h1 style={{ marginTop: "25px" }}>Honors</h1>
      <p
        className="mb-3"
        style={{
          marginTop: "10px",
          padding: "5px",
        }}
      >
        Listed below include all WCHS Honors classes.
      </p>
      <Form>
        <Form.Group as={Row} controlId="sortOrder">
          <Form.Label column sm="3">
            Sort by:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              as="select"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
      <div
        className="border border-primary d-flex align-items-center"
        style={{ padding: "10px" }}
      >
        <span style={{ marginRight: "5px" }}>Total Classes:</span>
        <strong>{honorsClasses.length}</strong>
      </div>

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
        {sortedClasses.map((classItem, index) => (
          <p key={index}>{classItem.name}</p>
        ))}
      </Card>
      <Card>
        <Container>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border-info mb-3">
                <div className="card-header">Leverett</div>
                <div className="card-body">
                  <Link className="card-title" to="HAlg2">
                    <h4>Algebra 2</h4>
                  </Link>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Card>
    </Container>
  );
};
