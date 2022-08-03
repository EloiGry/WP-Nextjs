
import { GET_MENUS } from '../queries/getMenus'
import client from '../apollo/client';

export default function Home({menus}) {
  console.log(menus);
  return (
    <h1> Hello </h1>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({query: GET_MENUS})
  
  return {
    props: {
      menus: data,
    },
 };
}