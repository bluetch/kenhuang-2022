import Image from "next/image";
import {
  Container,
  H3,
  HR,
  Layout,
  PortfolioSummary,
  PortfolioOverview,
  Tag,
} from "components";
// import { useState } from "react";

const goodfinanceOneAccountAdmin = () => {
  // const [permission, setPermission] = useState(false);

  return (
    <Layout title="GoodFinance One Account Admin | Ken Huang">
      {/* {!permission && (
        <Refactoring type="" />
      )} */}
      <section>
        <img
          src="/images/portfolio/goodfinance_office_03.png"
          alt=""
          className="h-96 w-full object-cover"
        />
      </section>
      <Container>
        <PortfolioSummary
          date="2021 Apr - 2022 Apr"
          tags={["Front-end", "APIs", "React", "Finance"]}
          title="One Account Admin"
          duration="12 months"
          myRole="Sr. Front-end developer"
          responsibility="React, Semantic HTML, APIs, Testing"
          company="Good Finance, Taipei, Taiwan"
        />
        <PortfolioOverview
          overview={[
            {
              title: "01. Objective",
              desc: "Due to there are many business unit and service with different account system, we would like to integrate all in one to help work stability and efficiency.",
            },
            {
              title: "02. Role & Deliverables",
              desc: "In this project, I worked closely with Designers, PM and back-end engineers. I was responsible for the end to end web design, from PRD to front-end implementation and API handling.",
            },
            {
              title: "03. Challenges",
              desc: "I am the first one front-end developer in this company, so that there are many standard and rule what I have to clearify, then make a scalable web structure.",
            },
            {
              title: "04. Outcome & Impact",
              desc: "After launched the one account admin that decreased repetitive work for open account, when customers register new service we can maintain and update the same account. Save 30% of working time.",
            },
          ]}
        />
        <H3 className="text-center">Situation</H3>
        <div className="flex lg:flex-row flex-col-reverse gap-8 py-8">
          <div className="lg:w-1/2 space-y-4 text-gray-500">
            <p>
              Good Finance is one of tranditional securities company, some
              services were performed long ago by outsourcing companies. It
              makes employee increasingly difficult to maintain.
            </p>
            <p>
              However, With the development of a new product, we decided to
              solve this heavy burden.
            </p>
            <p>
              Additionally, the global financial services kept rolling out new
              content and features worldwide, which may not be an optimal
              experience to current market, it also affected the new product in
              many aspects.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={require("public/images/portfolio/goodfinance_old_computer.jpg")}
              alt="old services"
            />
          </div>
        </div>
        <HR />
        <H3 className="text-center">Task</H3>
        <div className="flex lg:flex-row flex-col-reverse gap-8 py-8">
          <div className="lg:w-1/2 space-y-4 text-gray-500">
            <p>
              Because of there are many legacy service have to maintain with new
              product, I have to understand existing domain knowledge and
              propose a scalable structure plan, so that here are tasks to do:
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>PRD discussion</li>
              <li>Frontend technical specification.</li>
              <li>Refactor old systems.</li>
              <li>Define API data specification.</li>
              <li>Technological selection for product.</li>
              <li>Ensure browser compatibility.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={require("public/images/portfolio/goodfinance_securities_sequence_diagram.png")}
              className="aspect-square"
              alt="sequence fiagram"
            />
            {/* <Image
              src={require("public/images/portfolio/goodfinance_one_account_api_natural.png")}
              className="aspect-square"
              alt="api"
            /> */}
          </div>
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Action</h3>
        <div className="space-y-4 text-gray-500 text-center lg:w-1/2 mx-auto">
          <p>
            I am the first one frontend developer in this company, and worked
            very closely with designers and backend developers on the
            implementation of the features and in some cases even had my hands
            on project management to help team work and better understand the
            development process.
          </p>
          <Tag>
            {[
              "React.js",
              "SASS",
              "Keycloak.js",
              "MUI",
              "Date-io",
              "React-hook-form",
              "React-pdf",
              "Jest",
              "Figma",
            ]}
          </Tag>

          <p>
            The front end build process included the use of Gitlab CI/CD for
            automated tasks to speed up development and Git for version control.
          </p>
        </div>
        <hr className="my-24" />
        <h3 className="text-center mb-12 text-3xl font-bold">Result</h3>
      </Container>
      <Image
        src={require("public/images/portfolio/goodfinance_one_account_admin_cover.png")}
        alt="one account admin home page"
      />
      <Image
        src={require("public/images/portfolio/goodfinance_one_account_admin_list.png")}
        alt="one account admin list page"
      />
      <Image
        src={require("public/images/portfolio/goodfinance_one_account_admin_profile.png")}
        alt="one account admin profile page"
      />
    </Layout>
  );
};

export default goodfinanceOneAccountAdmin;
