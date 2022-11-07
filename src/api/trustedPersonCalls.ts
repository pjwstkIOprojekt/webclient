import { get, del, post, put } from "./basicCalls";

interface TrustedPersonBase {
  // Not blank
  firstName: string,

  // Not blank
  lastName: string,

  // Email
  email: string | null,

  // Phone
  phone: string
}

export interface TrustedPersonRequest extends TrustedPersonBase {
  // Email
  userEmail: string
}

export interface TrustedPersonResponse extends TrustedPersonBase {
  trustedId: number
}

const trustedBase = "trusted";
export const getTrustedPersons = () => get(trustedBase);
export const getTrustedPersonByEmail = (email: string) => get(`${trustedBase}/${email}`);
export const deleteTrustedPerson = (email: string) => del(`${trustedBase}/${email}`);
export const createTrustedPerson = (req: Readonly<TrustedPersonRequest>) => post(trustedBase, req);
export const updateTrustedPerson = (req: Readonly<TrustedPersonRequest>) => put(trustedBase, req);
