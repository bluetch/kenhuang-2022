import { H3, HR } from "components";
import Link from "next/link";
import Image from "next/image";
import { Button, Container, Layout, PortfolioSummary, PortfolioOverview } from "components";

const lostDeviceProtection = () => {
  return (
    <Layout title="Lost Device Protection of TrendMicro | Ken Huang">
      <section>
        <img src="/images/portfolio/lost-device-protection-cover.jpg" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioSummary
          date="2012 Feb - 2013 Feb"
          tags={["Front-end", "RWD", "L10N", "Google Map API"]}
          title="Lost Device Protection"
          duration="1 Year"
          myRole="Front-end Developer"
          responsibility="End to end Front-end Developer"
          company="TrendMicro, Taiwan"
        />
        <PortfolioOverview
          overview={[
            {
              title: "01. Objective",
              desc: "The team wanted to redesign the existing TrendMicro mobile security for international. Also, we wanted to refactor our infrastructure for the future scale.",
            },
            {
              title: "02. Role & Deliverables",
              desc: "In this project, I worked closely with Designers, PM and four engineers. I was responsible for the end to end web design, from mobile first to desktop responsive web design and API handling.",
            },
            {
              title: "03. Challenges",
              desc: "This project had quite a few technical dependencies with other teams & products, we also needed to deal with many prioritizations to make sure we can deliver MVP on time.",
            },
            {
              title: "04. Outcome & Impact",
              desc: "We launched the MVP in 3 months that increased our overall metrics significantly, especially it decreased the page loading time by 32%. We also received a lot of positive feedback from users.",
            },
          ]}
        />
        <H3 className="text-center">Background</H3>
        <div className="flex lg:flex-row flex-col-reverse gap-8 py-8">
          <div className="lg:w-1/2 space-y-4 text-gray-500">
            <p>There was a project called Lost Device Protection when I worked at Trend Micro. The product team asked me to develop the next version for new UI and responsive web design. I used a bootstrap framework, I also assisted with the HTML & CSS for the mobile version of the site, and wrote a separate stylesheet specifically for the site when being viewed on an iPad.</p>
            <Button href="https://mobilesecurity.trendmicro.com/" target="_blank">View Website</Button>
          </div>
          <div className="lg:w-1/2">
            <Image src={require('public/images/portfolio/lost-device-protection-cover.jpg')} alt="lost device protection home page" />
          </div>
        </div>
        <HR />
        <H3 className="text-center">Process</H3>
        <div className="lg:flex lg:flex-row gap-8 py-8">
          <div className="lg:w-1/2 space-y-4 text-gray-500">
            <p>The PM was very happy with the designs and with the back-end already in place we were able to quickly move onto the build of the front-end.</p>
            <p>I built the front-end “mobile-up”, meaning it was first created for mobile layouts, then using media queries and progressive enhancement additional styles and functionality were added for tablet and desktop.</p>
            <p>To keep performance optimal, I used hardware acceleration for smooth animations across all devices, minimized and concatenated scripts, and used sprite sheets to keep the number of browser requests at a minimum.</p>
          </div>
          <div className="lg:w-1/2 space-y-4 text-gray-500">
            <p>Where possible, I relied on third-party libraries such as:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>JQuery for general behaviours</li>
              <li>Modernizr for testing browser features</li>
              <li>Bootstrap for basic UI framework</li>
              <li>Google Analytics for tracking performance</li>
              <li>Google Map API to connect our service</li>
              <li>JSON format to support L10n</li>
            </ul>
            <p>The front end build process included the use of Grunt for automated tasks to speed up development and Git for version control.</p>
          </div>
        </div>
        <HR />
        <H3 className="text-center">Outcome</H3>
        <div className="flex lg:flex-row flex-col-reverse gap-8 py-8">
          <div className="lg:w-1/2 space-y-4 text-gray-500">
            <p>The Lost Device Protection site is a culmination of my skills in 2012, taking designs and converting them into a responsive, cross browser website, whilst maintaining the highest standard that Lost Device Protection offer their clients.</p>
            <p>After the project finished, we have also created a Thousand Sunny ship for christmas event together!</p>
          </div>
          <div className="lg:w-1/2">
            <Image src={require('public/images/portfolio/trendmicro-christmas.jpg')} alt="trend micro teamwork" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default lostDeviceProtection;