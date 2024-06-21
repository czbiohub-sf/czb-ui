export interface PageLink {
  title?: string;
  to?: string;
  externalLink?: boolean;
  newTab?: boolean;
}

export interface PageGroup {
  title: string;
  pages: Array<PageLink>;
}
