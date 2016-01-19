// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({primary: "#000000"});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={200}>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Defining UX Design</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  By: Yonas Berhe
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  1/19/2016
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <BlockQuote>
              UX design is the process used to determine the experience your user has when using your product.
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary" notes="User Experience designers should always take into account information and original hypotheses">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Design personas
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="white" notes="User Experience designers should always take into account information and original hypotheses">
            <Markdown>
              {`Design personas & Marketing personas are not the same`}
            </Markdown>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Markdown>
              {`
Marketing personas involves finding:
* Demographic information
* Buying motivations
* Marketing message
* Media habits
              `}
            </Markdown>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.city.replace("/", "")} bgDarken={0.75} textColor="white">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Design personas involves researching:
            </Heading>
            <List>
              <Appear>
                <ListItem>User Goals</ListItem>
              </Appear>
              <Appear>
                <ListItem>Current Behavior</ListItem>
              </Appear>
              <Appear>
                <ListItem>Pain Points</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <BlockQuote>
              <Quote>A products success is directly predicated to successful user experience design.</Quote>
            </BlockQuote>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
