import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      fluid
      className="p-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(73,119,119,1) 0%, rgba(144,143,144,1) 100%)",
      }}
    >
      <Row>
        <Col xs={10} className="mx-auto mt-3 mb-4">
          <h1
            className="text-light text-center"
            style={{
              color: "#FFFFFF",
              textShadow:
                "violet 0px 0px 5px, violet 0px 0px 10px, violet 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px",
            }}
          >
            Remote Jobs Search
          </h1>
        </Col>
        <Link
          to={"/myfavco"}
          className="d-flex justify-content-center text-decoration-none"
        >
          <Button
            variant="light"
            className="text-primary border-3 border fw-bold mb-5"
          >
            Aziende preferite
          </Button>
        </Link>
        <Col xs={10} className="mx-auto">
          <Form
            className="border border-3 border-dark rounded-3"
            onSubmit={handleSubmit}
          >
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col
          xs={10}
          className="border border-3 border-light rounded mt-4 mx-auto mb-5"
        >
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
