import { Container, Layout, Refactoring, Tags, PortfolioCover, PortfolioOverview } from "components";

const lostDeviceProtection = () => {
  return (
    <Layout title="Lost Device Protection of TrendMicro | Ken Huang">
      <section>
        <img src="/images/portfolio/lost-device-protection-cover.jpg" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioCover
          date="2012 Feb - 2013 Feb"
          tags={["Front-end", "RWD", "L10N", "Google Map API"]}
          title="Lost Device Protection of TrendMicro"
          duration="1 Year"
          myRole="Front-end Developer"
          responsibility="End to end Front-end Developer"
          company="TrendMicro, Taiwan"
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
      </Container>
    </Layout>
  )
}

export default lostDeviceProtection;