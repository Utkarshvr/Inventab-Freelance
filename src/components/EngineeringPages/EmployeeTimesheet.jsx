import React from 'react'
import Select from 'react-select'

export default function EmployeeTimesheet() {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='card'>
          <div className='table-responsive111'>
            <table className='table header-border table-responsive-sm111'>
              <thead>
                <tr>
                  <th scope='col'>Project</th>
                  <th scope='col'>Backlog</th>
                  <th scope='col'>Mon</th>
                  <th scope='col'>Tue</th>
                  <th scope='col'>Wed</th>
                  <th scope='col'>Thu</th>
                  <th scope='col'>Fri</th>
                  <th scope='col'>Sat</th>
                  <th scope='col'>Sun</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='select-port'>
                      <Select
                        className='select select-width'
                        placeholder='Select Project'
                        isSearchable
                        isClearable
                      >
                      </Select>
                    </div>
                  </td>
                  <td>
                    <input
                      className='new_input_class'
                      type='text'
                      placeholder='Short Description'
                      name='short_description'
                    >
                    </input>
                  </td>
                  <td>
                  <input
                  className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <input
                  className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <input
                  className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <input
                  className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <input
                  className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <input
                  className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <input
                    className='checkbox ms-2'
                    type='checkbox'
                    name='is_approved'
                    id='is_approved'
                  >
                  </input>
                  </td>
                  <td>
                  <button
                  type='button'
                  className='btn btn-primary rounded-1 py-2 px-4 d-flex justify-content-center align-items-center'
                  >
                  Add
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
