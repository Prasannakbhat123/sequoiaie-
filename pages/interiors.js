import Head from "next/head";
import Image from "next/image";

const Interiors = () => {
  return (
    <div className="services_main_container">
      <Head>
        <title>Interiors Service</title>
        <meta name="description" content="Learn more about our interiors service." />
      </Head>
      <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Interiors Service</h2>
        <p>
          We bring a fresh, client-first approach to interior design. Working as consultants who collaborate with you, 
          we put you in control of your project both creatively and financially with full transparency and no advance payments.
        </p>
      </div>
      <div className="services__we__offer">
        <div className="service">
          <Image
            className="img"
            src="/img/project-image-10.jpg"
            alt="Beautiful interiors"
            width={1000}
            height={750}
            quality={100}
          />
          <div className="service__content">
            <h2>Interior Design</h2>
            <p>
              Unlike traditional interior firms, we require no advance payments and follow a budget-first approach where you choose the quality level for each item. 
              We offer transparent real-time tracking of expenses, direct vendor payments, and minimal margins—giving you full control while eliminating stress. 
              Every project we undertake comes through referrals from satisfied clients, reflecting our commitment to integrity and quality.
            </p>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interiors;
