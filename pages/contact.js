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
    <Layout title="Contact">
      <Container>
        <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
        <label htmlFor="">
          <input type="text" />
        </label>
      </Container>
    </Layout>
  )
}

export default Contact;