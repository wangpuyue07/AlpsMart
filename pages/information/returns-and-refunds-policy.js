import Layout from "../../components/layout";
import {useRouter} from 'next/router'
import {PageHeader, Anchor, Typography, Breadcrumb, Tabs, Space} from "antd";
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
                title="Returns & Refunds Policy"
                className="site-page-header"
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item onClick={() => {
                        router.push(`/`)
                    }}><a>Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Returns & Refunds Policy
                    </Breadcrumb.Item>
                </Breadcrumb>}
            >
                <section style={{margin: '0 24px 128px 24px'}}>
                    <Anchor affix={false} offsetTop={64} >
                        <Anchor.Link href="#info1"
                                     title="What happens if you changed your mind after purchase?"/>
                        <Anchor.Link href="#info2"
                                     title="What happens if you received a faulty / damaged item?"/>
                        <Anchor.Link href="#info3"
                                     title="What happens if you received an incorrect item/s?"/>
                        <Anchor.Link href="#info4"
                                     title="What happens if you find only partial order arrived?"/>
                        <Anchor.Link href="#contact-details" title="Our Contact Details"/>
                        <Anchor.Link href="#policy" title="Pick Up Returns & Refunds Policy"/>
                        <Anchor.Link href="#change-of-mind" title="Change of Mind"/>
                        <Anchor.Link href="#faulty-items" title="Faulty Items"/>
                    </Anchor>
                    <div id="info1" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>What happens if you changed your mind after purchase?</Title>
                        <Text>
                            At Alpsmart.co.nz you deserve to shop with worries-free!
                            <br/><br/>
                            We understand not every single purchase could match your expectations even it is due to
                            simple reasons such as you only just realised you have made an incorrect purchase. No
                            worries! As long as you fit into the conditions listed below and followed the required step
                            on contacting our support team beforehand, then there is no questions asked. We will be
                            providing full value of the product store credit.
                            <br/><br/>
                            <p>Change-of-mind Return Terms & Conditions:</p>
                            <ul>
                                <li>
                                    You will have to first send us an email via contactus@treasurebox.co.nz to notify
                                    our
                                    Customer Service Team your returning intention along with the item/s you wish to
                                    return
                                    within <strong>30 days of purchase</strong>
                                </li>
                                <li>Our Customer Service Team will then approve this return if applicable and notify you
                                    a
                                    returning address
                                </li>
                                <li>
                                    The returning item/s must be in an unused, unopened condition and are 100% suitable
                                    for
                                    resale
                                </li>
                                <li>
                                    TreasureBox will not take the risk for the item/s loss or damage during the
                                    returning
                                    transit and the store credit will only be issued once the item/s has been accepted
                                    into our
                                    warehouse
                                </li>
                                <li>
                                    Refund of store credit will not include any shipping fees
                                </li>
                                <li>
                                    Change-of-mind returning condition does not apply to products such as edible
                                    products,
                                    products that in relation of personal hygiene, fragrances, skin care, cosmetics,
                                    personalised products; also does not apply on free shipping promotional products and
                                    clearance products
                                </li>
                                <li>
                                    A product cannot be returned if it has been engraved, modified, damaged, altered, or
                                    sized
                                    If you would like to return an item/s that has been purchased to you as a gift, then
                                    the
                                    store credit will be issued to the original purchaser
                                </li>
                                <li></li>
                            </ul>
                            <p>
                                <srtong>Please note that if your returned item/s does not meet the above listed
                                    conditions, your
                                    returning claim will be declined and you could only be asking for the item/s to be
                                    returned
                                    to you at your cost. In this case, if the returning shipping fee is not paid within
                                    30 days
                                    after our Customer Service Team notified you the declined claim under this policy,
                                    then the
                                    product will be permanently disposed of. If you would like to know more and to
                                    ensure that
                                    your returning item/s meets the condition, send us an email now via
                                    <a href={'mailto:contactus@alpsmart.co.nz'}>contactus@alpsmart.co.nz</a>, our
                                    friendly Customer Service Team will be happy to help.
                                </srtong>
                            </p>
                        </Text>
                    </div>
                    <div id="info2" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>What happens if you received a faulty / damaged item?</Title>
                        <Text>
                            At Alpsmart, our team is trying our best to offer every item sold in its perfect condition
                            however, should you have an issue with a product, we are happy to honour our obligations to
                            you under both the Consumer Guarantees Act 1993 and Fair Trading Act 1996. These obligations
                            are in addition to our returns policy (discussed above). Most of TreasureBox products
                            carry <strong>90 days warranty</strong> (unless stated otherwise).
                            <br/><br/>
                            <Title level={5}>Consumer Guarantees Act 1993</Title>
                            The Consumer Guarantees Act sets out minimum standards for the products we sell. We may
                            repair, replace or refund any product in accordance with the Act if that product is faulty
                            or otherwise fails to meet the standards imposed by the Act.
                            <Title level={5}>Fair Trading Act 1986</Title>
                            The Fair Trading Act is designed to protect customers from being misled, either
                            intentionally or unintentionally. This applies to all aspects of the promotion and sale of
                            goods and services including: pricing, where the product was made, where the product is
                            from, the meeting of New Zealand safety standards, the availability of products in store and
                            the sales techniques used.
                            <br/><br/>
                            If item/s received that found to be not working or faulty; you are required to make a
                            contact with us as soon as possible via contactus@treasurebox.co.nz for our Customer Service
                            Team to advise you what’s next.
                            <br/><br/>
                            Most of cases, we will try our best to arrange a replacement or a replacement part/s for you
                            if applicable or otherwise a full or partial refund will be issued.
                            <br/><br/>
                            We will be processing a faulty item/s return with conditions below:
                            <ul>
                                <li>You are required to contact us via contactus@alpsmart.co.nz to provide us a
                                    description of the issue and to provide us a photography of the faulty item/s or
                                    part/s involved within the <strong>90 days</strong> upon receiving the parcel
                                </li>
                                <li>Subject to the provisions of the Consumer Guarantees Act 1993 and the Fair Trading
                                    Act 1986, we may repair, replace or refund any product that does not meet the
                                    standards set out in those Acts.
                                </li>
                                <li>Our Customer Service Team and our technician will determine your case based on the
                                    fact and evidence you have provided and your claim may be granted
                                </li>
                                <li>We will <strong>not</strong> accept any return without approval from our Customer
                                    Service Team
                                </li>
                                <li>Please note that we may require you to demonstrate the problem and we do reserve the
                                    right to test on the returned product which please kindly allow up to <strong>3-4
                                        working days</strong> to process
                                </li>
                                <li>The faulty product will have to be returned within 14 days after approval – We will
                                    be arranging prepaid returning courier tickets/ bags for you at our cost along with
                                    returning procedures provided
                                </li>
                                <li>All the returning product/s are require to be packed in the original, unmarked
                                    packaging with all the accessories, tools, user manual and invoice included
                                </li>
                                <li>Please note that if you have damaged or disposed the original packaging or have not
                                    included the accessories that originally came with the product, only a partial
                                    refund will be granted
                                </li>
                                <li>You will be required to book for a courier pick up or else to arrange
                                    an <strong>approved</strong> drop-off on site with our Customer Service Team
                                </li>
                                <li>Our Customer Service Team will then make a decision if a claim will be granted after
                                    receiving your returned product
                                </li>
                                <li>In the case of approved refund, it will be issued either as store credit or direct
                                    credit bank transfer
                                </li>
                            </ul>
                            <p>Please note if the test result was then found being misrepresented by you or it was due
                                to misunderstanding of user instructions or incorrect handling then the shipping of
                                returning this product back to you will be at your cost. In this case, if the returning
                                shipping fee is not paid within <strong>30 days</strong> after our Customer Service Team
                                notified you the declined claim under this policy, then the product will be permanently
                                disposed of. If you would like to know more and to ensure that your returning item/s
                                meets the above conditions, send us an email now via contactus@alpsmart.co.nz, our
                                friendly Customer Service Team will be happy to help.</p>
                        </Text>
                    </div>
                    <div id="info3" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>What happens if you received an incorrect item/s?</Title>
                        <Text>
                            Please kindly allow us to apologise for the incorrect item/s or item/s that you did not make
                            a purchase of being dispatched. You could verify the item/s you have received by matching
                            the product barcode locating on top of the package with the product code stated on your
                            invoice.
                            <ul>
                                <li>Please contact our Customer Service Team via contactus@alpsmart.co.nz to report this
                                    issue within the 14 days upon receiving the item/s.
                                </li>
                                <li>We will be arranging prepaid returning courier tickets/ bag for you at our cost
                                    along with returning procedures provided
                                </li>
                                <li>The incorrect item/s will have to be returned within 14 days after receiving the
                                    prepaid courier ticket/ bag
                                </li>
                                <li>Please note all the returning of incorrect item/s must be in an unused and unopened
                                    condition that are 100% suitable for resale - with undamaged and unmarked packaging
                                </li>
                                <li>You will be required to book for a courier pick up or else to arrange an approved
                                    drop-off on site with our Customer Service Team
                                </li>
                            </ul>
                            <p>Please note your invoiced item/s will be dispatched along with the prepaid courier
                                ticket/bag OR will be further dispatched once we received your returned incorrect
                                product - which this will be determined by our Customer Service Team and our team will
                                inform this procedure to you before the process.</p>
                            <br/><p>Failing on meeting the above conditions will be treated as you have purchased this
                            particular item/s. We will not be refunding any shipping cost that you have spent on
                            returning the incorrect item/s without getting approved by our Customer Service Team.</p>
                            <br/><p>this is the case, please do not panic as our Customer Service Team will be more than
                            happy to help you and to guide you throughout the returning procedures, all you need to do
                            is to contact us now via contactus@alpsmart.co.nz and once again we would like to apologise
                            for all the inconvenience. Thank you for your kind understanding.</p>
                        </Text>
                    </div>
                    <div id="info4" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>What happens if you find only partial order arrived?</Title>
                        <Text>
                            <p>This could be caused by various of different reasons however please trust our Customer
                                Service Team will help you to find out the reason behind it.</p>
                            <br/><p>For some products, they are shipped as separated parcels which you may have more
                            than one tracking per order and for most of cases, they will arrive at the same time. If
                            this is not the case, please contact our Customer Service Team via contactus@alpsmart.co.nz
                            to find out details for each of the tracking. Or else, our Customer Service Team will
                            provide you the courier company used for you to get in touch with the courier company to
                            ensure you receive your first-hand transit information.</p>
                            <br/><p>Occasionally, things turned out to be our mistake which please kindly allow us to
                            apologise first. If this is the case, our Customer Service Team may require you to provide
                            photography of everything you have received in order to send a re-dispatch request
                            internally. We will then dispatch your missing item for you within 48 hours upon the
                            confirmation from our Customer Service Team.</p>
                        </Text>
                    </div>
                    <div id="contact-details" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>Our Contact Details</Title>
                        <Text>In order to return a product, please contact us via the “Contact Us” form at
                            www.treasurebox.co.nz, or via contactus@alpsmart.co.nz with your name, order number and a
                            summary of the issue. We’ll then be in touch within two business days to arrange for the
                            return of any product in accordance with this Returns & Refunds Policy.</Text>
                    </div>
                    <div id="policy" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>Pick Up Returns & Refund Policy</Title>
                        <Text>
                            We understand sometimes things could go wrong; therefore we are more than happy to accept
                            your return within 30 days of purchase with all the Returns and Refund Policies met.
                            <br/><br/>You are welcome to return your items purchased both online or onsite pickup.
                            <ul>
                                <li>
                                    For items purchased onsite, they could only be returned or exchanged back onsite and not via post.
                                </li>
                                <li>
                                    Items that are on sale or clearance cannot be returned or exchanged.
                                </li>
                                <li>
                                    Items purchased must be returned within 30 days of purchase with proof of purchase.
                                </li>
                                <li>
                                    Shipping cost will not be refunded if there are other items purchased together on the original invoice.
                                </li>
                                <li>
                                    Refund credit will be issued to you via bank credit transfer and you will be required to leave corresponding details onsite.
                                </li>
                                <li>
                                    If you request for replacement instead of refund, please ensure a pre-arrangement is made via email or through phone call otherwise replacement will not be issued onsite.
                                </li>
                            </ul>
                        </Text>
                    </div>
                    <div id="change-of-mind" style={{marginTop: 32, marginBottom: 64}}>
                        <Title level={4}>Change of Mind</Title>
                        <Text>
                            <ul>
                                <li>
                                    No shipping cost will be refunded and refund will only be purchase price.
                                </li>
                                <li>
                                    Returning items must be unopened, unused with clean original packaging and all accessories.
                                </li>
                                <li>
                                    We do not accept returns of items such as edible products, products that in relation of personal hygiene, fragrances, skin care, cosmetics, personalised products, sale and clearance items.
                                </li>
                            </ul>
                        </Text>
                    </div>
                    <div id="faulty-items" style={{marginTop: 32, marginBottom: 64}} >
                        <Title level={4}>Faulty Items</Title>
                        <Text>
                            <ul>
                                <li>
                                    Full refund will be issued including paid shipping with proof of purchase within 30 days of purchase.
                                </li>
                            </ul>
                        </Text>
                    </div>
                    <p>**This Pick Up Returns and Refunds Policy was last updated on 1st of July 2016.</p>
                </section>
            </PageHeader>


        </Layout>
    )
}
