import Layout from "../../components/layout";
import {useRouter} from 'next/router'
import styled from 'styled-components';
import {
    Alert,
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
    Select, Pagination, Result, Modal
} from "antd";
import {QuestionCircleOutlined, RollbackOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link'
import ProductCard from '../../components/productCard';

const client = algoliasearch('ZAZ6U12BFI', 'ea3762995c8ce76a7b97c28acb9e6917');
const index = client.initIndex('Products');
const {Text, Title} = Typography;
const {Meta} = Card;




export default function Home({session,freshData}) {
    const router = useRouter()
    const {input, category} = router.query;
    const [products, setProducts] = useState([]);
    console.log(session);
    useEffect(async () => {
        if (!input) {
            setProducts([])
        } else {
            const result = await index.search(input, {
                hitsPerPage: 20,
            });
            setProducts(result.hits);
        }

    }, [input])
    return (
        <Layout session={session} freshData={freshData}>

                <PageHeader
                    title={`Search results for '${input}'`}
                    className="site-page-header"
                    extra={[
                        <Button key="3" type="primary" onClick={() => {
                            zE('messenger', 'open');
                        }}><QuestionCircleOutlined/>Contact Us</Button>,
                    ]}
                    breadcrumb={<Breadcrumb>
                        <Breadcrumb.Item><Link href={'/'}><a>Home</a></Link></Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {`Search results for '${input}'`}
                        </Breadcrumb.Item>
                    </Breadcrumb>}
                >
                </PageHeader>


                <Divider/>
                <section style={{margin: '0 24px'}}>
                    <Row style={{margin: '2rem 0 1rem 0'}}>
                        <Col>
                            <Space size={'large'} align="baseline">
                                <Title level={5}>Sort By: Relevance</Title>
                            </Space>
                        </Col>
                    </Row>
                    <Row gutter={[0, 32]} justify="space-between">
                        {
                            products.length == 0 ? <Alert message="Your search returns no results." type="warning"/> :
                                products.map((product, index) => <Col key={index}>
                                    <ProductCard product={product} key={index} freshData={freshData} session={session}/></Col>)
                        }
                    </Row>
                    <Row justify="end" style={{margin: '3rem 0 3rem 0'}}>
                        <Col>
                            <Pagination defaultCurrent={1} total={products.length}/>
                        </Col>
                    </Row>
                </section>
        </Layout>
    )
}
