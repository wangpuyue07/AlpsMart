import Layout from "../../components/layout";
import {useRouter} from 'next/router'
import {PageHeader,Typography, Breadcrumb} from "antd";

const {Text, Title} = Typography;


export default function Home({session, freshData}) {
    const router = useRouter()
    return (
        <Layout session={session} freshData={freshData}>
            <PageHeader
                title="Terms & Conditions"
                className="site-page-header"
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item onClick={() => {
                        router.push(`/`)
                    }}><a>Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Terms & Conditions
                    </Breadcrumb.Item>
                </Breadcrumb>}
            >
                <section style={{margin: '0 24px 128px 24px'}}>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>General</Title>
                        <Text>These general terms and conditions of use (“<strong>Terms of Use</strong>”) apply to all users of this website.  In the future, these Terms of Use may be different so we recommend that you read these Terms of Use carefully each time you agree to them.  You acknowledge and accept that your use of this website indicates acceptance of these Terms of Use.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Intellectual Property</Title>
                        <Text>The contents of this website are the copyright of Alps Technology Information Limited, trading as alpsmart.co.nz (“<strong>Alpsmart</strong>”) unless otherwise specified.  You must not copy, adapt, reproduce, display or distribute the contents of this website in whole or in part for any commercial purpose without our prior written approval.  You may copy, reproduce, print and use the contents of this website for personal or internal business purposes provided you include our copyright notice acknowledging our ownership of the copyright in the contents of this website.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Disclaimer</Title>
                        <Text>We have endeavoured to ensure that the contents of this website are complete, true and accurate.  However, our liability for providing incomplete, untrue or inaccurate information on this website is limited to:</Text>
                        <ul><li>an amount not exceeding the value of products you have purchased from us as a result of the information on this website being incomplete, untrue or inaccurate.</li>
                            <li>compensation that you are entitled to recover under the Consumer Guarantees Act 1993 or Fair Trading Act 1986.</li></ul>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Liability</Title>
                        <Text>To the extent permitted by law, we do not accept any responsibility or liability arising from or in connection with your use of this website or the information contained in it.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Indemnity</Title>
                        <Text>We indemnify you, and you indemnify Treasurebox, its directors, employees, contractors and agents, in respect of any claim, liability, loss, damage, cost or expense that either of us suffers or incurs due to the other having breached these Terms of Use.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Security</Title>
                        <Text>We indemnify you, and you indemnify Treasurebox, its directors, employees, contractors and agents, in respect of any claim, liability, loss, damage, cost or expense that either of us suffers or incurs due to the other having breached these Terms of Use.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Indemnity</Title>
                        <Text>Please pay attention that we may contact you via phone call or email after receiving your payment for security check purpose. We may keep your order status as pending if we cannot reach you or do not hear from you, and we want to apologise for any inconvenience and delays this may cause.</Text>
                        <Text>All pickup orders, please present your photo ID with your corresponding credit card as a verification of the payment, we reserve the right to stop trading if we believe your order have potential risk of a fraud.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Linking</Title>
                        <Text>This website includes links to third party websites.  We have no control over linked sites and we are not responsible for the contents of such sites.  We do not endorse or make any representations about the accuracy of information or regarding any products or services found on any linked sites.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Viruses and Similar Devices</Title>
                        <Text>We do not warrant that the contents of this website or any linked sites, including any downloadable files, are free from viruses, Trojan horses, worms or similar devices and we will not be responsible for any loss, damage, cost or expense suffered or incurred as a result of any content or files downloaded from this website or any linked sites.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Site Access</Title>
                        <Text>This site is controlled and operated from within New Zealand. We make no representation or warranty that the content of or products sold from in this site is or are appropriate or available for use in other countries or that such content or products satisfies the laws of other countries. If you choose to access this site from countries outside New Zealand, you do so of your own initiative. You are responsible for ensuring that your access to this site is not illegal or prohibited and for your own compliance with applicable local laws.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Your Account</Title>
                        <Text>You must establish an account on this website prior to the purchase of any product.  We retain absolute discretion to refuse to allow an account to be established or to terminate an account.  It is your responsibility to correctly provide and maintain all particulars associated with your account, including your telephone number, email, delivery, and billing address. Any incorrect information provided may lead to a delay in delivering the product ordered by you or non-delivery of the product.  You are responsible for the confidentiality of your account password.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Free Giveaway Items</Title>
                        <Text>All free giveaway items are non-replaceable, and non-transferrable. Giveaway items cannot be redeemed for cash, or returned for a different item of choice.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Free Shipping</Title>
                        <Text>Free shipping excludes products that are on clearance.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Coupons & Gift Vouchers</Title>
                        <Text>Coupon codes are:</Text>
                        <ul>
                            <li>limited to <strong>one</strong> coupon per customer</li>
                            <li>indicated for <strong>single</strong> use only</li>
                            <li>to be redeemed from Treasurebox website only</li>
                            <li>are valid for a limited time only, must be redeemed before the expiry date specifed in the offer - expiry dates will be specified along with the advertisement of the promotion</li>
                            <li>cannot be redeemed for cash, balances, or be transferred to new coupons</li>
                            <li>cannot be used in conjunction with any other promotional offers e.g. daily deals, and/or weekly sale promotions</li>
                            <li>Any extra costs surpassing the value of the coupon code will be paid by the redeemer.</li>
                        </ul>
                        <Text>We have all authorities to change or cancel coupon codes at any time. We also have all authorities to change these terms and conditions without prior notice.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Privacy</Title>
                        <Text>You acknowledge that you have read, understood and agree to the terms of our Privacy Policy.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Applicable Law</Title>
                        <Text>This website and its contents and its use by you is governed by the laws of New Zealand and any dispute arising in relation to this website will be determined by the Courts of New Zealand.</Text>
                    </div>
                    <div style={{marginBottom:36}}>
                        <Title level={4}>Contact for Further Information</Title>
                        <Text>If you have any queries, concerns or complaints regarding this website or these Terms of Use, you should contact us via the “Contact Us” at <strong><a href="https://www.alpsmart.co.nz/"><span style={{color: '#5cbad5', textDecoration: 'underline'}}>www.alpsmart.co.nz</span></a></strong>, or by email at <strong><a href="mailto:contactus@treasurebox.co.nz"><span style={{color: '#5cbad5', textDecoration: 'underline'}}>contactus@treasurebox.co.nz</span></a></strong>.</Text>
                    </div>
                    <Text>**These Terms and Conditions were last updated on 10th of June 2016.</Text>
                </section>
            </PageHeader>



        </Layout>
    )
}
