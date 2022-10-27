import Image from "next/image";
import { Container, Layout, PortfolioCover, PortfolioOverview } from "components";
import oldComputer from "public/images/portfolio/goodfinance_old_computer.jpg";
import gfCover from "public/images/portfolio/goodfinance_one_account_admin_cover.png";

const goodfinanceOneAccountAdmin = () => {
  return (
    <Layout title="GoodFinance One Account Admin | Ken Huang">
      <section>
        <img src="/images/portfolio/goodfinance_office_03.png" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioCover
          date="2021 Apr - 2022 Apr"
          tags={["Front-end", "API", "React", "Finance"]}
          title="One Account Admin"
          duration="12 months"
          myRole="Sr. Front-end developer"
          responsibility="End to end UX/UI Developer"
          company="Good Finance, Taipei, Taiwan"
        />
        <PortfolioOverview
          overview={[
            {
              title: "01. Objective",
              description: "Due to there are many business unit and service with different account system, we would like to integrate all in one to help work stability and efficiency.",
            },
            {
              title: "02. Role & Deliverables",
              description: "In this project, I worked closely with Designers, PM and back-end engineers. I was responsible for the end to end web design, from PRD to front-end implementation and API handling.",
            },
            {
              title: "03. Challenges",
              description: "I am the first one front-end developer in this company, so that there are many standard and rule what I have to clearify, then make a scalable web structure.",
            },
            {
              title: "04. Outcome & Impact",
              description: "After launched the one account admin that decreased repetitive work for open account, when customers register new service we can maintain and update the same account. Save 30% of working time.",
            },
          ]}
        />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Situation</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>Good Finance is one of tranditional securities company, some services were performed long ago by outsourcing companies. It makes employee increasingly difficult to maintain.</p>
            <p>However, With the development of a new product, we decided to solve this heavy burden.</p>
            <p>Additionally, the global financial services kept rolling out new content and features worldwide, which may not be an optimal experience to current market, it also affected the new product in many aspects.</p>
          </div>
          <Image src={oldComputer} alt="old services"/>
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Task</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers. Developed at GV, it’s a “greatest hits” of business strategy, innovation, behavior science, design thinking, and more—packaged into a battle-tested process that any team can use.</p>
            <p>Working together in a sprint, you can shortcut the endless-debate cycle and compress months of time into a single week. Instead of waiting to launch a minimal product to understand if an idea is any good, you’ll get clear data from a realistic prototype. The sprint gives you a superpower: You can fast-forward into the future to see your finished product and customer reactions, before making any expensive commitments.</p>
          </div>
          <img src="/images/portfolio/sprint-diagram.png" alt="" />
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Actions</h3>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Result</h3>
        <Image src={gfCover} alt="old services"/>
      </Container>
    </Layout>
  )
}

export default goodfinanceOneAccountAdmin;