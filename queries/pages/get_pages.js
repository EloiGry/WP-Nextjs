import { gql } from '@apollo/client'


export const GET_PAGES = gql`
 query GET_PAGES {
  pages: pages(last: 1) {
    nodes {
      id
      uri
    }
  }
 }
 `;