import { Row, Col, Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MyFavCompany = ({ data }) => {
  const dispatch = useDispatch();
  const favouriteCo = useSelector((state) => state.myfavorites.content);

  return (
    <Container
      fluid
      className="bg-secondary p-5"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col sm={12} className="mb-5">
          <Link to="/">
            <Button
              variant="light"
              className="text-primary border-3 border fw-bold mb-5"
            >
              Back to start
            </Button>
          </Link>
          <h2 className="text-light opacity-100 fs-1 me-2 fw-bold">
            Le tue aziende preferite
          </h2>
          <ListGroup variant="flush">
            {favouriteCo.length > 0 ? (
              favouriteCo.map((data, i) => (
                <Row
                  key={i}
                  className="mx-0 mt-3 p-3 align-items-center"
                  style={{ border: "1px solid #00000033", borderRadius: 4 }}
                >
                  <Col sm={2} className="p-0">
                    <Button
                      variant="light"
                      className="text-danger border-3 border fw-bold"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_FAVORITE", payload: i })
                      }
                    >
                      D E L E T E
                    </Button>
                  </Col>
                  <Col>
                    <Link className="text-dark" to={`/${data.company_name}`}>
                      {data.company_name}
                    </Link>
                  </Col>
                </Row>
              ))
            ) : (
              <ListGroup.Item className="lead bg-secondary mt-5">
                <span className="text-light opacity-50 fs-1 me-2 fw-bold">
                  Non hai alcun azienda tra i preferiti
                </span>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFavCompany;