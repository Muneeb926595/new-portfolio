import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export const PortfolioDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if (id) {
            const foundData = dataportfolio?.find((item) => item?.id?.toString()?.toLowerCase()?.trim() === id?.toString()?.replace(':', "")?.toLowerCase()?.trim())
            setData(foundData)
        }
    }, [id])

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Case study | {data?.project_name ?? ""} </title>
                    <link rel="icon" href='../../assets/title_logo.ico' />
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4"> {data?.project_name} </h1>{" "}
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div className="mb-5 po_items_ho">
                    {dataportfolio.map((data, i) => {
                        return (
                            <div key={i} className="po_item">
                                <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={data.img} alt="" />
                                <div className="content">
                                    <p>{data.desctiption}</p>
                                    <a href={data.link}>view project</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </HelmetProvider>
    );
};
