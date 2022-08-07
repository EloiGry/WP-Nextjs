import { gql } from '@apollo/client'
import { HeaderFooter } from '../menus';

export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
		${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title(format: RAW)
	    content
	    slug
	    uri
	  }
	}
	
`;
