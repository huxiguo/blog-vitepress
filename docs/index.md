---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: blog
titleTemplate: huxg的编程知识笔记

hero:
  name: "seekhoo"
  text: 前端攻城狮的学习笔记
  tagline: 我拥有的技能树
  image:
    src: ./logo.png
    alt: challenges
  actions:
    - theme: brand
      text: 计算机基础
      link: /
    - theme: alt
      text: 高频面试题
      link: /interview/html/Cookie与Session
    - theme: alt
      text: Leetcode
      link: /leetcode/maximum-split-of-positive-even-integers
    - theme: alt
      text: 前端工程化
      link: /
    - theme: alt
      text: 前端部署
      link: /leecode
    - theme: alt
      text: 全栈开发
      link: /
    - theme: alt
      text: Vue
      link: /
    - theme: alt
      text: React
      link: /
    - theme: alt
      text: 微信小程序
      link: /miniprogram
    - theme: alt
      text: HarmonyOS
      link: /harmonyOS

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
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-button-brand-bg:#722ed1;
  --vp-button-brand-hover-bg:#531dab;
  --vp-button-brand-active-bg:#391085;
  /* --vp-c-indigo-1:lab(72.7377% 33.9074 77.3632); // 橙色 */
  --vp-c-indigo-1:#30a46c;
  --vp-home-hero-image-filter: blur(44px);
  }
  @media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

</style>

