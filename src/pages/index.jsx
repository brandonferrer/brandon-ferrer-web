import * as React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid } from "semantic-ui-react";
import { StaticImage } from "gatsby-plugin-image";
import { isMobile } from "react-device-detect";
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
                  "build"
                ) : (
                  <span className='neon-text-animation'>build</span>
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
        </Grid>
      </ContentWrapper>
    </Layout>
  );
};

export default Home;

export const Head = () => <title>BrandonFerrer.com | Home</title>;

const styles = {
  typewriterFont: css`
    font-family: impact !important;
    font-size: 16px;
    color: white;
}
    @media (max-width: 1024px) {
      font-size: 2.25rem;
    }
    @media (max-width: 500px) {
      display: none;
    }
  `,
  imageWrapper: css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
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
    max-width: 400px;
    margin: 0;
    border-radius: 0.25rem;
    border: 1.5rem solid white;
    // box-shadow: 10px 10px 5px #1b1c1c;
    // @media (max-width: 500px) {
    //   display: none;
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
