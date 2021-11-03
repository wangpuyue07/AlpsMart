import Layout from "../../../components/layout";
import { useRouter } from 'next/router'

import {
    Avatar,
    Button,
    Card,
    Menu,
    PageHeader,
    Row,
    Col,
    Tag,
    Typography,
    Breadcrumb,
    Divider,
    Space,
    Select, Pagination
} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
const {Option}  = Select;
const { Paragraph,Text,Title } = Typography;
const { Meta } = Card;




const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);


export default function Home() {
    const router = useRouter()
    const {slug1,slug2,slug3}= router.query;
    return (
        <Layout >
            <PageHeader
                title={slug3}
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="green">Active</Tag>}
                extra={[
                    <Button key="3" type="primary" onClick={()=>{
                        zE('messenger', 'open');
                    }}><QuestionCircleOutlined/>Contact Us</Button>,
                ]}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/${slug1}`)
                    }}>
                        <a>{slug1}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/${slug1}/${slug2}`)
                    }}>
                        <a>{slug2}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {slug3}
                    </Breadcrumb.Item>
                </Breadcrumb> }
            >
                <Content>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        The rainy season is around and you would want one partner who could accompany you on all your trips around the neighborhood. Whether you want to take a stroll in the morning or you have to go across the street to do some grocery, you want to be safe because you never know when the rain comes down. To cater to all your specific needs, you would definitely need to have an umbrella handy in your home & living area so that you can grab it and go out for a stroll whenever you like. Check out our wide range of health & beautyproducts and you are sure to find the best parasols in their because they not only save you from the rain coming down but can also keep you protected against the harsh effects of sun and keep you looking fresh all day long. We bring a wide range of products including the fanciest of items like lace umbrellas to simple black ones that are meant to serve their purpose only. Whatever the case, you can rest assured that our products won’t just serve the aesthetics for specific use, like in photo shoots, but are also made sturdy to last the test of time. You can always count on use for getting the best of both worlds at a nominal price.
                    </Paragraph>
                </Content>
            </PageHeader>


            <Divider/>
            <section style={{margin: '0 24px'}}>
                <Row style={{margin: '2rem 0 1rem 0'}}>
                    <Col>
                        <Space size={'large'} align="baseline">
                            <Title level={5}>Filter By:</Title>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '320px' }}
                                placeholder="Features"
                                onChange={(value)=>{console.log(`selected ${value}`);}}>

                                <Option key={'Features 1'}>Features 1</Option>
                                <Option key={'Features 2'}>Features 2</Option>
                            </Select>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '320px' }}
                                placeholder="Size"
                                onChange={(value)=>{console.log(`${value}`);}}
                            >
                                <Option key={'Size 1'}>Size 1</Option>
                                <Option key={'Size 2'}>Size 2</Option>
                                <Option key={'Size 3'}>Size 3</Option>
                                <Option key={'Size 4'}>Size 4</Option>
                            </Select>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '320px' }}
                                placeholder="Color"
                                onChange={(value)=>{console.log(`selected ${value}`);}}
                            >
                                <Option key={'Color 1'}>White</Option>
                                <Option key={'Color 2'}>Black</Option>
                                <Option key={'Color 3'}>Red</Option>
                            </Select>
                        </Space>
                    </Col>
                </Row>
                <Row style={{margin: '2rem 0 1rem 0'}}>
                    <Col>
                        <Space size={'large'} align="baseline">
                            <Title level={5}>Sort By:</Title>
                            <Select defaultValue="bestSelling" onChange={(value)=>{console.log(value)}}>
                                <Option value="bestSelling">Best Selling</Option>
                                <Option value="priceLow">Price(Low `&gt;` High)</Option>
                                <Option value="priceHigh">Price(High `&gt;` Low)</Option>
                                <Option value="latest">Latest</Option>
                                <Option value="mostReviewed">Most Reviewed</Option>
                                <Option value="name">Name</Option>
                            </Select>
                        </Space>
                    </Col>
                </Row>
            <Row gutter={[16,32]} justify="space-between">
                {
                    Array.from(Array(20)).map((value,index)=><Col key={index}><Card
                        style={{ width: 300, cursor:'pointer' }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                onClick={()=>{
                                    router.push(`/product/${index}`);
                                }}
                            />
                        }
                        actions={[<Button key={index} type="link" onClick={()=>{alert('Add to Cart')}}>Add to Cart</Button>]}
                    >
                        <Meta
                            title={<Row justify="space-between"><Col>Product: {index}</Col><Col><Text type="success">$123.1</Text></Col></Row>}
                            description="This is the description"
                            onClick={()=>{
                                router.push(`/product/${index}`);
                            }}
                        />
                    </Card></Col>)
                }


            </Row>
                <Row justify="end" style={{margin:'3rem 0 3rem 0'}}>
                    <Col>
                        <Pagination defaultCurrent={1} total={50} />
                    </Col>
                </Row>
            </section>
        </Layout>
    )
}
