import { gql } from "@apollo/client"

export const GET_MENUS = gql ` {
    headerMenu: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
      edges {
        node {
          id
          label
          path
          url
          childItems {
            edges {
              node {
                id
                label
                path
                url
              }
            }
          }
        }
      }
    }
    footerMenu: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
      edges {
        node {
          id
          label
          path
          url
        }
      }
    }
    getFooter {
      copyrightText
      sidebarOne
    }
    getHeader {
      siteLogoUrl
      siteTagLine
      siteTitle
    }
  }
  `