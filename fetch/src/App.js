import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./components/PorsonList";

function App() {
  const [person, setPerson] = useState({});
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    getListOfPerson();
  }, []);

  const savePerson = async (pPerson) => {
    await fetch("http://localhost:3000/people", {
      method: "POST",
      body: JSON.stringify(pPerson),
      headers: { "Content-Type": "application/json" },
    });
  };
  const getListOfPerson = async () => {
    const respone = await fetch("http://localhost:3000/people", {
      method: "GET",
    });
    const list = await respone.json();
    setPersonList(list);
  };
  const submit = (e) => {
    e.preventDefault();
    savePerson(person);
    getListOfPerson();
  };
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <form onSubmit={submit}>
            <input
              placeholder="First Name"
              type="text"
              name="person[firstName]"
              value={person.firstName}
              onChange={(e) =>
                setPerson({ ...person, firstName: e.target.value })
              }
            />{" "}
            <br />
            <br />
            <input
              placeholder="Last Name"
              type="text"
              name="person[lastName]"
              value={person.lastName}
              onChange={(e) =>
                setPerson({ ...person, lastName: e.target.value })
              }
            />
            <br />
            <br />
            <input
              placeholder="e-Mail"
              type="email"
              name="person[email]"
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />
            <br />
            <br />
            <input
              placeholder="Password"
              type="password"
              name="person[password]"
              value={person.password}
              onChange={(e) =>
                setPerson({ ...person, password: e.target.value })
              }
            />
            <br />
            <br />
            <textarea
              placeholder="About"
              name="person[about]"
              value={person.about}
              onChange={(e) => setPerson({ ...person, about: e.target.value })}
            />
            <br />
            <br />
            <input type="submit" name="Sign Up" />
          </form>
        </div>
        <div className="col">
          <PersonList list={personList} />
        </div>
      </div>
    </div>
  );
}

export default App;
