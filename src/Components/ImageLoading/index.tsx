import { Row, Col, Skeleton } from "antd";

import "./style.scss";

export default function ImageLoading() {
    const blankLoaderShells = ["", "", "", "", "", ""];

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
            {blankLoaderShells.map(() => {
                return (
                    <Col
                        className="skeleton-image-wrapper"
                        xs={32}
                        sm={24}
                        md={12}
                        lg={8}
                    >
                        <Skeleton.Image className="skeleton-image" active />
                    </Col>
                );
            })}
        </Row>
    );
}
