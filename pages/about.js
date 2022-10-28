import Link from "next/link";
import Image from "next/image";
import { Button, H1, H2, H3, H4, H5, H6, Container, Gallery, Layout } from "components";
import portrait from "public/images/about/kenhuang_portrait.png";
// import shopeeLogo from "public/images/about/logo-shopee.png";
// import goodFinanceLogo from "public/images/about/logo-shopee.png";
// import shopeeLogo from "public/images/about/logo-shopee.png";
// import shopeeLogo from "public/images/about/logo-shopee.png";

const myTrips = [
  {
    name: "Camino de Santiago",
    img: "/images/about/camino_02.jpg",
    url: "",
  },
  {
    name: "Iceberg in Iceland",
    img: "/images/about/travel-iceland-cover.jpg",
    url: "",
  },
  {
    name: "Hogwarts in England",
    img: "/images/about/travel-england-cover.jpg",
    url: "",
  },
  {
    name: "Tea in Japan",
    img: "/images/about/travel-japan-cover.jpg",
    url: "",
  },
  {
    name: "Surround om Taiwan",
    img: "/images/about/travel-taiwan-cover.jpg",
    url: "",
  },
  {
    name: "Surfing in Australia",
    img: "/images/about/travel-australia-cover.jpg",
    url: "",
  },
];

const myWorkExperience = [
  // {
  //   company: "TXOne Networks",
  //   location: "Taipei, Taiwan",
  //   position: "Staff Frontend Developer",
  //   logo: "https://media-exp1.licdn.com/dms/image/C560BAQGJSrmlPyGOTQ/company-logo_200_200/0/1652442822162?e=1675296000&v=beta&t=ZvOn0iw47DuvQUGM7adcq13htnT08MSBZHDImIfiNy0",
  //   desc: [
  //     "Migrated all the services from TrendMicro to TXOne",
  //     "Develop and maintain automated all OT security products."
  //   ],
  //   duration: "Nov 2022 - Now"
  // },
  {
    company: "Good Finance",
    location: "Taipei, Taiwan",
    position: "Sr. Frontend Developer",
    logo: "https://media-exp1.licdn.com/dms/image/C560BAQHlC26xHX4dmw/company-logo_100_100/0/1643192905460?e=1674691200&v=beta&t=a8JhCZg-K-rv-QTR-zhUwhToKf0qenRFKMkv37f4fZs",
    desc: ["Planned and developed fin tech such as trading system, assets management system, and learning center. Lead front end developers and manage the efforts of the front-end development team in the creation of front-end website code to support both tactical day-to-day business operations and major IT portfolio projects."],
    duration: "Apr 2021 - Aug 2022"
  },
  {
    company: "Shopee",
    location: "Singapore",
    position: "Product Designer lead / UX Engineer",
    logo: "https://media-exp1.licdn.com/dms/image/D560BAQH28vC_-y7x8A/company-logo_100_100/0/1665393746935?e=1674691200&v=beta&t=abFq4_VouKn6RsWKktR2a2y2AYOqmsaNdmM53Vt_gH4",
    desc: [
      "Executing design at all stages from early concept to end to end experience including user research, data analytics, interactive prototype, and usability test. ",
      "Lead Shopee design language system (web, iOS, Android) with developers’ workspace base on HTML, CSS and React JavaScript frameworks."
    ],
    duration: "Sep 2017 - Apr 2021"
  },
  {
    company: "Yulon Group",
    location: "Taipei, Taiwan",
    position: "Product Designer",
    logo: "https://media-exp1.licdn.com/dms/image/C560BAQHTlmxGDfMQYA/company-logo_200_200/0/1610264272621?e=1674691200&v=beta&t=7ONSltJwHElO6B_-olol0CwaktaBmLeVNCOHDpvTrqw",
    desc: [
      "Manage projects for travel website, car service system, Roadside Assistance App, airport pick-up service and e-commerce App.",
      "Designed the structure, features, and workflow of website applications and backend systems."
    ],
    duration: "Jul 2016 - Apr 2017"
  },
  {
    company: "Uitox global e-commerce group",
    location: "Shanghai China, Taipei Taiwan",
    position: "Frontend Lead",
    logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFGxaUvN8QW_w/company-logo_200_200/0/1519949244269?e=1674691200&v=beta&t=C4HkHYa7ZC5-Y4YYmhJTkfxgeH9Jhu7ipGvpK5w3BJc",
    desc: [
      "Lead UX/UI for e-commerce system: web and App store, payment, shipping features and dashboard for buyers and sellers from research, concepting and validation, through documentation, implementation and launch.",
      "Led a team of designers & front-end developers, hiring and mentor, responsible for direct reports, and designed brand e-commerce for ASUS, LINE, Feiniu."
    ],
    duration: "Aug 2013 - Jul 2016"
  },
  {
    company: "Trend Micro",
    location: "Taipei Taiwan",
    position: "Frontend Developer",
    logo: "https://media-exp1.licdn.com/dms/image/C510BAQETIHCjbYMW7w/company-logo_200_200/0/1519856569371?e=1674691200&v=beta&t=r0_tFFhVYEL_zJvV_KhWE1Kwt_cepzoEFLKolV-FKAE",
    desc: [
      "Developed Lost Device Protection, Site Safety Center, Jewelry Box, TV game and Hadoop database query system.",
      "Utilized HTML, CSS, Javascript, SASS, NPM, Node.js, and Git for site development."
    ],
    duration: "Aug 2010 - Feb 2013"
  },
];

