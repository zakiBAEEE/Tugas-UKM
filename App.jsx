import React, { useState } from 'react';

function AutoSumForm() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleChangeValue1 = (e) => {
    setValue1(e.target.value);
  };

  const handleChangeValue2 = (e) => {
    setValue2(e.target.value);
  };

  const sum = parseFloat(value1) + parseFloat(value2);

  return (
    <div>
      <div>
        <label>Angka 1:</label>
        <input type="text" value={value1} onChange={handleChangeValue1} />
      </div>
      <div>
        <label>Angka 2:</label>
        <input type="text" value={value2} onChange={handleChangeValue2} />
      </div>
      <div>
        <p>Hasil Penjumlahan: {isNaN(sum) ? ' ' : sum}</p>
      </div>
    </div>
  );
}

export default AutoSumForm;
