---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "blog"
  text: "my study blog"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    icon: 🍦
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    icon: 🍔
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    icon: 🇨🇳
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
  :root{
    --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  }
</style>

