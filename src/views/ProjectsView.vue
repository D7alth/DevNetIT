<template>
  <HomeSection
    :headlineText="hero.headlineText"
    :descriptionText="hero.descriptionText"
    :ctaHero="ctaHero"
    :imageSourcePath="hero.featureImage"
    :imageAlt="hero.featureImageAlt"
    width="300px"
      height="100%"
      margin="0px"
      padding="0px"
  />
  <TechnologySection 
      :sectionTitle="technology.hatText"
      :sectionText="technology.description"
      :logos="technology.technologyGallery"
  />
  
  <BrandingSection 
    :hatText="branding.hat"
    :headlineText="branding.headline"
    :descriptionText="branding.description"
    :brandingIconList="brandingIconList"
    :featureGallery="BrandingGallery"
    :cta="brandingCta"
  />

</template>

<script>

import axios from "axios";

import HomeSection from './../sections/HeroSection.vue';
import TechnologySection from './../sections/TechnologySection.vue';
import BrandingSection from './../sections/BrandingSection.vue';

export default {
  name: 'ProjectsView',
  components: {
    HomeSection,
    TechnologySection,
    BrandingSection,
  }, 
  data() {
    return {
      URL: 'http://3.136.127.214',

      projectsCards: [], 
      projects:{
        headline: "",
        hat: "",
      },
      ctaHero: [],
      hero: {
        headlineText: "",
        descriptionText: "",
        featureImage: "",
        featureImageAlt: "",
      },
      technology: {
        hatText: "",
        description: "",
        technologyGallery: [],
      },
      brandingCta: [],
      BrandingGallery:[],
      brandingIconList: [],
      branding: {
        hatText: "",
        headline: "",
        description: "",
        iconList: [],
      },
      ctaSection: {
        headlineText: "",
        hat: "",
        label: "",
        url: "",
      },
    };
    
  },
  created() {
    this.getAllData();
  },
  methods: {
    async getAllData() {
      try {
        const projectId = this.$route.params.id;

        const response = await axios.get(this.URL + `/projects/${projectId}`);
        const responseData = response.data;

        this.hero = {
          headlineText: responseData.Headline,
          descriptionText: responseData.Description,
          featureImage: responseData.Client_logo.url,
        };

        this.ctaHero = responseData.Project_hero_cta.map((item) => ({
          Label: item.Label,
          Link: item.Link, 
          Style: item.Style,
        }));

        this.technology = {
          hatText: responseData.Technologies_Title,
          description: responseData.Technologies_Description,
          technologyGallery: responseData.Technologies_Gallery.map((galleryItem) => ({
            url: galleryItem.url,
            label: galleryItem.alternativeText

          })),
        };

        this.branding = {
          hatText: responseData.Project_resume_hat,
          headline: responseData.Project_resume_title,
          description: responseData.Project_resume_descritpion,
          iconList: responseData.Projects_points.map((point) => point.Addition_point_text),
        };

        this.BrandingGallery = responseData.Projects_resume_gallery.map((item) => ({
          url: item.url,
        }));

        if (Array.isArray(responseData.Projects_points)) {
          this.brandingIconList = responseData.Projects_points.map((item) => ({
            iconUrl: item.icon.url,
            iconTitle: item.Addition_point_text
          }));
        } else {
          console.error("responseData.clients.data não é uma array.");
        }

        if (Array.isArray(responseData.Project_resume_cta) && responseData.Project_resume_cta.length > 0) {
          this.brandingCta = responseData.Project_resume_cta.map((item) => ({
            Label: item.Label,
            Link: item.Link, 
            Style: item.Style,
          }));
        } else {
          this.brandingCta = [
            {
              Label: responseData.Project_resume_cta.Label,
              Link: responseData.Project_resume_cta.Link, 
              Style: responseData.Project_resume_cta.Style,
            }
          ];
        }

      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }
  },
};
</script>
<style scoped>
.responsive-img {
    max-width: 300px !important;
    max-height: 100% !important;
    margin-bottom: 0 !important;
}

</style>

