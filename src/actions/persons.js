//imports
import { clearPerson } from "./person";
//actions
export const AddPerson = (fullname) => {
  const uniqId = require("uniqid");
  return async (dispatch, getState) => {
    const persons = [...getState().personsReducer];
    const person = {
      id: uniqId(),
      fullname,
    };

    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      await dispatch({ type: "ADD_PERSON", payload: persons });
      await dispatch(clearPerson());
      console.log(person);
    }
  };
};

export const DeletePerson = (personId) => {
  return async (dispatch, getState) => {
    const persons = [...getState().personsReducer];
    const filteredPersons = persons.filter((p) => p.id !== personId);
    await dispatch({ type: "DELETE_PERSON", payload: filteredPersons });
  };
};
export const EditePerson = (e, personId) => {
  return async (dispatch, getState) => {
    const allPersons = getState().persons;
    const personIndex = allPersons.findIndex((p) => p.id === personId);
    const person = allPersons[personIndex];
    person.fullname = e.target.value;

    const persons = [...allPersons];

    persons[personIndex] = person;
    await dispatch({ type: "EDITE_PERSON", payload: persons });
  };
};
