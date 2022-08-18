export interface PageLink {
  title: string;
  to: string;
  externalLink?: string;
  newTab?: boolean;
}

export interface PageGroup {
  title: string;
  pages: Array<PageLink>;
}
