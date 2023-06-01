import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export const PortfolioDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const foundData = dataportfolio?.find(
        (item) =>
          item?.id?.toString()?.toLowerCase()?.trim() ===
          id?.toString()?.replace(":", "")?.toLowerCase()?.trim()
      );
      setData(foundData);
    }
  }, [id]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Case study | {data?.project_name ?? ""} </title>
          <link rel="icon" href="../../assets/title_logo.ico" />
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {data?.project_name} </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="po_item_detail">
          <img
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            src={data?.img}
            alt=""
          />
        </div>
        <div className="case_study_overview">
          <h3 className="color_sec py-4">Overview</h3>
          <p className="service_desc">{data?.long_desctiption}</p>
        </div>
        <div className="case_study_links pb-4">
          {data?.website && (
            <div style={{ display: "flex", alignContent: "center" }}>
              <h5 className="color_sec pr-4">Website Preview</h5>
              <p
                className="service_desc"
                style={{ textDecorationLine: "underline" }}
              >
                <a
                  href={data?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.website}
                </a>
              </p>
            </div>
          )}
          {data?.github && (
            <div style={{ display: "flex", alignContent: "center" }}>
              <h5 className="color_sec pr-4">Github</h5>
              <p
                className="service_desc"
                style={{ textDecorationLine: "underline" }}
              >
                <a
                  href={data?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.github}
                </a>
              </p>
            </div>
          )}
          <div className="d-flex align-items-center">
            {data?.playstore && (
              <div
                className="mr-4"
                style={{ display: "flex", alignContent: "center" }}
              >
                <a
                  href={data?.playstore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Playstore
                </a>
              </div>
            )}
            {data?.appstore && (
              <div style={{ display: "flex", alignContent: "center" }}>
                <a
                  href={data?.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Appstore
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
