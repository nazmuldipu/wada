export interface Offer {
  title: string;
  items: Feature[];
}

export interface Feature {
  slug: string;
  dialog: string;
  button_text: string;
  links: string;
  full_width: boolean;
}
