import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDarkModeManager } from '../../../../hooks/useDarkMode';
import Button from '../../../fragments/Button';

const AllergyTable = () => {
  const darkMode = useDarkModeManager();

  const allergies = [
    { id: 1, type: "Wziewna", to: "aaa", extra: "bbb" },
    { id: 2, type: "Kontaktowa", to: "aaa", extra: "bbb" },
    { id: 3, type: "Pokarmowa", to: "aaa", extra: "bbb" },
  ];
  return (
    <div className="mb-3">
        <h3>Alergie</h3>
        <Table striped bordered hover variant={darkMode.isDark ? "dark" : ""}>
          <thead>
            <tr>
              <th>#</th>
              <th>Rodzaj alergii</th>
              <th>Na co</th>
              <th>Dodatkowe informacje</th>
            </tr>
          </thead>
          <tbody>
            {allergies.map((allergy) => (
              <tr>
                <td>
                  <Link to={`allergy/details/${allergy.id}`}>{allergy.id}</Link>
                </td>
                <td>{allergy.type}</td>
                <td>{allergy.to}</td>
                <td>{allergy.extra}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="allergy/add">
          <Button text="Dodaj" />
        </Link>
      </div>
  )
}

export default AllergyTable