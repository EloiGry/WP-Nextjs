import { gql } from "@apollo/client"

export const HeaderFooter = `
  headerMenu: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        id
        label
        path
        uri
        childItems {
          edges {
            node {
              id
              label
              path
              uri
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
` 
export const GET_MENUS = gql `
query GET_MENUS {
  ${HeaderFooter}
}`