import { Container, Layout } from "components";

const Contact = () => {
  return (
    <Layout
      title="Contact | Ken Huang"
      description="Contact Ken Huang for collaboration, mentorship, or speaking opportunities."
    >
      <Container>
        <section className="text-center">
          <h1 className="text-4xl my-40">
            Thanks for taking the time to reach out.
            <br /> How can I help you today?
          </h1>
          <p className="text-gray-500">
            Contact Me: <a href="mailto:bluetch@gmail.com" className="text-gray-500">bluetch@gmail.com</a>
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default Contact;
