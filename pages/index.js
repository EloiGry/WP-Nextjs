import { GET_PAGE } from "../queries/pages/get_page";
import client from "../apollo/client";
import Layout from "../components/layout";


export default function Home({data}) {
  console.log(data);
  return (
      <Layout data={data}>
        <p> content </p>
      </Layout>

  )
}

export async function getStaticProps() {
  const { data } = await client.query({query: GET_PAGE, variables: {
    uri: '/home',
  },
  })
  
  return {
    props: {
      data : {
        menuHeader : data.headerMenu.edges,
        header: data.getHeader,
        menuFooter: data.footerMenu.edges,
        footer: data.getFooter,
        page: data.page
      },
    },
 };
}