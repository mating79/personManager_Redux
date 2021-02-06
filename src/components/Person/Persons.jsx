import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePerson, EditePerson } from "../../actions/persons";
import Person from "./Person";

const Persons = () => {
  const persons = useSelector((state) => state.personsReducer);
  const dispatch = useDispatch();
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => dispatch(DeletePerson(person.id))}
          changed={(event) => dispatch(EditePerson(event, person.id))}
        />
      ))}
    </div>
  );
};

export default Persons;
