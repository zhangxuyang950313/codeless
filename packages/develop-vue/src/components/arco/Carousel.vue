<template>
  <Carousel
    :autoPlay="true"
    animation-name="card"
    show-arrow="hover"
    indicator-position="outer"
    :style="{
      width: '100%',
      height: '240px'
    }"
  >
    <CarouselItem
      class="Item"
      v-for="(image, index) of images"
      :style="{ width: '60%' }"
      :key="index"
    >
      <img
        :src="image"
        :style="{
          width: '100%'
        }"
      />
    </CarouselItem>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, CarouselItem } from "@arco-design/web-vue";

const images = [
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
];
</script>
