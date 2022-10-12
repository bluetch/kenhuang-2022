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
    <Layout title="About | Ken Huang">
      <Container>
        <div className="grid grid-cols-2 gap-40 mt-20">
          <div className="space-y-8">
            <H1 className="mb-8">Ken Huang</H1>
            <H3 className="text-gray-500 font-light">I am a UX Engineer based in Taipei, Taiwan.</H3>
            <p className="text-gray-500 font-light">Since 2005, I have enjoyed turning complex problems into simple, beautiful and intuitive designs. When I am not pushing pixels, you will find me cooking, gardening or working out in the park.</p>
          </div>
          <div>
            {/* <img src="/images/about/kenhuang_blue2.png" alt="Ken Huang" className="mx-auto" /> */}
          </div>
        </div>
        <Gallery photos={photos} className="py-8 my-12 border-t" />
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
            <img src="/images/about/ux_engineer.png" alt="" />
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
            <div className="grid grid-cols-2 gap-8">
            <img src="/images/about/20200219.jpg" alt="" className="rounded-lg aspect-square object-cover" />
            <img src="/images/about/20220724.jpg" alt="" className="rounded-lg aspect-square object-cover" />
            <img src="/images/about/20190612.jpg" alt="" className="rounded-lg aspect-square object-cover" />
            <img src="/images/about/20161206.jpg" alt="" className="rounded-lg aspect-square object-cover" />
            </div>
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
              <p className="text-gray-500 font-light">Learn a little bit more about me, how I got into design, and how I built my career as a product designer. I’ve included key things I have learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
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
          
        </Container>
      </section>
    </Layout>
  )
}

export default About;