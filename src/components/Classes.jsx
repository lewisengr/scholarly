// import React from "react";
// import { Card, Button } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const Classes = () => {
//   return (
//     <CardDeck>
//       <Card>
//         <CardImg top width="100%" src="https://placehold.it/500x325" alt="Classroom Image" />
//         <CardBody>
//           <CardTitle>Classroom 1</CardTitle>
//           <CardSubtitle>Description</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Go somewhere</Button>
//         </CardBody>
//       </Card>
//       <Card>
//         <CardImg top width="100%" src="https://placehold.it/500x325" alt="Classroom Image" />
//         <CardBody>
//           <CardTitle>Classroom 2</CardTitle>
//           <CardSubtitle>Description</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Go somewhere</Button>
//         </CardBody>
//       </Card>
//     </CardDeck>
//   );
// };

// export default Classes;

const Classes = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Classes;