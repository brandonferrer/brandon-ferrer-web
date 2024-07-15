import React, { useState } from "react";
import { graphql } from "gatsby";
import { Image, Modal, Card, Grid } from "semantic-ui-react";
import { css } from "@emotion/react";
import Layout from "../components/Layout";
import { PageTitle } from "../components/typopgraphy";
import img from "../../static/family_park_city.jpg";

const YouTube = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const {
    allYoutubeVideo: { edges: videoItems },
  } = data;

  const handleVideoSelection = (item) => {
    setOpenModal(true);
    setSelectedVideo(item);
  };

  console.log("All items", videoItems);
  console.log("Selected item", selectedVideo);
  return (
    <Layout>
      <PageTitle title='YouTube' />
      {/* <Grid style={{ marginTop: "3rem" }}>
        <Grid.Column style={{ width: "70%", paddingTop: "3rem" }}>
          <p>
            Ferrer's In Flight is a passion project for Mary and I. Our
            relationship was rooted on seeing the world together, and now our
            focus is seeing the world with Phoebe!
          </p>
          <p>
            Throughout our family travel content creation journey, we've
            received so many positive messages from new and expecting parents
            saying it's amazing to see that a baby does not stop you from seeing
            the world. Along with sharing our fun adventures and food, we hope
            to inspire booking that next trip with your little one and making
            life long memories!
          </p>
        </Grid.Column>
        <Grid.Column style={{ width: "30%" }}>
          <img src={img} css={styles.mainImg} />
        </Grid.Column>
      </Grid> */}
      <Grid style={{ marginTop: "3rem" }}>
        <Grid.Column style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
          <p>
            Ferrer's In Flight is a passion project for Mary and I. Our
            relationship was rooted on seeing the world together, and now our
            focus is seeing the world with Phoebe!
          </p>
          <p>
            Throughout our family travel content creation journey, we've
            received so many positive messages from new and expecting parents
            saying it's amazing to see that a baby does not stop you from seeing
            the world. Along with sharing our fun adventures and food, we hope
            to inspire booking that next trip with your little one and making
            life long memories!
          </p>
        </Grid.Column>
      </Grid>

      <Modal onClose={() => setOpenModal(false)} open={openModal}>
        {selectedVideo && (
          <>
            <Modal.Header>{selectedVideo.node.title}</Modal.Header>
            <Modal.Content>
              <iframe
                title={selectedVideo.node.title}
                width='100%'
                height='500px'
                frameborder='0'
                allowFullScreen
                src={`https://www.youtube.com/embed/${selectedVideo.node.videoId}`}
              ></iframe>
            </Modal.Content>
          </>
        )}
      </Modal>
      {/* <PageTitle title="Ferrer's in flight" /> */}
      <div css={styles.cardContainer}>
        {videoItems.map((item) => {
          const video = item.node;
          return (
            <Card
              css={styles.card}
              onClick={() => {
                handleVideoSelection(item);
              }}
            >
              <Image css={styles.cardImage} src={video.thumbnail.url} />
              <Card.Content>
                <Card.Meta>{video.publishedAt}</Card.Meta>
                <Card.Description>{video.title}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export default YouTube;

const styles = {
  mainImg: css`
    max-width: 300px;
  `,
  cardContainer: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  card: css`
    width: 300px;
    height: 350px;
  `,
  cardContent: css`
    height: 200px;
  `,
  cardImage: css`
    height: 240px;
    object-fit: cover;
  `,
};

export const Head = () => <title>BrandonFerrer.com | YouTube</title>;

export const query = graphql`
  query getYoutubeData {
    allYoutubeVideo {
      edges {
        node {
          id
          title
          description
          videoId
          channelTitle
          thumbnail {
            url
            width
            height
          }
          publishedAt(formatString: "MM/DD/yyyy")
        }
      }
    }
  }
`;
