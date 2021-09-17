export interface Club {
  categories: string | null;
  description: string;
  email: string;
  facebook: string;
  homepage: string;
  id: number;
  images: string[];
  instagram: string | null;
  like_count: number;
  liked: boolean | null;
  name: string;
  phone: string | null;
  recommended: boolean;
  summary: string;
}
