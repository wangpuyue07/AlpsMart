import Layout from "../../components/layout";
import {useRouter} from 'next/router'
import Link from 'next/link'
import {Categories} from '../../constants/categories'
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


export default function Home({session,freshData}) {
    const router = useRouter()
    let {slug1} = router.query;
    if(!slug1) return null;
    slug1 = slug1.toLowerCase();
    const slug1Name = slug1.split('-').join(' ');
    return (
        <Layout session={session} freshData={freshData}>
            <PageHeader
                title={Categories[slug1Name].name}
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
                        {Categories[slug1Name].name}
                    </Breadcrumb.Item>
                </Breadcrumb>}
            >
                {
                    Categories[slug1Name]&&<Content>
                        <Row><Col><img src={Categories[slug1Name]&&Categories[slug1Name].images[0]}/></Col></Row>
                        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }} >
                            <div dangerouslySetInnerHTML={{ __html:Categories[slug1Name].description}}></div>
                        </Paragraph>
                    </Content>
                }

            </PageHeader>
            <section style={{margin: '0 24px 128px 24px'}}>
                {
                    Categories[slug1Name]&&Object.keys(Categories[slug1Name].subCategories).map(slug2Name => <>
                        <Row style={{margin: '32px 0 16px 0',cursor:'pointer'}}><Col
                            onClick={() => {
                                router.push(`/${slug1}/${slug1Name.split(' ').join('-')}`)
                            }}
                        ><Title level={3}>{Categories[slug1Name].subCategories[slug2Name].name}</Title></Col></Row>
                        <Row gutter={[16, 32]} justify="space-between">
                            {
                                Object.keys(Categories[slug1Name].subCategories[slug2Name].subCategories).map(slug3Name =>
                                    <Col key={slug3Name}>
                                        <Card
                                            style={{width: 300,cursor:'pointer'}}
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].images[0]}
                                                />
                                            }
                                            onClick={() => {
                                                router.push(`/${slug1}/${slug2Name.split(' ').join('-')}/${slug3Name.split(' ').join('-')}`)
                                            }}
                                        >
                                            <Meta
                                                title={<Row justify="space-between"><Col>{Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].name}</Col></Row>}
                                                description={<div dangerouslySetInnerHTML={{ __html: Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].description }}></div>}

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
