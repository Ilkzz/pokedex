import Head from "next/head";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from "../components/PostList";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import styles from "../styles/index.module.scss";

const IndexPage = () => (
  <>
    <Hero />
    <div className="container-fluid py-5" style={{ backgroundColor: "#FF2E2E" }}>
      <div className="container">
        <PostList />
      </div>
    </div>
    <Footer />
  </>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
