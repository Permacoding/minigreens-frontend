<template>
  <div></div>
</template>

<script >
  import { getMetaTags } from "../utils/seo";
  import { getStrapiMedia } from "../utils/medias";
  import { mapGetters } from "vuex";

  export default {
    async asyncData({ $strapi }) {
      return {
        faq: await $strapi.find("faq"),
      };
    },

    computed: mapGetters({
      global: "global/getGlobal",
    }),

    head() {
      const { seo } = this.faq;
      const { defaultSeo, favicon, siteName } = this.global;

      const fullSeo = {
        ...defaultSeo,
        ...seo,
      };
      return {
        titleTemplate: `%s | ${siteName}`,
        title: fullSeo.metaTitle,
        meta: getMetaTags(fullSeo),
        link: [
          {
            rel: "icon",
            href: getStrapiMedia(favicon.url),
          },
        ],
      };
    },
  };
</script>

<style>
</style>
