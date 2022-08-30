import { H1, H2, H3, H4, Container, Gallery, Layout } from "components";

const photos = [
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

const About = () => {
  return (
    <Layout title="about">
      <Container>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-8">
            <H1 className="mb-8">Ken Huang</H1>
            <H3 className="text-gray-500 font-light">I am a UX Engineer based in Taipei, Taiwan.</H3>
            <p className="text-gray-500 font-light">Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</p>
          </div>
          <div>
            <img src="/images/about/kenhuang_blue2.png" alt="Ken Huang" className="mx-auto" />
          </div>
        </div>
        <Gallery photos={photos} className="py-8 mb-12 border-t" />
      </Container>
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid grid-cols-3 gap-8">
            <div className="m-auto space-y-4">
              <H3>Part designer</H3>
              <ul className="text-gray-500 space-y-2 font-light">
                <li>Product thinking of business</li>
                <li>UX/UI Design (Figma)</li>
                <li>Web/Apps</li>
                <li>Sketch</li>
                <li>Design systems</li>
              </ul>
            </div>
            <img src="/images/about/ux_engineer.jpg" alt="" />
            <div className="m-auto space-y-4">
              <H3>Part developer</H3>
              <ul className="text-gray-500 space-y-2 font-light">
                <li>HTML</li>
                <li>CSS/SASS/Tailwind</li>
                <li>JavaScript (React.js, Next.js)</li>
                <li>Git/CI/CD</li>
                <li>Tooling maker</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="my-40">
        <Container>
          <div className="grid grid-cols-2 gap-8">
            <img src="https://via.placeholder.com/500/" alt="" className="m-auto" />
            <div className="m-auto space-y-4">
              <H3>Funny facts?</H3>
              <ul className="text-gray-500 space-y-2 font-light">
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
              <p>Learn a little bit more about me, how I got into design, and how I built my career as a product designer. I’ve included key things I've learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
            </div>
            <img src="https://via.placeholder.com/500/" alt="" className="m-auto" />
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default About;