import { useTheme } from 'vitepress-openapi/client'
import { useRegion } from '../theme/composables/useRegion.js'

const region = useRegion()

export function setRegionForSidebar(regionCode) {
  region.setCurrentRegion(regionCode)

  useTheme({
    i18n: {
      locale: regionCode === 'br' ? 'pt-BR' : 'es',
    },
  })

  return region.currentRegion.value.spec
}

export function addRegionPrefixToSidebarItems(prefix, items) {
  return {
    items: items.items.map((item) => {
      if (item.link)
        item.link = `${prefix}${item.link}`

      if (item.items)
        item.items = addRegionPrefixToSidebarItems(item.items)

      return item
    }),
  }
}
