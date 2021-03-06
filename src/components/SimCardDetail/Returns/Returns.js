import React from 'react';

const Returns = (props) => {

  const returns = props?.returns ? props?.returns : {};

  const { date = "NA", reason = "NA", agent = "NA", distributor = "NA", shippingMethod = "NA", trackingNumber = "NA", receiptionStatus = "NA", receiptionDate = "NA" } = returns;

  return (
    <>
      <div className='returnContainer m-2 border rounded p-3'>
        <div className='mb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-bold text-primary'>Returns</span>
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
                <th scope='col'>Return Date</th>
                <th scope='col'>Return Reason</th>
                <th scope='col'>Agent</th>
                <th scope='col'>Distributor</th>
              </tr>
            </thead>
            <tbody className='mb-5'>
              <tr>
                <td>{date}</td>
                <td>{reason}</td>
                <td>{agent}</td>
                <td>{distributor}</td>
              </tr>
            </tbody>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Shipping Method</th>
                <th scope='col'>Tracking Number</th>
                <th scope='col'>Receiption Status</th>
                <th scope='col'>Receiption Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{shippingMethod}</td>
                <td>{trackingNumber}</td>
                <td>{receiptionStatus}</td>
                <td>{receiptionDate}</td>
              </tr>
              <br />
              <tr>
                <td>Notes</td>
                <td colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Returns;
