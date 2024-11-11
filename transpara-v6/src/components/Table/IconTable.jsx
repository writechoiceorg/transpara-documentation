import React from 'react';
import data from '@site/static/data/setup-and-administration/interfaces/interfaces.json';

const IconTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Interface</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        { data.map((item, index) => (
          <tr key={index}>
            <td>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={`../../../img/setup-adm/interfaces/icons/${item.logo}.png`}
                  alt={item.name}
                  style={{ width: '20px', height: '20px', marginRight: '10px', cursor: 'default' }}
                />
                <span>{item.name}</span>
              </div>
            </td>
            <td>{item.description}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
};

export default IconTable;
