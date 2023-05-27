import { Row, Col, Skeleton } from "antd";
import React from "react";

import "./style.scss";

export default function ImageLoading() {
    return (
        <Row
            align="middle"
            justify="center"
            gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
            ]}
            className="loader-wrapper"
        >
            <Col
                className="skeleton-image-wrapper"
                xs={32}
                sm={24}
                md={12}
                lg={8}
            >
                <Skeleton.Image className="skeleton-image" active />
            </Col>
            <Col
                className="skeleton-image-wrapper"
                xs={32}
                sm={24}
                md={12}
                lg={8}
            >
                <Skeleton.Image className="skeleton-image" active />
            </Col>
            <Col
                className="skeleton-image-wrapper"
                xs={32}
                sm={24}
                md={12}
                lg={8}
            >
                <Skeleton.Image className="skeleton-image" active />
            </Col>
            <Col
                className="skeleton-image-wrapper"
                xs={32}
                sm={24}
                md={12}
                lg={8}
            >
                <Skeleton.Image className="skeleton-image" active />
            </Col>
            <Col
                className="skeleton-image-wrapper"
                xs={32}
                sm={24}
                md={12}
                lg={8}
            >
                <Skeleton.Image className="skeleton-image" active />
            </Col>
            <Col
                className="skeleton-image-wrapper"
                xs={32}
                sm={24}
                md={12}
                lg={8}
            >
                <Skeleton.Image className="skeleton-image" active />
            </Col>
        </Row>
    );
}
