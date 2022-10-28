import Image from "next/image";
import { Container, Layout, PortfolioCover } from "components";

const shopeeRecruitment = () => {
  return (
    <Layout title="Recruitment of Shopee | Ken Huang">
      <section>
        <img src="/images/portfolio/shopee-recruitment-frog-cover.png" alt="" className="h-96 w-full object-cover" />
      </section>
      <Container>
        <PortfolioCover
          date="2018 Apr"
          tags={["Design", "Mobile", "Recruitment", "Social media"]}
          title="Graphic for Recruitment"
          duration="1 month"
          myRole="Designer"
          responsibility="Plan, design, social media"
          company="Shopee, Singapore"
        />
        <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Background</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-500">
            <p>In the beginning of 2018, Travel Frog (Japan name: Tabi Kaeru 旅かえる) has topped the charts in the free game category in Apple's App Store in China for more than a fortnight. Soon after, it also becomes popular in South ease area.</p>
            <p>So that we would like to leverage this fashion as Shopee recruitment.</p>
            <p>What are the advantages to using social media for recruitment?</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Increase job visibility</li>
              <li>Lets you advertise your jobs to your audience</li>
              <li>Improves employer branding</li>
              <li>Provides better insight into candidates' profiles</li>
              <li>Helps you connect with passive candidates</li>
            </ul>
          </div>
          <Image src={require('public/images/portfolio/shopee-recruitment-frog-app.jpg')} alt="Travel Frog" />
        </div>
        <hr className="my-24" />
      </Container>
      <h3 className="text-center mt-24 mb-12 text-3xl font-bold">Visual</h3>
      <Image src={require('public/images/portfolio/shopee-recruitment-wechat.png')} alt="Travel Frog" />
      <Image src={require('public/images/portfolio/shopee-recruitment-content.png')} alt="Travel Frog" className="my-20"/>
      <Container>
        <div className="grid grid-cols-2 gap-8">
          <h3 className="text-3xl font-bold">Result</h3>
          <div className="space-y-4 text-gray-500">
            <p>We got nearly <strong>hundred</strong> of great designer resumes around the China, Taiwan, Indonesia, Singapore, and Thailand ...etc, in one week.</p>
            <Image src={require('public/images/portfolio/shopee-recruitment-email.png')} alt="Travel Frog" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default shopeeRecruitment;