const About = () => {
  return (
    <Layout title="About | Ken Huang">
      <Container>
        <div className="grid grid-cols-5 gap-8 my-32">
          <Image src={portrait} alt="Ken Huang" className="p-8 col-span-2 overflow-hidden hover:transition-all hover:scale-110" />
          <div className="space-y-8 col-span-3">
            <H1 className="mb-8">Ken Huang</H1>
            <H3>I am a UX Engineer based in Taipei, Taiwan.</H3>
            <p className="text-gray-500">Since 2005, I have enjoyed turning complex problems into simple, beautiful and intuitive designs. When I am not pushing pixels, you will find me cooking, gardening or working out in the park.</p>
            <p className="text-gray-500">Over 12 years of experience within 6 years as a Designer and 6 years as a Developer, and execution across multiple industries such as hospitality, IT, consumer services, e-commerce, and security, which has worked extensively with corporate executives and businesses from APAC and Europe.</p>
            <Button href="https://www.linkedin.com/in/bluetch/" target="_blank">LinkedIn</Button>
          </div>
        </div>
        {/* <Gallery photos={photos} className="py-8 my-12 border-t" /> */}
      </Container>
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <H3>Designer</H3>
              <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
              <ul className="text-gray-500 space-y-2">
                <li>Product thinking of business</li>
                <li>UX/UI Design (Figma)</li>
                <li>Web/Apps</li>
                <li>Sketch</li>
                <li>Design systems</li>
              </ul>
            </div>
            <div className="space-y-4">
              <H3>Frontend Developer</H3>
              <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
              <ul className="text-gray-500 space-y-2">
                <li>HTML</li>
                <li>CSS/SASS/Tailwind</li>
                <li>JavaScript, React.js, Next.js, Node.js</li>
                <li>Git/CI/CD</li>
                <li>Github, Vercel</li>
              </ul>
            </div>
            <div className="space-y-4">
              <H3>Mentor</H3>
              <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
              <ul className="text-gray-500 space-y-2">
                <li>8 years experience</li>
                <li>26 short courses</li>
                <li>20+ students</li>
                <li>50+ mentor sessions</li>
                <li>30+ consulting on change careers</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="my-40">
        <Container>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/about/20200219.jpg" alt="" className="rounded-lg aspect-square object-cover" />
              <img src="/images/about/20220724.jpg" alt="" className="rounded-lg aspect-square object-cover" />
              <img src="/images/about/20190612.jpg" alt="" className="rounded-lg aspect-square object-cover" />
              <img src="/images/about/20161206.jpg" alt="" className="rounded-lg aspect-square object-cover" />
            </div>
            <div className="m-auto space-y-4">
              <H3>Funny facts?</H3>
              <ul className="text-gray-500 space-y-2">
                <li>Hiking around 800km in Spain</li>
                <li>I am a bit of a clean freak</li>
                <li>Gamer my life with PS5 / Switch</li>
                <li>Tennis player in Australia</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="my-40">
        <Container>
          <div className="grid grid-cols-2 gap-8">
            <div className="m-auto space-y-4">
              <H3>My story</H3>
              <p className="text-gray-500">Learn a little bit more about me, how I got into design, and how I built my career as a product designer. I’ve included key things I have learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img src="/images/about/20201219.jpg" alt="" className="rounded-lg" />
              <img src="/images/about/20151122.jpg" alt="" className="rounded-lg" />
              <img src="/images/about/20190508.jpg" alt="" className="rounded-lg" />
              <img src="/images/about/20200302.jpg" alt="" className="rounded-lg" />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="mx-auto space-y-4">
            <H3>My Trip</H3>
            <p className="text-gray-500">Learn a little bit more about me, how I got into design, and how I built my career as a product designer. I’ve included key things I have learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
          </div>
          <div className="grid grid-cols-6 gap-8 my-12">
            {myTrips.map((item) => {
              return (
                <img src={item.img} alt={item.name} className="rounded-lg object-cover aspect-[4/3]" />
              )
            })}
          </div>
        </Container>
      </section>
      <hr className="my-24" />
      <section>
        <Container>
          <H3>Work Experience</H3>
          <div className="space-y-8 my-12">
            {myWorkExperience.map((job) => {
              return (
                <div key={job.company} className="flex p-4 hover:bg-gray-100 hover:rounded-lg">
                  <img src={job.logo} alt={job.company} className="w-20 h-20 p-2 inline-block border border-gray-100 rounded-lg bg-white" />
                  <div className="ml-4">
                    <H6 className="font-bold mb-2">{job.company} <span className="font-light">| {job.location}</span></H6>
                    <H5 className="mb-4">{job.position} <span className="font-light">| {job.duration}</span></H5>
                    <ul className="list-disc pl-4 space-y-2 text-gray-500">
                      {job.desc.map((p, pindex) => <li key={`${job.company}-${pindex}`}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              )
            })}
            <p className="bg-gray-50 p-4">To know more detail of my previous working experiences, please visit my <Link href="https://www.linkedin.com/in/bluetch/" className="font-bold hover:bg-black hover:text-white" target="_blank">LinkedIn</Link> profile.</p>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default About;