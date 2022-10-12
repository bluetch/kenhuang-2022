import { Container, H1, Layout, PortfolioCover, PortfolioOverview, PortfolioProcess } from "components";

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
        <h3 className="text-center mt-24 mb-12 text-3xl">Background</h3>
        <div className="space-y-4">
          <p className="text-gray-800">In order to help our users browsing service in south east area, especially in Indonesia, there are not enough internet infrastructure to support friendly web service, we have to make it better.</p>
          <p>There were some reasons that drove this project:</p>
          <ol className="list-decimal pl-4 space-y-2">
            <li><strong>Business:</strong> We wanted to reduce the drop-off rate of web pages, and increase discoverability from Google search.</li>
            <li><strong>Technology:</strong> The previous app design and architecture was difficult to fit low-bandwidth internet environment like Indonesia. It need to load a page around 11 seconds.</li>
            <li><strong>User’s pain points:</strong> There is too much information for many South-east-Asians use the older smartphone with small screen size. A lot of our users in Indonesia are hard to filter the more meaningful thing they care. </li>
          </ol>
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl">Design Process</h3>
        <PortfolioProcess />
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl">Research</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
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
        <div className="grid grid-cols-3 gap-8">
          <img src="/images/portfolio/sprint-diagram.png" alt="" />
          <div className="space-y-4 col-span-2">
          <h3 className="mb-12 text-3xl">Design Sprint</h3>
            <p>The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers. Developed at GV, it’s a “greatest hits” of business strategy, innovation, behavior science, design thinking, and more—packaged into a battle-tested process that any team can use.</p>
            <p>Working together in a sprint, you can shortcut the endless-debate cycle and compress months of time into a single week. Instead of waiting to launch a minimal product to understand if an idea is any good, you’ll get clear data from a realistic prototype. The sprint gives you a superpower: You can fast-forward into the future to see your finished product and customer reactions, before making any expensive commitments.</p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default shopeeProductDetailPageRefactor;