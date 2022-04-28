import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkModeManager } from '../../../../hooks/useDarkMode'
import Button from '../../../fragments/Button'

const MedicalConditionTable = () => {
  const darkMode = useDarkModeManager();

  const diseases = [
    { id: 1, name: "abc", description: "aaaaa" },
    { id: 2, name: "abc", description: "bbbbb" },
    { id: 3, name: "abc", description: "ccccc" },
  ];
  return (
    <div>
    <h3>Choroby</h3>
    <Table striped bordered hover variant={darkMode.isDark ? "dark" : ""}>
      <thead>
        <tr>
          <th>#</th>
          <th>Nazwa</th>
        </tr>
      </thead>
      <tbody>
        {diseases.map((disease) => (
          <tr>
            <td>
              <Link to={`disease/details/${disease.id}`}>{disease.id}</Link>
            </td>
            <td>{disease.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Link to="medicalcondition/add">
      <Button text="Dodaj" />
    </Link>
  </div>
  )
}

export default MedicalConditionTable