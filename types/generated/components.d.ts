import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalSociallinks extends Schema.Component {
  collectionName: 'components_global_sociallinks';
  info: {
    displayName: 'sociallinks';
    description: '';
  };
  attributes: {
    Platform: Attribute.Enumeration<
      ['douyin', 'video_hao', 'xiaohongshu', 'tiktok']
    >;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.sociallinks': GlobalSociallinks;
    }
  }
}
