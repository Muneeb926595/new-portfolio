import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, projectTypes } from "../../content_option";

function capitalizeWords(sentence) {
  const words = sentence?.split(" ");

  const capitalizedWords = words?.map((word) => {
    const firstChar = word?.charAt(0)?.toUpperCase();
    const restOfWord = word?.slice(1);
    return firstChar + restOfWord;
  });

  const capitalizedSentence = capitalizedWords?.join(" ");

  return capitalizedSentence;
}

export const Portfolio = () => {
  const [currentSelection, setCurrentSelection] = useState("all");
  const [projectsList, setProjectsList] = useState(dataportfolio);

  useEffect(() => {
    if (currentSelection === "all") {
      setProjectsList(dataportfolio);
    } else {
      const newData = dataportfolio?.filter(
        (item) =>
          item?.type?.toLowerCase()?.trim() ===
          currentSelection?.toLowerCase()?.trim()
      );
      setProjectsList(newData);
    }
  }, [currentSelection]);
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <link rel="icon" href="../../assets/title_logo.ico" />
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div style={{ display: "flex", alignItems: "center" }}>
          {projectTypes?.map((item, index) => (
            <h5
              key={index}
              onClick={() => {
                setCurrentSelection(item);
              }}
              style={{
                padding: "1rem",
                paddingLeft: "0px",
                textDecorationLine:
                  currentSelection === item ? "underline" : "none",
              }}
            >
              {capitalizeWords(item)}
            </h5>
          ))}
        </div>
        <div className="mb-5 po_items_ho">
          {projectsList?.map((data, i) => {
            return (
              <div key={i} className="po_item" style={{ marginLeft: "0px" }}>
                <img
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  src={data.img}
                  alt=""
                />
                <div className="content">
                  <p style={{ padding: "0px 1rem" }}>{data.desctiption}</p>
                  <Link to={data.link}>view project</Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
