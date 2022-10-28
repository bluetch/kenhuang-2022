import { Container, Layout } from "components";

const Contact = () => {
  const fields = [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Email",
      type: "email",
    },
    {
      label: "Message",
      type: "textarea",
    },
  ];
  return (
    <Layout title="Contact | Ken Huang">
      <Container>
        <section className="text-center">
          <h1 className="text-4xl my-40">Thanks for taking the time to reach out.<br /> How can I help you today?</h1>
          <p className="text-gray-500">Contace Me: <a href="mailto:bluetch@gmail.com" className="text-gray-500">bluetch@gmail.com</a></p>
        </section>
      </Container>
    </Layout>
  )
}

export default Contact;