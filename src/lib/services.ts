import { db, storage } from "@/firebase/firebase.config";
import type { NewsletterEmail, TPortfolio, TTestimonial } from "@/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export const addNewTestimonialToDB = async (newTestimonial: TTestimonial) => {
  return await addDoc(collection(db, "testimonials"), newTestimonial);
};

export const getTestimonialsFromDB = async () => {
  let testimonials: TTestimonial[] = [];

  const q = query(collection(db, "testimonials"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) =>
    testimonials.push({
      id: doc.id,
      ...doc.data(),
    } as TTestimonial),
  );

  return testimonials;
};

export const deleteTestimonialById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "testimonials", id));
  const document = querySnapshot.data();

  const docRef = ref(storage, document?.customer.picture);
  await deleteObject(docRef);

  await deleteDoc(doc(db, "testimonials", id));
};

export const addNewPortfolioToDB = async (newPortfolio: TPortfolio) => {
  try {
    return await addDoc(collection(db, "portfolios"), newPortfolio);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPortfolios = async () => {
  let portfolio: TPortfolio[] = [];

  const querySnapshot = await getDocs(collection(db, "portfolios"));

  querySnapshot.forEach((doc) => {
    portfolio.push({ id: doc.id, ...doc.data() } as TPortfolio);
  });

  return portfolio;
};

export const deletePortfolioById = async (id: string) => {
  return await deleteDoc(doc(db, "portfolios", id));
};

export const addNewsletterEmail = async (newsletterEmail: NewsletterEmail) => {
  return await addDoc(collection(db, "newsletter"), newsletterEmail);
};

export const getAllNewsletterEmails = async () => {
  let emails: NewsletterEmail[] = [];

  const querySnapshot = await getDocs(collection(db, "newsletter"));

  querySnapshot.forEach((doc) => {
    emails.push({ id: doc.id, ...doc.data() } as NewsletterEmail);
  });

  return emails;
};
