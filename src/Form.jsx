import { useState, useCallback } from 'react';

export function Form() {
  const [value, setValue] = useState("Change me");

  const handleChange = useCallback((event) => {
    setValue(event.currentTarget.value);
  }, []);

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}
