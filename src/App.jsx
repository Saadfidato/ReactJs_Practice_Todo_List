import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };
  return (
    <div>
      <table>
        <tbody>
          {list.length > 0 ? (
            list.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element}</td>
                  <td>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      <input onChange={(e) => setItem(e.target.value)} placeholder="Item" />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default App;
