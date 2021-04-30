import React from 'react'

const PersonalDetails = ({register}) => {
  return (
    <>
      <h2>Personal details</h2>
      <label for="residentialstatus">Residential status</label>
      <select id="residentialstatus" className="form__input" {...register('residentialstatus')}>
        <option>Owner</option>
        <option>Renting</option>
      </select>

      <label for="res-address">Residential address</label>
      <input id="res-address" className="form__input" {...register('residentialaddress')} />

      <label for="movedate">Date moved in</label>
      <input type='movedate' id="startdate" className="form__input" {...register('movedate')} />

      <label for="maritalstatus">Marital status</label>
      <select id="maritalstatus" className="form__input" {...register('maritalstatus')}>
        <option>Single</option>
        <option>Married</option>
      </select>

      <label for="education">Level of education</label>
      <select id="education" className="form__input" {...register('education')}>
        <option>Primary</option>
        <option>Secondary</option>
        <option>Graduate</option>
      </select>
    </>
  )
}

export default PersonalDetails
