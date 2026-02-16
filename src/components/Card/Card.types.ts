export interface CardTypes {
  image?: string;
  title?: string;
  description?: string;
  onAdd?: () => void;
  onClick?: () => void;
}
