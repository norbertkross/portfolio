export interface Blog {
  id: string;
  slug?: string;
  title?: string;
  content: string;
  createdAt?: string;
  image_url?: string;
  tags?: string[];
  author?: string;
  short_description?: string;
}
