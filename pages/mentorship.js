import { Button, Container, H2, H3, Icon, Layout } from "components";

const Mentorship = () => {
  const programs = [
    {
      name: "Spot mentoring",
      img: "refresh",
      price: "$100",
      desc: "1 hour of candid conversation and advice as needed with no long term, ongoing commitment required.",
      audience: "All designers",
      button: "Book a session",
    },
    {
      name: "Production Support",
      img: "refresh",
      price: "$500",
      desc: "4 hours of targeted feedback and design critique to help you focus on delivering your best work.",
      audience: "Experienced designers",
      button: "Improve your chops",
    },
    {
      name: "Tailored Learning",
      img: "refresh",
      price: "$1,200",
      desc: "12 hours of professional coaching and collaboration to help you achieve long term goals and ambitions.",
      audience: "New designers",
      button: "Start your journey",
    },
  ];

  const benefits = [
    {
      name: "Tools",
      img: "refresh",
      desc: "I will help you build confidence and skill in your design tools.",
    },
    {
      name: "Resources",
      img: "refresh",
      desc: "I will point you towards informative content to learn from.",
    },
    {
      name: "Networking",
      img: "refresh",
      desc: "I will connect you with other pros to expand your reach.",
    },
    {
      name: "Opportunity",
      img: "refresh",
      desc: "I will make introductions and help you source potential work.",
    },
    {
      name: "Growth",
      img: "refresh",
      desc: "Iwill uncover blind spots and accelerate your growth.",
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
    <Layout title="Mentorship">
      <section className="flex flex-col justify-center items-center space-y-8 my-32">
        <Container className="text-center space-y-8">
          <H2>I have not met you, and this is crazy...</H2>
          <p>But if you need a mentor, then email me maybe.</p>
          <img src="/images/mentorship/mentorship_hero.png" alt="" className="w-1/2 mx-auto" />
        </Container>
      </section>
      <section className="my-32 p-20 space-y-8 text-center bg-gray-50">
        <H2>Being a designer is tough.</H2>
        <p>It seems like every other day there is a new design trend to learn, tool to master, and endless design-related articles to read. Honestly, it can be overwhelming and intimidating. I know because I have walked more than a few miles in those shoes. So whether you are new to the field or simply looking for some guidance and support, I can help.</p>
        <div className="grid grid-cols-3 gap-4">
          {programs.map((program, i) => {
            return (
              <div key={`program-${i}`} className="shadow-md flex flex-col rounded-lg px-12 py-20 space-y-4 bg-white text-black">
                <Icon name={program.img} className="w-8 h-8 mx-auto" />
                <H3>{program.name}</H3>
                <p className="text-3xl font-black">{program.price}</p>
                <p>{program.desc}</p>
                <Button>{program.button}</Button>
              </div>
            )
          }
          )}
        </div>
        <div className="flex flex-col justify-center items-center py-24 space-y-8">
          <H2>If you are wanting to level up, mentorship helps.</H2>
          <p>Schedule a free consultation to ask questions, discuss details, and decide if it is a fit.</p>
          <Button variant="primary-outline">Introduce yourself</Button>
        </div>
      </section>
      <section className="my-32">
        <Container className="text-center space-y-8">
          <H2>Benefits of Mentorship</H2>
          <p>I know a thing or two because I have done a thing or two in my design career, and I am committed to helping you make use of that knowledge.</p>
          <div className="grid grid-cols-5 gap-8">
            {benefits.map((benefit, i) => {
              return (
                <div key={`benefit-${i}`} className="space-y-8">
                  <Icon name={benefit.img} className="w-8 h-8 inline-block" />
                  <H3>{benefit.name}</H3>
                  <p>{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container className="text-center space-y-8">
          <H2>I’ve mentored talented designers from all over the world</H2>
          <p>and many have worked for high profile companies:</p>
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
      <section className="my-32 bg-gray-50">
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
      </section>
      <section className="my-32">
        <Container className="text-center">
          <div className="flex flex-col justify-center items-center py-24 space-y-8">
            <H2>Book a consult</H2>
            <p>Thinking about mentorship? Lets talk about it. The first call is on me.</p>
            <Button>Introduce yourself</Button>
          </div>
        </Container>
      </section>
    </Layout >
  )
}

export default Mentorship;