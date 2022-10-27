import Image from "next/image";
import { Container, H1, H3, Layout, PortfolioCover, PortfolioOverview, PortfolioProcess } from "components";

import affinityMapping from "public/images/portfolio/shopee-affinity-map.jpg";
import cardSorting from "public/images/portfolio/shopee-workshop-card-sorting.jpg";
import sketchStorming from "public/images/portfolio/shopee-workshop-sketch-vote.jpg";
import wireframeOverall from "public/images/portfolio/shopee-amp-pdp-wireframe-overall.png";
import wireframeFirst from "public/images/portfolio/shopee-amp-pdp-wireframe-voucher.png";
import wireframeFourth from "public/images/portfolio/shopee-amp-pdp-wireframe-recommendation.png";
import mockup01 from "public/images/portfolio/shopee-amp-pdp-mockup-01.png";
import mockup02 from "public/images/portfolio/shopee-amp-pdp-mockup-02.png";
import mockupError from "public/images/portfolio/shopee-amp-pdp-mockup-error.png";

const shopeeProductDetailPageRefactor = () => {
  return (
    <Layout title="Shopee Product Detail Page Refactor | Ken Huang">
      <section>
        <img src="/images/portfolio/shopee-workshop-01.jpg" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioCover
          date="2018 Feb - 2018 October"
          tags={["UX/UI Design", "Mobile", "Research", "Workshop"]}
          title="Shopee Product Detail Page Redesign"
          duration="6 months"
          myRole="Product Designer"
          responsibility="End to end UX/UI Developer"
          company="Shopee, Singapore"
        />
        <PortfolioOverview
          overview={[
            {
              title: "01. Objective",
              description: "The team wanted to redesign the existing TrendMicro mobile security for international. Also, we wanted to refactor our infrastructure for the future scale.",
            },
            {
              title: "02. Role & Deliverables",
              description: "In this project, I worked closely with Designers, PM and four engineers. I was responsible for the end to end web design, from mobile first to desktop responsive web design and API handling.",
            },
            {
              title: "03. Challenges",
              description: "This project had quite a few technical dependencies with other teams & products, we also needed to deal with many prioritizations to make sure we can deliver MVP on time.",
            },
            {
              title: "04. Outcome & Impact",
              description: "We launched the MVP in 3 months that increased our overall metrics significantly, especially it decreased the page loading time by 32%. We also received a lot of positive feedback from users.",
            },
          ]}
        />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Background</h3>
        <div className="space-y-4 text-gray-500">
          <p>In order to help our users browsing service in south east area, especially in Indonesia, there are not enough internet infrastructure to support friendly web service, we have to make it better.</p>
          <p>There were some reasons that drove this project:</p>
          <ol className="list-decimal pl-4 space-y-2">
            <li><strong>Business:</strong> We wanted to reduce the drop-off rate of web pages, and increase discoverability from Google search.</li>
            <li><strong>Technology:</strong> The previous app design and architecture was difficult to fit low-bandwidth internet environment like Indonesia. It need to load a page around 11 seconds.</li>
            <li><strong>User’s pain points:</strong> There is too much information for many South-east-Asians use the older smartphone with small screen size. A lot of our users in Indonesia are hard to filter the more meaningful thing they care. </li>
          </ol>
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Design Process</h3>
        <PortfolioProcess />
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">01. Research</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <h4 className="text-2xl">Data Analytics</h4>
            <p>Via Google analytics, we pick some statistics up and figure out what might be helpful to measure success and pain point.</p>
            <p>There are some data we might track or enhance:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Page traffic</li>
              <li>Bounce rate</li>
              <li>Page load time</li>
              <li>New users sessions</li>
              <li>Average view time</li>
            </ul>
            <p>Base on the above data, we found the product page which has too long load time, high bounce rate for lots of new users than other pages. In E-commerce, the product page is the one of the most important pages for conversion rate. So we decide to improve this page for higher priority, and also make a product roadmap to summarize that maps out the vision and direction.</p>
          </div>
          <img src="/images/portfolio/shopee-overall-sessions.png" alt="" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">02. Design Sprint</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers. Developed at GV, it’s a “greatest hits” of business strategy, innovation, behavior science, design thinking, and more—packaged into a battle-tested process that any team can use.</p>
            <p>Working together in a sprint, you can shortcut the endless-debate cycle and compress months of time into a single week. Instead of waiting to launch a minimal product to understand if an idea is any good, you’ll get clear data from a realistic prototype. The sprint gives you a superpower: You can fast-forward into the future to see your finished product and customer reactions, before making any expensive commitments.</p>
          </div>
          <img src="/images/portfolio/sprint-diagram.png" alt="" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl">Affinity Mapping</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>Each participant watched user interview videos from 1 of 6 different user segments and came prepared with their observations written on post-it notes.</p>
            <p>Affinity mapswere then used to organize and categorize these many different data points, from which common themes and relationships surrounding the observations emerged — even uncovering previously hidden ones.</p>
            <h4 className="text-2xl">Solution Discovery</h4>
            <p>The second half of the day focused on devising a design that met different user groups’ needs. To do this, participants were regrouped so each group had a mix of user personas.</p>
          </div>
          <Image src={affinityMapping} alt="affinity mapping" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl">Card Sorting</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>Teams were given cards with components of Shopee’s digital interface and tasked to first classify, then sort according to importance. The open card sort method allowed participants to explore each others’ conceptions of user mental models. From this, teams were able to organically determine their design guidelines for the next phase of the sprint.</p>
            <p>And here is the output:</p>
            <ol className="list-decimal pl-4 space-y-2">
              <li>Product image</li>
              <li>Basic product information (e.g product name, price)</li>
              <li>Product details</li>
              <li>Comments sections</li>
              <li>Rating section</li>
              <li>Shipping details</li>
              <li>Promotion information (e.g voucher)</li>
              <li>Seller info</li>
              <li>Wholesale details</li>
              <li>Recommendation</li>
            </ol>
          </div>
          <Image src={cardSorting} alt="workshop card sorting" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl">Sketch Storming</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>Participants first put pen to paper and individually sketched their ideal product, then sketched a single mock-up as a group. The insights that emerged from the diverse set of participants will no doubt be invaluable to future product development and innovations.</p>
          </div>
          <Image src={sketchStorming} alt="workshop sketch storming" />
        </div>
      </Container>
      <section>
        <hr className="my-24" />
        <Container>
          <h3 className="text-center mb-12 text-3xl font-bold">03. Execution</h3>
          <div className="space-y-4 text-gray-500">
            <p>Base on the sketch storming of design sprint, we could start from product detail page. My goal is to solve all the problems and implement the idea of design.</p>
          </div>
        </Container>
        <Image src={wireframeOverall} alt="wireframe overall" className="my-20" />
        <Container>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-500">
              <h4 className="text-2xl">First Screen</h4>
              <p>According to the card sorting and user survey, beyond the images, product page needs to give high-level information of the product right off the bat.</p>
              <p>That information includes:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Product title</li>
                <li>Price</li>
                <li>Features and components</li>
                <li>CTA</li>
                <li>Customization options</li>
              </ul>
              <p>Ideally, all of this information lives above the fold. That isn’t always possible (in fact, it is rarely possible). The solution here is to extraction the most meaningful wording of each service. Like voucher, via interview survey, there are few people need it, but which they actually need. We make it as a small block, only display the discount percentage, if they really like to know in detail (expire date, min speed, capped), they can click to see more in detail.</p>
            </div>
            <Image src={wireframeFirst} alt="wireframe first screen" />
          </div>
          <hr className="my-24" />
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-500">
              <h4 className="text-2xl">Fourth Screen: Recommendation</h4>
              <p>There are 3 recommendation sections, We put these under the product information, it can help users find out more ideal, similiar, cheaper products. For You May Also Like section, it relate the users browse history and current product, make people more choice.</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>From the same shop</li>
                <li>Similar products</li>
                <li>You may also like</li>
              </ul>
            </div>
            <Image src={wireframeFourth} alt="wireframe fouth screen" />
          </div>
          <hr className="my-24" />
          <h3 className="text-center mb-12 text-3xl">Visual Design</h3>
          <p>Instead of using heavy text for an overview (this is *not* the description), we use colors, fonts, and icons. And we could only fetch some representative signal for that information.</p>
        </Container>
        <Image src={mockup01} alt="mockup 01" className="my-20" />
        <Image src={mockup02} alt="mockup 02" className="my-20" />
        <Image src={mockupError} alt="mockup error" className="my-20" />
      </section>
    </Layout>
  )
}

export default shopeeProductDetailPageRefactor;