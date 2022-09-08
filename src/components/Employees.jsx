import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

const Employees = ({  employees, selectedTeam, handleTeamSelectedChange, handleEmployeeCardClick }) => {
  
  
  return (
    <main className='container'>
      <h1 className='row justify-content-center'> Employees </h1>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectedChange}>
            <option value='TeamA'>Team A</option>
            <option value='TeamB'>Team B</option>
            <option value='TeamC'>Team C</option>
            <option value='TeamD'>Team D</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {
              employees.map((eachEmployee) => (
              <div 
                // se asigna cada employee.id a id y a la key "listado para react"
                key={ eachEmployee.id } id={eachEmployee.id} 
                // se visualizará un border en la card si el employee pertenece al teamName del estado seleccionado
                className={( eachEmployee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2' )} 
                style={{ cursor:'pointer' }} 
                onClick={ handleEmployeeCardClick }>
                {(eachEmployee.gender === 'female') ? <img src={ femaleProfile } className='card-img-top' alt='Foto'/>
                                             : <img src={ maleProfile } className='card-img-top' alt='Foto'/>}
                <div className='card-body'>
                  <h5 className='card-title'> { eachEmployee.fullName } </h5>
                  <p className='card-text'>  { eachEmployee.designation } </p>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </div>   
    </main>
  )
}
// onClick={ handleEmployeeCardClick }>
// ? el empleado seleccionado con un click se añadirá al team : será borrado del equipo
  // const handleEmployeeCardClick = (e) => {
  //   const TransformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id)
  //                                             ? (employee.teamName === selectedTeam) 
  //                                             ? {...employee, teamName:''} : {...employee, teamName: selectedTeam} 
  //                                             : employee)
  //   setEmployees(TransformedEmployees)
  // }
export default Employees