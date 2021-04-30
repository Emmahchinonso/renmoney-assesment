import React from 'react'

const EmployeeDetails = ({register}) => {
  return (
    <>
      <h2>Employee details</h2>
      <label for="emp-name">Employer name</label>
      <input id="emp-mail" className="form__input" {...register('employeemail')} />

      <label for="sector">Employee Sector</label>
      <select id="sector" className="form__input" {...register('employeesector')} >
        <option value="finance">Finance</option>
        <option value="banking">Banking</option>
        <option value="charity">Charity</option>
      </select>

      <label for="startdate">Employment start date</label>
      <input type='date' id="startdate" className="form__input" {...register('startdate')} />

      <label for="officeaddress">Office address</label>
      <input id="officeaddress" className="form__input" {...register('officeaddress')} />

      <label for="workemail">WorkEmail</label>
      <input id="workemail" className="form__input" {...register('workemail')} />
    </>
  )
}

export default EmployeeDetails
