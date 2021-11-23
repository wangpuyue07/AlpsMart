import Layout from "../../components/layout";
import {useRouter} from 'next/router'
import {PageHeader, Typography, Breadcrumb, Tabs, Space} from "antd";
import {
    MoneyCollectOutlined,
    FieldTimeOutlined,
    ShoppingCartOutlined,
    DeliveredProcedureOutlined,
    GlobalOutlined,
    PushpinOutlined,
    FileSearchOutlined,
    SendOutlined
} from '@ant-design/icons';

const {TabPane} = Tabs;
const {Text, Title} = Typography;


export default function Home({session, freshData}) {
    const router = useRouter()
    return (
        <Layout session={session} freshData={freshData}>
            <PageHeader
                title="Shipping Information"
                className="site-page-header"
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item onClick={() => {
                        router.push(`/`)
                    }}><a>Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Shipping Information
                    </Breadcrumb.Item>
                </Breadcrumb>}
            >
                <section style={{margin: '0 24px 128px 24px'}}>
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<span><MoneyCollectOutlined/><span>Delivery Cost</span></span>} key="1">
                            <section>
                                <Title level={4}><MoneyCollectOutlined/>&nbsp;DELIVERY COST</Title>
                                <Text>Normally, the shipping fee for your order depends on the type of product you are
                                    purchasing (the size and weight of your total product).</Text>
                            </section>
                        </TabPane>
                        <TabPane tab={<span><FieldTimeOutlined/><span>Delivery Time</span></span>} key="2">
                            <section>
                                <Title level={4}><FieldTimeOutlined/>&nbsp;DELIVERY TIME</Title>
                                <Text>
                                    <ul>
                                        <li>In general, we would need 24 - 48 hours to complete the dispatch process of
                                            your order and then it would be on the way to you by courier/freight
                                            company, however, our goal is to ensure the fast delivery of your order, we
                                            endeavour to deliver items to the courier company on the day of payment
                                            being made.
                                        </li>
                                        <li>Orders are processed and shipped on business days only (excluding public
                                            holidays).
                                        </li>
                                        <li>Orders received on Saturdays, Sundays and Public Holidays will be processed
                                            on the following business day.
                                        </li>
                                        <li>Once your order is packed and ready, the couriers will then pick up your
                                            parcel directly from our warehouse and aim to deliver it within 2 - 3
                                            working days in general. You will then receive a confirmation email with
                                            tracking number and other important information.
                                        </li>
                                        <li><strong>Standard items</strong> that go with courier would be delivered
                                            within 1 to 3 working days (Rural Areas will take longer and may add extra 2
                                            - 3 working days to the delivery time frame).
                                        </li>
                                        <li><strong>Oversized or overweight items</strong> that go with transport companies would have variable time frames.
                                            <br/><strong>*Oversized or overweight orders, customers are recommended to keep close communication with our Customer Service Team to keep you posted.</strong>
                                        </li>
                                        <li>
                                            <stong>Pre-ordered items</stong> - items showed as Pre-order on the product page or Pre-order Page will be dispatched once the items are available for dispatch.
                                            <br/><strong>*The estimated dispatched time of pre-ordered items will be shown on the product page.
                                            <br/>*You will also find the pre-order items in the order confirmation email.</strong>
                                        </li>
                                        <li>Couriers do not deliver during Weekends and Public Holidays.</li>
                                        <li>Delivery service does not include the assembly of products.</li>
                                        <li>Orders consist of both general and overweight item will be dispatched separately with both courier and transport carrier hence may have multiple tracking numbers and delivery time frames.</li>
                                    </ul>
                                    We cannot guarantee the delivery of your parcel won’t run into any hiccups or delays. For an up to date status of your parcel, we recommend you to contact the courier company directly.
                                </Text>
                            </section>
                        </TabPane>
                        <TabPane tab={<span><ShoppingCartOutlined/><span>Change/Cancel Order</span></span>} key="3">
                            <section>
                                <Title level={4}><ShoppingCartOutlined/>&nbsp;CHANGE / CANCEL ORDER</Title>
                                <Text>If you wish to make any changes such as amendments to your delivery details,
                                    changing item preferences or cancelling your order altogether, you will need to
                                    contact us within 30 minutes of payment being made.
                                    <br/><br/>
                                    If you cancel before your order is dispatched you will receive a full refund.
                                    <br/><br/>
                                    If your items have already been sent then your order can no longer be cancelled.
                                    Please follow the returns process once your order arrives and please note your
                                    delivery fee will not be refunded.
                                    <br/><br/><strong>Order amendments need to be submitted as soon as possible to avoid
                                        items have already been sent!</strong></Text></section>
                        </TabPane>
                        <TabPane tab={<span><SendOutlined/><span>Delivery Method</span></span>} key="4">
                            <section>
                                <Title level={4}><SendOutlined/>&nbsp;DELIVERY METHOD</Title>
                                <Text>Alpsmart currently works with <strong>CourierPost</strong>, <strong>Transfervans
                                    or TIL NZ</strong> to safely ship your item, which varies on the delivery time
                                    frame.</Text></section>
                        </TabPane>
                        <TabPane tab={
                            <span><DeliveredProcedureOutlined/><span>Products Lost/Damaged During Delivery</span></span>}
                                 key="5">
                            <section>
                                <Title level={4}><DeliveredProcedureOutlined/>&nbsp;PRODUCTS LOST/DAMAGED DURING
                                    DELIVERY</Title>
                                <Text>Each product in your order has a tracking number against it. You can use this to
                                    see what status your order is. If you have pre-order products in your order, you may
                                    receive the products at different times.
                                    <br/><br/>
                                    If your parcel is lost or damaged during delivery, please contact us so that we can
                                    assist you.</Text>
                            </section>
                        </TabPane>
                        <TabPane tab={<span><GlobalOutlined/><span>International Shipping</span></span>} key="6">
                            <section>
                                <Title level={4}><GlobalOutlined/>&nbsp;INTERNATIONAL SHIPPING</Title>
                                <Text>
                                    We do not ship internationally currently. We only ship to addresses in New
                                    Zealand.</Text>
                            </section>
                        </TabPane>
                        <TabPane tab={<span><PushpinOutlined/><span>Multiple Delivery Addresses Per Order</span></span>}
                                 key="7">
                            <section>
                                <Title level={4}><PushpinOutlined/>&nbsp;MULTIPLE DELIVERY ADDRESSES PER ORDER</Title>
                                <Text>We do not offer the service to ship to multiple addresses at present.
                                    <br/><br/>
                                    Kindly contact us at <a
                                        href={'mailto:contactus@alpsmart.co.nz'}>contactus@alpsmart.co.nz</a> for any
                                    enquiries. Also, you can contact us via online chat service on the page of bottom
                                    right corner or phone us.
                                    <br/><br/>
                                    Thank you and enjoy shopping!</Text>
                            </section>
                        </TabPane>
                        <TabPane tab={<span><FileSearchOutlined/><span>Track Your Order</span></span>} key="8">
                            <section>
                                <Title level={4}><FileSearchOutlined/>&nbsp;TRACK YOUR ORDER</Title>
                                <Text><strong>Tracking Links</strong> - You can track your parcel directly by clicking
                                    on the tracking link provided in the emails. You can also use the tracking number to
                                    track in NZ Post or TIL NZ transport company. (see the detail on DELIVERY METHOD)
                                    <br/><br/>
                                    <strong>My account</strong> - If you have an account, simply sign in and go to the
                                    ‘My Account’ section to see updates on all your orders.
                                    <br/><br/>
                                    <strong>Not Received Any Tracking Email / Without Account</strong> - If you don't
                                    have an account under Alpsmart or receiving tracking email failed, just simply click
                                    here and provide the related information (eg. order number, order email) about your
                                    order to see updates.
                                    <br/><br/>
                                    <strong>*Order Number will provided on your confirmation email which send after
                                        completed your order.</strong>
                                    <br/><br/>
                                    <strong>Not Received Any Confirmation Email</strong> - Kindly contact us at <a
                                        href={'mailto:contactus@alpsmart.co.nz'}>contactus@alpsmart.co.nz</a> for resend
                                    the confirmation email.
                                    <br/><br/>
                                    Notice: For some large items that are delivered via the Transfervans transport
                                    company which will contact you directly to arrange an appropriate delivery time.
                                    Then, you may track invalid in the emails.</Text>
                            </section>
                        </TabPane>
                    </Tabs>
                </section>
            </PageHeader>


        </Layout>
    )
}
