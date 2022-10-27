import Image from "next/image";
import { Container, Layout, PortfolioCover } from "components";
import lineBusinessTrip from "public/images/portfolio/line-business-trip.jpg";
import lineWorking from "public/images/portfolio/line-flash-sale-working.png";
import lineMockup01 from "public/images/portfolio/line-flash-sale-mockup-01.png";
import lineMockup02 from "public/images/portfolio/line-flash-sale-mockup-02.png";

const lineFlashSale = () => {
  return (
    <Layout title="LINE Flash Sale | Ken Huang">
      <section>
        <img src="/images/portfolio/line-5th-anniversary.png" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioCover
          date="2018 Feb - 2018 October"
          tags={["Front-end", "Mobile"]}
          title="LINE Flash Sale"
          duration="6 months"
          myRole="Front-end lead"
          responsibility="End to end Front-end developer"
          company="Uitox, Taipei, Taiwan & 
          Naver LINE, South Korea"
        />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Situation</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>LINE Flash Sale is the first E-commerce service of LINE in Asia. I was very excited to be a part of this team. It was my proud project for LINE when I worked in Uitox and business trip in South Korea.</p>
            <p>I delivered all of the product design features, including category experience, favorite brands, multiple item promotion and order status during the past three months. I was responsible for interaction design, planning, discussing with stakeholders, prototyping and ensuring iOS and Android platform experience is good enough.</p>
          </div>
          <Image src={lineBusinessTrip} alt="LINE HQ in Korea" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Task & Action</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>In the beginning, we will have a kick-off meeting with business units (LINE HQ). After we understand their strategy and vision, we do not just start design and sketch, we want to learn from users and find out users pain point. we want to know why our user wants to shopping and their shopping behavior. So we start walking their daily lives, visit their favorite spots.</p>
            <p>After that, we might start to implement our features. But the most important things is to understand who we are designing for. What kind of problems are we trying to solve? The designer will be faced with tons of challenges. If usability test has a lot of good feedback and product managers want to increase the user’s retention rate, conversion rate, rating and daily active user, then the solution will probably want to add some key features to see if the business matrix goes well or not. And some of the features might provide better browsing experience such as better searching experience, category and filter feature. Therefore, we've selected some popular features or the most important feature from PC platform into app version.</p>
          </div>
          <Image src={lineWorking} alt="work with LINE employee in Korea" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Result</h3>
        <p className="text-gray-500">In shopping team, I need to clearly deliver core value for new app features. Once the feature to be implemented is confirmed, I always comes out the UI mockup, animation and prototype by JavaScript and CSS very quickly, so that team members can discuss following details more easily. Flash Sale design and favorite brand list for instance, I made the prototype and animation with real front-end environment as starts, so that engineers can have more detail discussion by referring to these designs.</p>
      </Container>
      <Image src={lineMockup01} alt="work with LINE employee in Korea" className="mt-20"/>
      <Image src={lineMockup02} alt="work with LINE employee in Korea" />
    </Layout>
  )
}

export default lineFlashSale;