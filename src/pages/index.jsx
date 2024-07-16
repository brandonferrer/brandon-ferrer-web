import * as React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid } from "semantic-ui-react";
import { StaticImage } from "gatsby-plugin-image";
import { isMobile } from "react-device-detect";
import { RevealContent, Reveal } from "semantic-ui-react";
import Layout from "../components/Layout";
import { ContentWrapper } from "../shared/wrappers";

const Home = () => {
  return (
    <Layout>
      <ContentWrapper index>
        <Grid
          stackable
          verticalAlign='middle'
          columns={2}
          style={{ width: "100%", margin: 0, padding: 0 }}
        >
          <Grid.Column>
            <div css={styles.textWrapper}>
              <h1 className='neon-text'>
                I like to
                <br />
                {isMobile ? (
                  "build "
                ) : (
                  <span className='neon-text-animation'>build </span>
                )}
                things 👨🏾‍💻
              </h1>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div css={styles.imageWrapper}>
              <StaticImage
                src='../images/stroller-min.jpg'
                css={styles.image}
                alt='brandon'
              />
            </div>
          </Grid.Column>
          {/* <Grid.Column>
            <Reveal animated='fade'>
              <RevealContent visible>
                <div css={styles.imageWrapper}>
                  <StaticImage
                    src='../images/stroller-min.jpg'
                    css={styles.image}
                    alt='brandon'
                  />
                </div>
              </RevealContent>
              <RevealContent hidden>
                <div css={styles.imageWrapper}>
                  <h1 css={styles.heyFont}>Hey there 👋🏽</h1>
                  <p css={styles.contextFont}>
                    I'm a freelance web developer providing development services
                    and technology consulting taking small to mid size
                    businesses to the next level!
                    <br />
                    <br />
                    Being a software engineer at a fortune 500 software company,
                    and working at an early stage tech startup, I'll deliver
                    value and guidance beyond just your website, mobile app or
                    online strategy. Let's chat! 😅
                  </p>
                </div>
              </RevealContent>
            </Reveal>
          </Grid.Column> */}
        </Grid>
      </ContentWrapper>
    </Layout>
  );
};

export default Home;

export const Head = () => <title>BrandonFerrer.com | Home</title>;

const styles = {
  heyFont: css`
    font-family: Indie Flower;
    text-transform: uppercase;
    font-size: 25px;
    color: white;
    padding: 1rem;
    max-width: 400px;
  `,
  contextFont: css`
    font-family: Nunito Sans;
    text-transform: uppercase;
    font-size: 16px;
    color: white;
    padding: 1rem;
    max-width: 400px;
    @media (max-width: 375px) {
      font-size: 14px;
    }
  `,
  imageWrapper: css`
    width: 100%;

    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    // @media (max-width: 500px) {
    //   display: none;
    // }
  `,
  fifty: css`
    min-height: 200px;
    @media (max-width: 500px) {
      padding-top: 2rem;
    }
  `,
  textWrapper: css`
  width: 100%;
  minHeight: 40px;
  margin: 0;
  // padding-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    padding-left: 1rem;
  }
  ,
`,
  image: css`
    display: inline-block;
    max-width: 400px;
    margin: 0;
    border-radius: 0.25rem;
    border: 1.5rem solid white;

    // @media (min-width: 1200px) {
    //   top: -7rem;
    // }
  `,
  threeD: css`
    font-family: "Helvetica Neue", sans-serif;
    font-size: 4rem;
    color: #22313f;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    text-shadow: -0.09em 0 0 #f22613, 0.09em 0 0 #00ffff;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  `,
};
