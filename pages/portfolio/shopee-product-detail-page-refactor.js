import Link from "next/link";
import Image from "next/image";
import { Container, H1, H3, Layout, PortfolioCover, PortfolioOverview, PortfolioProcess } from "components";

const shopeeProductDetailPageRefactor = () => {
  return (
    <Layout title="Shopee Product Detail Page Refactor | Ken Huang">
      <section>
        <img src="/images/portfolio/shopee-workshop-01.jpg" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioCover
          date="2018 Feb - 2018 October"
          tags={["UX/UI Design", "Mobile", "Research", "Workshop", "PM"]}
          title="Product Detail Page Refactor"
          duration="6 months"
          myRole="Product Designer"
          responsibility="UX/UI, project management"
          company="Shopee, Singapore"
        />
        <PortfolioOverview
          overview={[
            {
              title: "01. Objective",
              desc: "The team wanted to refactor the existing mobile product detail page for South Ease area customers to get better user experience.",
            },
            {
              title: "02. Role & Deliverables",
              desc: "Not only an end-to end UX/UI designer, but also as a PM to ",
            },
            {
              title: "03. Challenges",
              desc: "This project had quite a few technical dependencies with other teams & products, we also needed to deal with many prioritizations to make sure we can deliver MVP on time.",
            },
            {
              title: "04. Outcome & Impact",
              desc: "We launched the MVP in 3 months that increased our overall metrics significantly, especially it increased the users satisfaction, decrease drop-off rate and page rank. We also received a lot of positive feedback from users.",
            },
          ]}
        />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Background</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>In order to help our users browsing service in south east area, especially in Indonesia, there are not enough internet infrastructure to support friendly web service, we have to make it better.</p>
            <p>There were some reasons that drove this project:</p>
            <ol className="list-decimal pl-4 space-y-2">
              <li>
                <strong className="text-black">Business:</strong> We wanted to reduce the drop-off rate of web pages, and increase discoverability from Google search.</li>
              <li>
                <strong className="text-black">Technology:</strong> The previous app design and architecture was difficult to fit low-bandwidth internet environment like Indonesia. It need to load a page around 11 seconds.</li>
              <li>
                <strong className="text-black">User’s pain points:</strong> There is too much information for many South-east-Asians use the older smartphone with small screen size. A lot of our users in Indonesia are hard to filter the more meaningful thing they care. </li>
            </ol>
          </div>
          <Image src={require('public/images/portfolio/customer-pain-points.jpg')} alt="customer pain points" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Design Process</h3>
        <PortfolioProcess data={[
          {
            title: "Research",
            desc: "Data Analytics, user survey",
          },
          {
            title: "Design sprint",
            desc: "Workshop: user discovery, solution discovery",
          },
          {
            title: "Execution",
            desc: "UX/UI design, prototype, project management",
          },
          {
            title: "Validation",
            desc: "Google analytics, NPS",
          },
        ]} />
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
          <Image src={require('public/images/portfolio/shopee-affinity-map.jpg')} alt="affinity mapping" />
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
          <Image src={require('public/images/portfolio/shopee-workshop-card-sorting.jpg')} alt="workshop card sorting" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl">Sketch Storming</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>Participants first put pen to paper and individually sketched their ideal product, then sketched a single mock-up as a group. The insights that emerged from the diverse set of participants will no doubt be invaluable to future product development and innovations.</p>
          </div>
          <Image src={require('public/images/portfolio/shopee-workshop-sketch-vote.jpg')} alt="workshop sketch storming" />
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
        <Image src={require('public/images/portfolio/shopee-amp-pdp-wireframe-overall.png')} alt="wireframe overall" className="my-20" />
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
            <Image src={require('public/images/portfolio/shopee-amp-pdp-wireframe-voucher.png')} alt="wireframe first screen" />
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
            <Image src={require('public/images/portfolio/shopee-amp-pdp-wireframe-recommendation.png')} alt="wireframe fouth screen" />
          </div>
          <hr className="my-24" />
          <h3 className="text-center mb-12 text-3xl">Visual Design</h3>
          <p>Instead of using heavy text for an overview (this is *not* the description), we use colors, fonts, and icons. And we could only fetch some representative signal for that information.</p>
        </Container>
        <Image src={require('public/images/portfolio/shopee-amp-pdp-mockup-02.png')} alt="mockup 01" className="my-20" />
        <Image src={require('public/images/portfolio/shopee-amp-pdp-mockup-02.png')} alt="mockup 02" className="my-20" />
        <Image src={require('public/images/portfolio/shopee-amp-pdp-mockup-error.png')} alt="mockup error" className="my-20" />
      </section>
      <hr className="my-24" />
      <section>
        <Container>
          <h3 className="text-center mb-12 text-3xl font-bold">Technical solution</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-500">
              <p>Via workshop with Google, we launch the <Link href="AMP project" target="_blank" className="font-bold text-black">AMP project</Link> for this version which is an open-source initiative aiming to make the web better for all. The project enables the creation of websites and ads that are consistently fast, beautiful and high-performing across devices and distribution platforms.</p>
              <p>In a highly competitive e-commerce market, it’s critical to provide the best user experience for customers, including for those using low-end smartphones on 3G or 2G connections. As Shopee mobile traffic grew, the company saw an opportunity to acquire new users and improve mobile conversions through this valuable channel.</p>
            </div>
            <Image src={require('public/images/portfolio/google-ux-workshop.jpg')} alt="Google AMP has changed SEO" />
          </div>
        </Container>
      </section>
      <hr className="my-24" />
      <section>
        <Container>
          <h3 className="text-center mb-12 text-3xl font-bold">Product Management</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-500">
              <p>Due to this project was new and start up with designers and developers for the beginning, I raise myself to be a product manager in this project to work with each team:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Design team</li>
                <li>Product team</li>
                <li>Front end developer team</li>
                <li>Backend developer team</li>
                <li>SEO team</li>
                <li>QA(Quality assurance) team</li>
                <li>Local country team (7 countries)</li>
              </ul>
              <h4 className="text-2xl text-black">Documentation</h4>
              <p>I created and maintaind some documents like PRD (Product Requirements Document) containing all the requirements to a certain product. It is written to allow people to understand what a product should do.</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Product Requirements Document (PRD)</li>
                <li>Tracking point requirement</li>
                <li>Design spec</li>
                <li>Test case</li>
              </ul>
            </div>
          <Image src={require('public/images/portfolio/shopee-20190508.jpg')} alt="shopee team work"/>
          </div>
        </Container>
      </section>
      <hr className="my-24" />
      <section>
        <Container>
          <h3 className="text-center mb-12 text-3xl font-bold">04. Validation</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-500">
              <p>We use Google Analytics and NPS (Net Promoter Score) to track the performance with internal data to validate the result.</p>
              <p>3 months after launch, product detail page continued to have a positive impact on the user experience: </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <strong className="text-black">User satisfaction</strong> increased significantly 14%.</li>
                <li>
                  <strong className="text-black">active usage</strong> of 28 day for pages increased by 50%.</li>
                <li>
                  <strong className="text-black">Organic traffic</strong> incrase 39%.</li>
                <li>
                  <strong className="text-black">Loading time</strong> runs 3 times as fast as before launch.</li>
              </ul>
              <p>For confidentiality reasons I have omitted the actual values for these metrics.</p>
            </div>
            <Image src={require('public/images/portfolio/shopee-20180909.jpg')} />
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default shopeeProductDetailPageRefactor;