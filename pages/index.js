import { GET_MENUS } from "../queries/menus";
import client from "../apollo/client";
import Layout from "../components/layout";


export default function Home({data}) {
  return (
      <Layout data={data}>
        <p> content </p>
      </Layout>

  )
}

export async function getStaticProps() {
  const { data } = await client.query({query: GET_MENUS})
  
  return {
    props: {
      data : {
        menuHeader : data.headerMenu.edges,
        header: data.getHeader,
        menuFooter: data.footerMenu.edges,
        footer: data.getFooter
      },
    },
 };
}