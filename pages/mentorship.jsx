import Image from "next/image";
import { Button, Container, Layout, Typography } from "components";
import mentorshipHero from "public/images/mentorship/mentorship_hero.jpg";

const Mentorship = () => {
  const programs = [
    {
      name: "求職衝刺方案",
      img: "refresh",
      section: 3,
      price: 1000,
      desc: "你目前正在積極求職找尋適合的工作嗎？讓我針對你的履歷、作品集和面試策略進行改善來提高成功機率吧！",
      audience: "All designers",
      button: "前往預約",
    },
    {
      name: "目標實踐方案",
      img: "refresh",
      section: 6,
      price: 900,
      desc: "你要持續自我成長並且讓自己達到理想的狀態嗎？讓我幫助你設定目標並逐步實現吧！",
      audience: "Experienced designers",
      button: "前往預約",
    },
    {
      name: "職涯教練方案",
      img: "refresh",
      section: 12,
      price: 800,
      desc: "你有長期想實現的職涯願景，並且想在目前的工作中有更好的表現嗎？讓我幫助你排除困難快速前進吧！",
      audience: "New designers",
      button: "前往預約",
    },
  ];

  const benefits = [
    {
      name: "Tools",
      img: "tools",
      desc: "Get you up to speed quickly with design and visual development tools Figma or front-end: HTML/CSS/JS skills",
    },
    {
      name: "Portfolio review",
      img: "portfolio",
      desc: "Help you sort out the presentation and details of your work, so that you can write a better story",
    },
    {
      name: "Career coach",
      img: "smile",
      desc: "Assist you in planning your mid- to long-term career goals, as well as provide suggested direction and guidance",
    },
    {
      name: "Mock Interview",
      img: "work",
      desc: "Accompany you to simulate the real interview situation, let you be more familiar with the interview process, answering skills and job search strategies",
    },
  ];

  const mentoringStyle = [
    {
      name: "Authenticity",
      img: "refresh",
      desc: "No sugar-coated critiques here. I care about your growth too much to not keep it real. We will tear things down and rebuild them better, together.",
    },
    {
      name: "Humility",
      img: "refresh",
      desc: "I don’t profess to be at the top of the design talent pool, because I know there is still much for me to master. Design is a moving target I am hunting every day.",
    },
    {
      name: "Equality",
      img: "refresh",
      desc: "To me, you are more than just a mentee. You are a designer — an industry peer. I’m not the only one teaching and you’re not the only one learning.",
    },
    {
      name: "Transparency",
      img: "refresh",
      desc: "I don’t have all the answers, but I amm happy to point you towards useful resources and share what I have learned from my own personal design journey.",
    },
  ];
  return (
    <Layout
      title="Mentorship | Ken Huang"
      description="1:1 mentorship with Ken Huang for designers and front-end engineers. Portfolio reviews, career coaching, and interview prep."
    >
      <section className="flex flex-col justify-center items-center space-y-8 lg:py-32 py-16">
        <Container>
          <Typography className="text-center" variant="h1">Mentor Program</Typography>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-500">Boost your career and become a better designer or engineer</p>
              <p className="text-gray-500">As a self-thought designer with years of experience in multinational organization, I deeply understand the challenges product design learners could face so I’m able to help them achieve their goals at different stages of careers. In this mentorship program, I will provide professional advice based on your needs, help you to clarify problems and set goals, and address them systematically. In the past three years, I have helped more than 50 designers from more than 10 countries around the world to achieve their career goals.  They have better performance on projects and start to influence their team.</p>
              <p className="text-gray-500">Contact Me: <a href="mailto:bluetch@gmail.com" className="text-sky-500">bluetch@gmail.com</a></p>
            </div>
            <Image src={mentorshipHero} alt="Ken Huang mentorship" />
          </div>
        </Container>
      </section>
      <section className="lg:py-32">
        <Container className="text-center space-y-8">
          <Typography variant="h2">Benefits of Mentorship</Typography>
          <p>I know a thing or two because I have done a thing or two in my design career, and I am committed to helping you make use of that knowledge.</p>
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => {
              return (
                <div key={`benefit-${i}`} className="shadow-md space-y-4 rounded-lg p-8">
                  {/* <Icon name={benefit.img} className="w-12 h-12 inline-block bg-black rounded-lg" /> */}
                  <Typography variant="h3">{benefit.name}</Typography>
                  <p className="text-gray-500">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container className="text-center space-y-20">
          <Typography variant="h2">I’ve mentored talented <br />designers & engineers from all over the world</Typography>
          <div className="grid lg:grid-cols-4 lg:gap-20 grid-cols-2 gap-4">
            <div className="flex items-center">
              <img src="/images/mentorship/facebook_logo.png" alt="Facebook" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/benq_logo.png" alt="Benq" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/shopee_logo.png" alt="Shopee" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/tsmc_logo.png" alt="TSMC" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/seagroup_logo.png" alt="sea group" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/trendmicro_logo.png" alt="trend micro" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/alibaba_logo.png" alt="alibaba group" />
            </div>
            <div className="flex items-center">
              <img src="/images/mentorship/google_logo.png" alt="Google" />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-32 bg-gray-50">
        <Container className="text-center">
          <div className="flex flex-col justify-center items-center space-y-8">
          <Typography variant="h2">Book a consult</Typography>
            <p>Thinking about mentorship? Lets talk about it. The first call is on me.</p>
            {/* <Button href="">Introduce yourself</Button> */}
            <p>Contact Me: <a href="mailto:bluetch@gmail.com" className="text-sky-500">bluetch@gmail.com</a></p>
          </div>
        </Container>
      </section>
    </Layout >
  )
}

export default Mentorship;