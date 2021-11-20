import {useState} from "react";
import Layout from "../../../components/layout";
import { useRouter } from 'next/router';
import Link from 'next/link';
import {Categories} from '../../../constants/categories'
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
    Pagination,
    Select,
    Space,
    Divider, Result, Modal
} from "antd";
const {Option} = Select;
import {QuestionCircleOutlined, RollbackOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import ProductCard from "../../../components/productCard";

const { Paragraph,Text,Title } = Typography;
const { Meta } = Card;





const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);


export default function Home({session,freshData}) {
    const router = useRouter()
    const [ModalVisible, setModalVisible] = useState(false);
    let {slug1,slug2}= router.query;
    if(!slug1||!slug2) return null;
    slug1 = slug1.toLowerCase();
    slug2 = slug2.toLowerCase();
    const slug1Name = slug1.split('-').join(' ');
    const slug2Name = slug2.split('-').join(' ');
    return (
        <Layout session={session} freshData={freshData}>
            <PageHeader
                title={Categories[slug1Name].subCategories[slug2Name].name}
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="green">Active</Tag>}
                extra={[
                    <Button key="3" type="primary" onClick={()=>{
                        zE('messenger', 'open');
                    }}><QuestionCircleOutlined/>Contact Us</Button>,
                ]}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/`)
                    }}><a>Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/${slug1}`)
                    }}>
                        <a>{Categories[slug1Name].name}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {Categories[slug1Name].subCategories[slug2Name].name}
                    </Breadcrumb.Item>
                </Breadcrumb> }
            >
                <Content>
                    <Row><Col><img src={Categories[slug1Name]&&Categories[slug1Name].subCategories[slug2Name].images[0]}/></Col></Row>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        {Categories[slug1Name]&&<div dangerouslySetInnerHTML={{ __html:Categories[slug1Name].subCategories[slug2Name].description}}></div>}
                    </Paragraph>
                </Content>
            </PageHeader>
            <Divider/>
            <section style={{margin: '0 24px'}}>
                <Row gutter={[42,12]}>
                        {
                            slug1&&Object.keys(Categories[slug1Name]&&Categories[slug1Name].subCategories[slug2Name].subCategories).map((slug3Name,index)=>
                                <Col key={index}><Link passHref href={`/${slug1}/${slug2}/${slug3Name.split(' ').join('-')}`}><Typography.Link>{Categories[slug1Name]&&Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].name}</Typography.Link></Link></Col>)
                        }
                </Row>
                <Row style={{margin: '2rem 0 1rem 0'}}>
                    <Col>
                        <Space size={'large'} align="baseline">
                            <Title level={5}>Sort By:</Title>
                            <Select defaultValue="bestSelling" onChange={(value)=>{console.log(value)}}>
                                <Option value="bestSelling">Best Selling</Option>
                                <Option value="priceLow">Price(Low &gt; High)</Option>
                                <Option value="priceHigh">Price(High &gt; Low)</Option>
                                <Option value="latest">Latest</Option>
                                <Option value="mostReviewed">Most Reviewed</Option>
                                <Option value="name">Name</Option>
                            </Select>
                        </Space>
                    </Col>
                </Row>
                <Row gutter={[16,32]} justify="space-between">
                    {
                        Object.keys(Categories[slug1Name].subCategories[slug2Name].subCategories).map(key=>Categories[slug1Name].subCategories[slug2Name].subCategories[key].productIds||[]).flat().map((productId,index)=>{
                            console.log(productId);
                            return <Col key={index}><ProductCard productId={productId} session={session} key={index} freshData={freshData}/></Col>
                        })
                    }
                    <Modal
                        visible={ModalVisible}
                        footer={[
                            <Button key="submit"  loading={false} icon={<RollbackOutlined />}
                                    onClick={()=>{setModalVisible(false)}}>
                                Continue Shopping
                            </Button>,
                            <Button key="back" type="primary" onClick={()=>{setModalVisible(false);
                                router.push('/checkout/cart')}}  icon={<ShoppingCartOutlined />}>
                                Go To Cart
                            </Button>
                        ]}
                    >
                        <Result
                            status="success"
                            title="You've just added this product to the cart successfully!"
                            subTitle="MAIZE 1.3M LED Entertainment Unit - WHITE"
                        />
                    </Modal>
                </Row>
                <Row justify="end" style={{margin:'3rem 0 3rem 0'}}>
                    <Col>
                        <Pagination defaultCurrent={1} total={3} />
                    </Col>
                </Row>

            </section>

        </Layout>
    )
}
