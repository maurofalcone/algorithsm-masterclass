import { useState } from "react";
import MyInput from "../../shared/MyInput";
import { toDoMock } from "../../mocks";
import styles from "./ToDoList.module.css";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [toDos, setToDos] = useState(toDoMock);

  const clearInput = () => {
    setInputValue("");
  };

  const handleDelete = (id: string) => {
    const updateList = toDos.filter((td) => td.id !== id);
    setToDos(updateList);
    clearInput();
    /*
      const index = toDos.findIndex((td) => td.id === selectedId);
      if (index !== -1) {
        const updatedList = [...toDos].splice(index, 1);
        setToDos(updatedList);
        setIsEditing(false);
      }
    */
  };

  const handleStartEditting = (id: string, description: string) => {
    setSelectedId(id);
    setInputValue(description);
    setIsEditing(true);
  };

  const handleEndEditting = () => {
    const index = toDos.findIndex((td) => td.id === selectedId);
    if (index !== -1) {
      const updatedList = [...toDos];
      updatedList.splice(index, 1, {
        ...toDos[index],
        description: inputValue,
      });
      /* updatedList[index].description = inputValue; */
      setToDos(updatedList);
      setIsEditing(false);
      clearInput();
    }
  };

  const handleAdd = () => {
    if (!!inputValue) {
      const newList = [
        ...toDos,
        { id: uuidv4(), description: inputValue, isFinished: false },
      ];
      setToDos(newList);
      setIsEditing(false);
      clearInput();
    }
  };

  const handleStatusUpdate = (id: string) => {
    const index = toDos.findIndex((td) => td.id === id);
    if (index !== -1) {
      const updatedList = [...toDos];
      updatedList.splice(index, 1, {
        ...toDos[index],
        isFinished: !toDos[index].isFinished,
      });
      /* updatedList[index].description = inputValue; */
      setToDos(updatedList);
    }
  };

  const renderAddOrEditButton = () => {
    return (
      <button
        onClick={isEditing ? handleEndEditting : handleAdd}
        type="button"
        className={styles.button}
      >
        {isEditing ? "Confirm" : "Add"}
      </button>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Notes</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        className={styles.form}
      >
        <MyInput
          label=""
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {renderAddOrEditButton()}
      </form>
      <ul>
        {toDos.map((td) => (
          <li key={td.id}>
            <div className={styles.liContainer}>
              <MyInput
                classNames={styles.checkbox}
                label=""
                type="checkbox"
                value={td.isFinished}
                onChange={() => handleStatusUpdate(td.id)}
              />
              <div className={styles.description}>{td.description}</div>
              <div>
                <button
                  onClick={() => handleStartEditting(td.id, td.description)}
                  type="button"
                  className={styles.button}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(td.id)}
                  type="button"
                  className={styles.button}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
