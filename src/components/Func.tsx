import { useState } from "react";
import { exampleData, exampleGet } from "../apiCalls/exampleCalls";
import ListGroup from "react-bootstrap/ListGroup";

// Interfaces can use inheritance
interface exampleType extends exampleData {
  id: number;
}

// Using state in a functional component
export default function Func() {
  const [content, setContent] = useState(undefined);

  if (!content) {
    exampleGet()
      .then((res) => res.json())
      .then(
        (data) => {
          if (data && data.length > 0 && !content) {
            setContent(
              data.map((item: exampleType) => (
                <ListGroup.Item key={item.id}>
                  ID Autora: {item.userId}
                  <br />
                  <b>{item.title}</b> {item.body}
                </ListGroup.Item>
              ))
            );
          }
        },
        (err) => console.log(err)
      );
  }

  return <ListGroup>{content}</ListGroup>;
}
