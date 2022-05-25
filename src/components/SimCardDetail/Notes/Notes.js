import React from 'react';

const Notes = (props) => {

  const note = props?.notes ? props?.notes : "";

  let noteList = "";
  if (typeof note === "object") {
    noteList += note.map(note => {
      return `<tr>
        <td>${note?.date}</td>
        <td>${note?.name}</td>
        <td colSpan={3}>
          ${note?.note}
        </td>
      </tr>`;
    })
  }
  else {
    noteList = "No Note added";
  }
  console.log(noteList)


  return (
    <>
      <div className='noteContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>Notes</span>
            <div className='d-flex'>
              <button className='btn btn-outline-secondary mx-1'>Add</button>
              <button className='btn btn-outline-secondary'>Edit</button>
            </div>
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered text-center'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>User Name</th>
                <th colSpan={3}>Notes</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <td>{new Date().toLocaleDateString()}</td>
                <td>NA</td>
                <td colSpan={3}>
                  UserNote Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Soluta, excepturi.
                </td>
              </tr>

              {/* {noteList} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Notes;
