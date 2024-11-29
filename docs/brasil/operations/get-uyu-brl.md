---
aside: false
outline: false
title: Peso Uruguaio
head:
  - [
    'meta',
    {
      name: 'description',
      content: 'API de cotações de moedas estrangeiras no Brasil',
    },
  ]
  - [
    'meta',
    {
      name: 'keywords',
      content: 'brasil, dolar, euro, peso argentino, real, peso uruguaio, peso chileno, dolar api, dolar api brasil',
    },
  ]
  - [
    'meta',
      {
        property: 'og:image',
        content: 'https://dolarapi.com/docs/assets/og.png',
      },
    ]
  - [
    'meta',
    {
      property: 'og:title',
      content: 'API para obter o preço do Dólar no Brasil',
    },
  ]
  - [
    'meta',
    {
      property: 'og:description',
      content: 'API de cotações de moedas estrangeiras no Brasil',
    },
  ]
  - ['meta', { property: 'og:url', content: 'https://dolarapi.com' }]
  - ['meta', { property: 'og:site_name', content: 'DolarApi.com' }]
  - ['meta', { property: 'og:type', content: 'website' }]
  - ['meta', { property: 'og:locale', content: 'pt_BR' }]
  - ['meta', { property: 'twitter:card', content: 'summary_large_image' }]
  - ['meta', { property: 'twitter:description', content: 'API de cotações de moedas estrangeiras no Brasil' }]
  - ['meta', { property: 'twitter:title', content: 'API para obter o preço do Dólar no Brasil' }]
  - ['meta', { property: 'twitter:site', content: '@dolarapi' }]
  - ['meta', { property: 'twitter:creator', content: '@enzonotario_' }]
  - ['meta', { property: 'twitter:image', content: 'https://dolarapi.com/docs/assets/og.png' }]
  - ['meta', { property: 'twitter:url', content: 'https://dolarapi.com' }]
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('br')
</script>

<OAOperation operationId="get-uyu-brl" :hide-branding="false">

<template #description="description">

Cotação do peso uruguaio em reais brasileiros

</template>

<template #footer>

<!--@include: ./parts/get-uyu-brl-footer.md -->

</template>

</OAOperation>
