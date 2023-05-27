import { Layout, Row, Col, Spin, Image } from "antd";

import "./style.scss";

type Props = {
    imageData: Array<object> | undefined;
};

const { Content } = Layout;

export default function ImagesViewContainer({ imageData }: Props) {
    if (!imageData) return <Spin />;

    return (
        <Content className="image-view-container">
            <Row
                align="middle"
                justify="center"
                gutter={[
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
            >
                {imageData.map((image) => {
                    const imgSrc = `https://live.staticflickr.com/${image?._attributes?.server}/${image?._attributes?.id}_${image?._attributes?.secret}.jpg`;

                    return (
                        <Col
                            className="image-wrapper"
                            xs={32}
                            sm={24}
                            md={16}
                            lg={8}
                        >
                            <Image className="image" src={imgSrc} />
                        </Col>
                    );
                })}
            </Row>
        </Content>
    );
}
