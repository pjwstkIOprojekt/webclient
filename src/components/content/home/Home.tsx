import { Container } from "react-bootstrap";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie } from "recharts";

const Home = () => {
  const data = [
    {
      "name": "Styczeń",
      "Wypadki": 32,
      "Akcje ratunkowe": 17
    },
    {
      "name": "Luty",
      "Wypadki": 10,
      "Akcje ratunkowe": 8
    },
    {
      "name": "Marzec",
      "Wypadki": 31,
      "Akcje ratunkowe": 24
    },
    {
      "name": "Kwiecień",
      "Wypadki": 31,
      "Akcje ratunkowe": 20
    },
    {
      "name": "Maj",
      "Wypadki": 28,
      "Akcje ratunkowe": 16
    },
    {
      "name": "Czerwiec",
      "Wypadki": 12,
      "Akcje ratunkowe": 12
    },
    {
      "name": "Lipiec",
      "Wypadki": 15,
      "Akcje ratunkowe": 17
    },
    {
      "name": "Sierpień",
      "Wypadki": 18,
      "Akcje ratunkowe": 17
    },
    {
      "name": "Wrzesień",
      "Wypadki": 20,
      "Akcje ratunkowe": 19
    },
    {
      "name": "Październik",
      "Wypadki": 23,
      "Akcje ratunkowe": 29
    },
    {
      "name": "Listopad",
      "Wypadki": 32,
      "Akcje ratunkowe": 25
    },
    {
      "name": "Grudzień",
      "Wypadki": 40,
      "Akcje ratunkowe": 24
    }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1 className="mb-3">Strona główna</h1>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Wypadki" fill="#8884d8" />
        <Bar dataKey="Akcje ratunkowe" fill="#82ca9d" />
      </BarChart>
    </Container>
  )
}

export default Home;
