import { Button, Container, H2, H3, Icon, Layout } from "components";

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
    <Layout title="Mentorship | Ken Huang">
      <section className="flex flex-col justify-center items-center space-y-8 my-32">
        <Container className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <H2>Mentor Program</H2>
            <p className="text-gray-500">Boost your career and become a better designer or engineer</p>
            <p className="text-gray-500">Contace Me: <a href="mailto:bluetch@gmail.com" className="text-sky-500">bluetch@gmail.com</a></p>
          </div>
          <img src="/images/mentorship/mentorship_hero.png" alt="" className="w-1/2 mx-auto" />
        </Container>
      </section>
      <section className="py-32 px-20 space-y-8 bg-gray-50">
        <H2 className="text-center">Select your program</H2>
        <div className="grid grid-cols-3 gap-4">
          {programs.map((program, i) => {
            return (
              <div key={`program-${i}`} className="shadow-md flex flex-col rounded-lg p-12 space-y-4 bg-white text-black">
                <div className="tag">共{program.section}場，60分鐘</div>
                <H3>{program.name}</H3>
                <p className="text-gray-500">{program.desc}</p>
                <div>
                  <p className="text-sm font-black">平均${program.price}/場</p>
                  <p className="font-bold">{program.price * program.section}</p>
                </div>

                <Button>{program.button}</Button>
              </div>
            )
          }
          )}
        </div>
      </section>
      <section className="bg-black text-white py-32">
        <Container className="text-center space-y-8">
          <H2>Benefits of Mentorship</H2>
          <p>I know a thing or two because I have done a thing or two in my design career, and I am committed to helping you make use of that knowledge.</p>
          <div className="grid grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              return (
                <div key={`benefit-${i}`} className="space-y-4 rounded-lg bg-gray-900 p-8">
                  <Icon name={benefit.img} className="w-10 h-10 inline-block" />
                  <H3>{benefit.name}</H3>
                  <p className="text-gray-500">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container className="text-center space-y-20">
          <H2>I’ve mentored talented <br />designers & engineers from all over the world</H2>
          <div className="grid grid-cols-4 gap-20">
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
      {/* <section className="my-32 bg-gray-50">
        <Container className="text-center space-y-8 py-32">
          <H2>My Mentoring Style</H2>
          <p className="w-1/2 mx-auto">I strive to function as a catalyst and challenge you to grow as both a designer and a human. I care about the details and will encourage you to think, plan, and dream. These are the qualities I will bring to every conversation.</p>
          <div className="grid grid-cols-2 gap-8">
            {mentoringStyle.map((style, i) => {
              return (
                <div key={`style-${i}`} className="text-black bg-white rounded-lg p-12 space-y-8">
                  <Icon name={style.img} className="w-8 h-8 inline-block" />
                  <H3>{style.name}</H3>
                  <p>{style.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section> */}
      <section className="py-32 bg-gray-50">
        <Container className="text-center">
          <div className="flex flex-col justify-center items-center space-y-8">
            <H2>Book a consult</H2>
            <p>Thinking about mentorship? Lets talk about it. The first call is on me.</p>
            {/* <Button href="">Introduce yourself</Button> */}
            <p>Contace Me: <a href="mailto:bluetch@gmail.com" className="text-sky-500">bluetch@gmail.com</a></p>
          </div>
        </Container>
      </section>
    </Layout >
  )
}

export default Mentorship;