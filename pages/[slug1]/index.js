import Layout from "../../components/layout";
import {useRouter} from 'next/router'
import Link from 'next/link'
import {Categories} from '../../constants/products'
import {Avatar, Button, Card, Menu, PageHeader, Row, Col, Tag, Typography, Breadcrumb, Timeline} from "antd";
import {QuestionCircleOutlined} from '@ant-design/icons'

const {Paragraph, Text, Title} = Typography;
const {Meta} = Card;


const Content = ({children, extraContent}) => (
    <Row>
        <div style={{flex: 1}}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);


export default function Home() {
    const router = useRouter()
    const {slug1} = router.query;
    return (
        <Layout>
            <PageHeader
                title={slug1}
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="green">Active</Tag>}
                extra={[
                    <Button key="3" type="primary" onClick={()=>{
                        zE('messenger', 'open');
                    }}><QuestionCircleOutlined/>Contact Us</Button>,
                ]}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item onClick={() => {
                        router.push(`/`)
                    }}><a>Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {slug1}
                    </Breadcrumb.Item>
                </Breadcrumb>}
            >
                <Content>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        Whether you are renting or buying a house, finding furniture and flat pack furniture that suits
                        your budget and liking is the most tricky part. The most considered features are the style and
                        functionality of the furniture. Here in TreasureBox we have a wide variety of furniture choices
                        from living room furniture, bedroom furniture, dining room furniture, to outdoor furniture. Feel
                        free to mix and match as you wish in order to design your room the way you want it. Buy Online
                        or Visit Our furniture stores.
                    </Paragraph>
                </Content>
            </PageHeader>
            <section style={{margin: '0 24px'}}>
                {
                    Categories[slug1]&&Object.keys(Categories[slug1]).map(slug2 => <>
                        <Row style={{margin: '32px 0 16px 0',cursor:'pointer'}}><Col
                            onClick={() => {
                                router.push(`/${slug1}/${slug2.split(' ').join('-')}`)
                            }}
                        ><Title level={3}>{slug2}</Title></Col></Row>
                        <Row gutter={[16, 32]} justify="space-between">
                            {
                                Categories[slug1][slug2].map(slug3 =>
                                    <Col key={slug3}>
                                        <Card
                                            style={{width: 300,cursor:'pointer'}}
                                            cover={
                                                <img
                                                    alt="example"
                                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                />
                                            }
                                            onClick={() => {
                                                router.push(`/${slug1}/${slug2.split(' ').join('-')}/${slug3.split(' ').join('-')}`)
                                            }}
                                        >
                                            <Meta
                                                title={<Row justify="space-between"><Col>{slug3}</Col></Row>}
                                                description="This is the description"

                                            />
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </>)
                }
            </section>


        </Layout>
    )
}
