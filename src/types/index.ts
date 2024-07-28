export type TPicture = {
  id: string;
  imageUrl: string;
};

export type TTestimonial = {
  id?: string;
  comment: string;
  starRating: number;
  customer: {
    name: string;
    picture: string;
  };
};

export type TPortfolio = {
  id?: string;
  instagramURL: string;
};

export type NewsletterEmail = {
  id?: string;
  email: string;
  date: string;
};
