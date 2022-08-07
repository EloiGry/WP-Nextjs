import { GET_PAGES } from "../queries/pages/get_pages";
import { GET_PAGE } from "../queries/pages/get_page";
import { useRouter } from "next/router";
import client from "../apollo/client";
import { isCustomPageUri } from "../utils/slug";

const Pages = ({data}) => {
  const router = useRouter();
	if ( router.isFallback ) {
		return <div>Loading...</div>;
	}
    console.log("slug" ,data);
    return (
          <p> Hello </p>
    )
};

export default Pages;


export async function getStaticProps({params}) {
  const { data } = await client.query({query: GET_PAGE, variables: {uri: params.slug.join( '/' )}})
  return {
    props: {
      data: data,
    },
 };
}

export async function getStaticPaths() {
    const { data } = await client.query({query: GET_PAGES})
    const pathsData = []

    data?.pages?.nodes.map(page => {
  if (!isCustomPageUri( page?.uri ) ) {
    const slugs = page?.uri?.split( '/' ).filter( pageSlug => pageSlug );
    pathsData.push({params: {slug: slugs}});
  }
    })
  

    return {
      paths : pathsData,
      fallback: true
   };
}

