import React from "react";
import { Button } from "react-bootstrap";
import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import {  useDispatch, useSelector } from "react-redux";
import { handleShowPerson } from "./actions/showPersons";

const App = () => {
  const showPersons = useSelector((state) => state.showReducer);
  const dispatch = useDispatch();

  return (
    <div className="rtl text-center">
      <Header />
      <NewPerson />
      <Button
        onClick={() => dispatch(handleShowPerson())}
        variant={showPersons ? "info" : "danger"}
      >
        نمایش اشخاص
      </Button>

      {showPersons ? <Persons /> : null}
    </div>
  );
};
export default App;
