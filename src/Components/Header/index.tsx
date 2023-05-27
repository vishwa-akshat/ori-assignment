import { Layout, Typography } from "antd";

import SearchInput from "../SearchInput";

import "./style.scss";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

export default function Header() {
    return (
        <AntHeader className="header-wrapper">
            <Title className="title">Search Photos</Title>
            <SearchInput />
        </AntHeader>
    );
}
