import React from 'react';

const AcpOperation = ({ simInfo }) => {

  console.log(simInfo);

  const { distributor, agent, application, suscriber, device } = simInfo;

  return (
    <>
      <div className='AcpOerationContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>ACP Operations</span>
            <button className='btn btn-outline-secondary'>Edit</button>
          </div>
        </div>
        <div className='table-responsive'>
          <table class='table table-bordered text-center'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Distributor</th>
                <th scope='col'>Agent</th>
                <th scope='col'>Application Number</th>
                <th scope='col'>Suscriber ID</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <td>{distributor ? distributor : "Not Assigned"}</td>
                <td>{agent ? agent : "Not Assigned"}</td>
                <td>{application?.id ? application?.id : "NA"}</td>
                <td>{suscriber?.id ? suscriber?.id : "Not Assigned"}</td>
              </tr>
            </tbody>
            <br />
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Customer FName</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Application Date</th>
                <th scope='col'>Device IMEI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{suscriber?.firstName ? suscriber?.firstName : "Not Assigned"}</td>
                <td>{suscriber?.lastName ? suscriber?.lastName : "Not Assigned"}</td>
                <td>{application?.date ? application?.date : "NA"}</td>
                <td>{device?.IMEI ? device?.IMEI : "NA"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AcpOperation;
