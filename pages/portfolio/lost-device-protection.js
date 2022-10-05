import { Container, Layout, Refactoring, Tags } from "components";

const lostDeviceProtection = () => {
  return (
    <Layout title="Lost Device Protection of TrendMicro | Ken Huang">
      <section>
        <img src="/images/portfolio/lost-device-protection-cover.jpg" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        {/* <Refactoring /> */}
        <div className="rounded-lg -mt-24 relative bg-white p-10 shadow-lg">
          <div className="flex justify-between">
            <Tags name={["Front-end", "RWD", "L10N"]} />
            <p className="font-mono">2012 Feb - 2013 Feb</p>
          </div>
          <h1 className="text-4xl my-8">Lost Device Protection of TrendMicro</h1>
          <div className="grid grid-cols-4 gap-x-16">
            <div>
              <p className="text-xs">Duration</p>
              <h6 className="font-light">1 Year</h6>
            </div>
            <div>
              <p className="text-xs">My Role</p>
              <h6 className="font-light">Front-end Developer</h6>
            </div>
            <div>
              <p className="text-xs">Responsibility</p>
              <h6 className="font-light">End to end Front-end Developer</h6>
            </div>
            <div>
              <p className="text-xs">Company</p>
              <h6 className="font-light">TrendMicro Taiwan</h6>
            </div>
          </div>
        </div>
        <h3 className="text-center mt-24 mb-12 text-3xl">Project Overview</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-8">
            <h3 className="font-semibold mb-2">01. Objective</h3>
            <p className="text-gray-500">The team wanted to redesign the existing search experience on Indeed for Japanese job seekers. Also, we wanted to refactor our infrastructure for the future scale.</p>
          </div>
          <div className="border rounded-lg p-8">
            <h3 className="font-semibold mb-2">02. Role & Deliverables</h3>
            <p className="text-gray-500">In this project, I worked closely with PM and four engineers. I was responsible for the end to end UX and UI design, from defining the problem to deliver the final visual artifact.</p>
          </div>
          <div className="border rounded-lg p-8">
            <h3 className="font-semibold mb-2">03. Challenges</h3>
            <p className="text-gray-500">This project had quite a few technical dependencies with other teams & products, we also needed to deal with many prioritizations to make sure we can deliver MVP on time.</p>
          </div>
          <div className="border rounded-lg p-8">
            <h3 className="font-semibold mb-2">04. Outcome & Impact</h3>
            <p className="text-gray-500">We launched the MVP in six months that increased our overall metrics significantly, especially it increased the revenue by 12%. We also received a lot of positive feedback from users.</p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default lostDeviceProtection;