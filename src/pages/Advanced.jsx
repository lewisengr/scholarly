// import React from "react";
// import { Card, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export const Advanced = () => {
//   return (
//     <Container className="text-center">
//       <h1 style={{ marginTop: "25px" }}>Advancssed</h1>
//       <p style={{ marginTop: "10px" }}>
//         Listed below include all WCHS Advanced classes.
//       </p>
//       <Card
//         className="p-3 border-primary"
//         style={{
//           resize: "both",
//           overflow: "auto",
//           maxWidth: "10000px",
//           backgroundColor: "#1f1f1fb9",
//           width: "145vh",
//           height: "50vh",
//         }}
//       >
//         <div className="row row-cols-1 row-cols-md-2 g-4">
//           <div className="col">
//             <div className="card border-info mb-3">
//               <div className="card-header">Loretta Hall</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Algebra1">
//                   <h4>Algebra 1</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-3">
//               <div className="card-header">Mooney</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Algebra1M">
//                   <h4>Algebra 1</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-3">
//               <div className="card-header">Leverett</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Algebra2">
//                   <h4>Algebra 2</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Caleb Hall</div>
//               <div className="card-body">
//                 <Link className="card-title" to="AmericanLit">
//                   <h4>American Lit</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Thompson</div>
//               <div className="card-body">
//                 <Link className="card-title" to="BiblicalHistory">
//                   <h4>Biblical History</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Brackett</div>
//               <div className="card-body">
//                 <Link className="card-title" to="BiologyB">
//                   <h4>Biology</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Tonya Washington</div>
//               <div className="card-body">
//                 <Link className="card-title" to="BiologyW">
//                   <h4>Biology</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Blake</div>
//               <div className="card-body">
//                 <Link className="card-title" to="BritishLit">
//                   <h4>British Lit</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Kim Swoboda</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Chemistry">
//                   <h4>Chemistry</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Estrada</div>
//               <div className="card-body">
//                 <Link className="card-title" to="ChristianLivingE">
//                   <h4>Christian Living</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Lytle</div>
//               <div className="card-body">
//                 <Link className="card-title" to="ChristianLivingL">
//                   <h4>Christian Living</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Haikey</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Economics">
//                   <h4>Economics</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Tonya Washington</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Environmental Science">
//                   <h4>Environmental Science</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Loretta Hall</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Geometry">
//                   <h4>Geometry</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Haikey</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Gov">
//                   <h4>Government</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Caleb Hall</div>
//               <div className="card-body">
//                 <Link className="card-title" to="IntroLit">
//                   <h4>Intro to Lit</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Hagan</div>
//               <div className="card-body">
//                 <Link className="card-title" to="IntroLitH">
//                   <h4>Intro to Lit</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Dave Burdett</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Jud-ChristPhil">
//                   <h4>Jud-Christ Phil</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Estrada</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Jud-ChristPhilE">
//                   <h4>Jud-Christ Phil</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Dave Burdett</div>
//               <div className="card-body">
//                 <Link className="card-title" to="LitAnalysis">
//                   <h4>Lit Analysis</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Ludwig</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Physics">
//                   <h4>Physics</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Vicki Mays</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Spanish1">
//                   <h4>Spanish 1</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Mia Helman</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Spanish2">
//                   <h4>Spanish 2</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Mia Helman</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Spanish3">
//                   <h4>Spanish 3</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Laird Musich</div>
//               <div className="card-body">
//                 <Link className="card-title" to="Trig-Precalc">
//                   <h4>Trig-Precalc</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Morgan Scheurer</div>
//               <div className="card-body">
//                 <Link className="card-title" to="USHistory">
//                   <h4>US History</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Morgan Scheurer</div>
//               <div className="card-body">
//                 <Link className="card-title" to="WorldHistory">
//                   <h4>World History</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card border-info mb-1">
//               <div className="card-header">Garcia</div>
//               <div className="card-body">
//                 <Link className="card-title" to="WorldLit">
//                   <h4>World Lit</h4>
//                 </Link>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </Container>
//   );
// };
