import "./styles/app.scss";
import {
  Form,
  TextArea,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

import marked from "marked";

const message = "";

function createMarkup() {
  let rawMarkup = marked("# HERE", { sanitize: true });
  return { __html: rawMarkup };
}

function App() {
  return (
    <Container className="App">
      <Form>
        <Header as="h2" image={<Icon name="write" />} content="Editor" />
        <TextArea
          id="editor"
          rows={5}
          value="The value from here should go into #HERE!"
        />
      </Form>
      <Divider />
      <Form>
        <Header as="h2" image={<Icon name="eye" />} content="Preview" />
        <Segment>
          <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
        </Segment>
      </Form>
    </Container>
  );
}

export default App;
