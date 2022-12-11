import { get, post, put, del } from "./basicCalls";

interface TutorialBase {
  // Not blank
  name: string,

  // Enum - TutorialType
  tutorialType: string,
  tutorialHTML: string | null
}

export interface TutorialRequest extends TutorialBase {
  // Integer
  tutorialId?: number
}

export interface TutorialResponse extends TutorialBase {
  tutorialId: number,
  avarageRating: number
}

export interface ReviewRequest {
  value: number,
  discription: string
}

const tutorialBase = "tutorial";
export const getTutorials = () => get(tutorialBase);
export const getTutorialById = (id: number) => get(`${tutorialBase}/${id}`);
export const createTutorial = (req: Readonly<TutorialRequest>) => post(tutorialBase, req);
export const updateTutorial = (req: Readonly<TutorialRequest>) => put(tutorialBase, req);
export const deleteTutorial = (id: number) => del(`${tutorialBase}/${id}`);
export const addReview = (id: number, user: number, req: Readonly<ReviewRequest>) => post(`${tutorialBase}/${id}/${user}`, req);
export const deleteReview = (id: number, user: number, review: number) => del(`${tutorialBase}/${id}/${user}/${review}`);
export const updateReview = (id: number, req: Readonly<ReviewRequest>) => put(`${tutorialBase}/${id}`, req);
