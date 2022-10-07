import { get, post, put, del } from "./basicCalls";

export interface Review {

}

// Get all reviews
export const getReviews = () => get("review");

// Get review by id
export const getReviewById = (id: number) => get(`review/${id}`);

// Creates new review
export const createReview = (data: Readonly<Review>) => post("review", JSON.stringify(data));

// Modify review
export const updateReview = (id: number, data: Readonly<Review>) => put(`review/${id}`, JSON.stringify(data));

// Delete review
export const deleteReview = (id: number) => del(`review/${id}`);
