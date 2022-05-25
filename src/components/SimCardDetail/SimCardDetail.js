import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import SimCard from './SimCard/SimCard';
import PhoneCarrierOperations from './PhoneCarrierOperations/PhoneCarrierOperations';
import AcpOperation from './AcpOperation/AcpOperation';
import Returns from './Returns/Returns';
import Notes from './Notes/Notes';
import SimOperationsLog from './SimOperationsLog/SimOperationsLog';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';



const SimCardDetail = (props) => {

  // console.log(props);

  //url pre
  const preUrl = process.env.REACT_APP_ROOT_URL;

  const { token } = useToken();

  const url = `${preUrl}/simCard`;

  // getting sim info
  const [simInfo, setSimInfo] = useState({});

  const history = useHistory();

  const _id = props.simId;

  console.log(_id)

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.status === "success") {
          setSimInfo(data.data)
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: `${data.message}`,
          });
          // history.goBack();
        }
      });
  }, []);
  return (
    <div className='tables'>
      <SimCard simInfo={simInfo}></SimCard>
      <PhoneCarrierOperations simInfo={simInfo}></PhoneCarrierOperations>
      <AcpOperation simInfo={simInfo}></AcpOperation>
      <Returns returns={simInfo?.returns}></Returns>
      <Notes notes={simInfo?.notes}></Notes>
      <SimOperationsLog operations={simInfo?.operations}></SimOperationsLog>
    </div>
  );
};

export default SimCardDetail;
