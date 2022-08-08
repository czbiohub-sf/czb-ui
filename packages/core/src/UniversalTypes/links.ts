export interface PageLink {
  title: string;
  to: string;
  externalLink?: string;
}

export interface PageGroup {
  title: string;
  pages: Array<PageLink>;
}
