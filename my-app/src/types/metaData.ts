export interface MetaDataTag {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  robots?: string;
  revisitAfter?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  googleSiteVerification?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: string;
  appleStatusBarStyle?: string;
  msApplicationTileColor?: string;
  msApplicationConfig?: string;
  themeColor?: string;
  viewport?: string;
  additionalTags?: { name: string; content: string }[];
}

export interface MetaData {
  homeMetaData: MetaDataTag;
  aboutMetaData: MetaDataTag;
  contactMetaData: MetaDataTag;
  privacyPolicyMetaData: MetaDataTag;
  toolsMetaData: MetaDataTag;
  toolMetaData: MetaDataTag;
}
