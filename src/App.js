import "./styles/app.scss";
import {
  Form,
  TextArea,
  Container,
  Divider,
  Header,
  Icon,
} from "semantic-ui-react";

function App() {
  return (
    <Container className="App">
      <Form>
        <Header as="h2" image={<Icon name="write" />} content="Editor" />
        <TextArea id="editor" rows={5} placeholder="Tell us more" />
      </Form>
      <Divider />
      <Form>
        <Header as="h2" image={<Icon name="eye" />} content="Preview" />
        <TextArea
          id="preview"
          rows={5}
          value="User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text."
        />
      </Form>
    </Container>
  );
}

export default App;
