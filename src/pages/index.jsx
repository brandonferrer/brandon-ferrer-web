import * as React from "react";
import Layout from "../components/Layout";
import { PageTitle } from "../components/typopgraphy";

const Index = () => {
  return (
    <Layout>
      <PageTitle title='Home' />
    </Layout>
  );
};

export default Index;

export const Head = () => <title>BrandonFerrer.com</title>;
