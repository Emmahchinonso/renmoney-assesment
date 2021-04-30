import React from 'react'

const EligibilityCheck = ({register}) => {
  return (
    <>
      <h2>Eligibility</h2>
      <label for="state">State</label>
      <input id="state" className="form__input" {...register('state')}/>

      <label for="lga">LGA</label>
      <input id="lga" className="form__input" {...register('lga')}/>

      <label for="status">Employment Status</label>
      <select id="status" className="form__input" {...register('employeestatus')}>
        <option>Employed</option>
        <option>UnEmployed</option>
      </select>

      <label for="income">Monthly income</label>
      <input id="income" className="form__input" {...register('income')}/>

      <label for="bvn">Bvn</label>
      <input id="bvn" className="form__input" {...register('bvn')} />

      <label for="date">Date of birth</label>
      <input type='date' id="date" className="form__input" {...register('dateofbirth')} />

      <label for="firstname">Firstname</label>
      <input id="firstname" className="form__input" {...register('firstname')} />

      <label for="lastname">Lastname</label>
      <input id="lastname" className="form__input" {...register('lastname')} />

      <label for="middlename">Middlename</label>
      <input id="middlename" className="form__input" {...register('middlename')} />

      <label for="email">Email</label>
      <input id="email" className="form__input" {...register('email')} />

      <label for="phone">Phone</label>
      <input id="phone" className="form__input" {...register('phone')} />

      <label for="gender">Gender</label>
      <input id="gender" className="form__input" {...register('gender')} />
    </>
  )
}

export default EligibilityCheck
