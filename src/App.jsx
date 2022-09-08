import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Employees from './components/Employees'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  // inicializa el estado con el valor del localstorage o si está vacio, el teamb por defecto
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')
  // inicializa el estado con el valor del localstorage o si está vacio, los empleoyees por defecto
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 13,
      fullName: 'Pepe Perez',
      designation: 'javaScript Dev',
      gender: 'male',
      teamName: 'TeamA'
    },
    {
      id: 14,
      fullName: 'Juan Gzlez',
      designation: 'React Dev',
      gender: 'male',
      teamName: 'TeamB'
    }
  ])

  // useEffect para guardar en localstore cuando employees array cambie
  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees))
  }, [employees])

  // // useEffect para guardar en localstore cuando selectTeam array cambie
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  const handleTeamSelectedChange = (e) => {
    console.log(e.target.value)
    setSelectedTeam(e.target.value)
  }
  // ? el empleado seleccionado con un click se añadirá al team : será borrado del equipo
  const handleEmployeeCardClick = (e) => {
    const TransformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id)
      ? (employee.teamName === selectedTeam)
        ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
      : employee)
    setEmployees(TransformedEmployees)
  }
  return (
    <main>
      <Header
        selectedTeam={selectedTeam}
        // para saber cuantos employees tiene cada Team
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelectedChange={handleTeamSelectedChange}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
      <Footer />
    </main>
  )
}
