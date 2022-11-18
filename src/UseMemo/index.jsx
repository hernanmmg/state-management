import { useState, useMemo, useCallback } from 'react';

function SortedList({ list, sortFunc }) {
  const result = useMemo(() => [...list].sort(sortFunc), [list, sortFunc])
  return result.join(", ");
}

const UseMemo = () => {
  const [numbers] = useState([10,20,30]);
  const [names] = useState(["Z", "A", "B", "F"]);
  const namesSort = useMemo(() => [...names].sort(), [names]);

  const total = useMemo(
    () => numbers.reduce((acc, curr) => acc + curr, 0),
    [numbers]
  );
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (<>
  <div>{total}</div>
  <div>{names.join(", ")}</div>
  <SortedList list={names} sortFunc={sortFunc} />
  </>);
}
 
export default UseMemo;