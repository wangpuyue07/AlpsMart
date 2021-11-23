import {Row, Col, Typography, Divider, Space} from 'antd';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined, GooglePlusOutlined} from '@ant-design/icons';

const {Title, Link, Text} = Typography;

import styled from "styled-components";


const StyledFooter = styled.footer`
  background-color: #2b6ca3;
  padding:2rem;
  color:white;
  .ant-typography{
    color:white;
  }
  a{
    color:white;
  }
`;


export default function Footer({children}) {
    return (
        <StyledFooter>
            <Row justify={'center'}>
                <Col>
                    <Space style={{width: '100%', maxWidth: '1170px', margin: '0 auto'}} split={<Divider/>}
                           direction="vertical">
                        <Row>
                            <Col span={10}>
                                <Title level={4}>INFORMATION</Title>
                                <p><Link href="/information/returns-and-refunds-policy" target="_blank">
                                    About Us
                                </Link></p>
                                <p><Link href="/information/shipping" target="_blank">
                                    Shipping Information
                                </Link></p>
                                <p><Link href="/information/returns-and-refunds-policy" target="_blank">
                                    Pick Up Information
                                </Link></p>
                                <p><Link href="/information/returns-and-refunds-policy" target="_blank">
                                    Returns & Refunds Policy
                                </Link></p>
                                <p><Link href="/information/terms-and-conditions" target="_blank">
                                    Terms & Conditions
                                </Link></p>

                            </Col>
                            <Col span={8}>
                                <Title level={4}>ADDRESS:</Title>
                                <p>29A Don Buck Road, <br/>Massey, Auckland, New Zealand</p>
                            </Col>
                            <Col span={6}>
                                <Title level={4}>OFFICE OPEN HOURS:</Title>
                                <p><Text>Monday : 9am - 4pm</Text></p>
                                <p><Text>Tuesday : 9am - 4pm</Text></p>
                                <p><Text>Wednesday : 9am - 4pm</Text></p>
                                <p><Text>Thursday : 9am - 4pm</Text></p>
                                <p><Text>Friday : 9am - 4pm</Text></p>
                                <p><Text>Saturday : 9am - 4pm</Text></p>
                                <p><Text>Sunday : 9am - 4pm</Text></p>
                                <p><Text>CLOSED ON XMAS</Text></p>
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col span={4}>
                                <img src="/images/scan_code.png"
                                     alt="TreasureBox.co.nz" style={{width: '100%'}}/>
                            </Col>
                            <Col span={12}></Col>
                            <Col span={8}>
                                <Space size={'large'}>
                                    <Title level={4}>BE OUR REFS:</Title>
                                    <Title level={4}><a><FacebookOutlined/></a></Title>
                                    <Title level={4}><a><TwitterOutlined/></a></Title>
                                    <Title level={4}><a><InstagramOutlined/></a></Title>
                                    <Title level={4}><a><GooglePlusOutlined/></a></Title>
                                </Space>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '3rem'}} justify="center" align="middle">
                            <Col span={3}>
                                <img src="/images/logo.png"
                                     alt="TreasureBox.co.nz" style={{width: '75%', marginTop: '-5px'}}/>
                            </Col>
                            <Col span={17}>
                                <Space split={<Divider type={'vertical'}/>}>
                                    <Link>About Us</Link>
                                    <Link>Sitemap</Link>
                                    <Link target="_blank" href={'/information/terms-and-conditions'}>Terms & Conditions</Link>
                                    <Link target="_blank" href={'/information/returns-and-refunds-policy'}>Privacy Policy</Link>
                                    <Text>© Copyright 2021 Alps Information Technology Ltd. <br/>All Rights Reserved.</Text>
                                </Space>
                            </Col>
                            <Col span={4}>
                                <img alt="Payment Methods"
                                     src="https://www.treasurebox.co.nz/media/wysiwyg/test-images/footer-icon2.png"
                                     width="200"
                                     height="20"/>
                            </Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </StyledFooter>
    )
}
