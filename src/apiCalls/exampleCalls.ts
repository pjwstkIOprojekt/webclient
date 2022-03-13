// Interfaces in TS are used to define custom object types
export interface exampleData {
  title: string;
  body: string;
  userId: number;
}

// API fetch returns a Promise
export function exampleGet() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

// Fetch can also be used for other requests like POST etc.
// In TS all data types can be made readonly
export function examplePost(data: Readonly<exampleData>) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
}
