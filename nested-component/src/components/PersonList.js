export default function PersonList(props) {
  return (
    <main>
      {props.list.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </main>
  );
}

function Person(props) {
  return (
    <section>
      <PersonInfo person={props.person} />
      <PersonRelation friends={props.person.friends} children={props.person.children} />
    </section>
  );
}

function PersonRelation(props) {

  const friendList = props.friends;
  const childList = props.children;

  return (
    <section>

      <div>

            <h1>Friends </h1>

            {friendList.map((friend, index) => (

            <figure key={index+'abc'}>

                <img src={friend.avatar} alt={friend.firstName} />

                <div>
                    <div>{friend.firstName} </div>
                    <div>{friend.gender} </div>
                    <div>{friend.birthday} </div>
                    <div>{friend.phone} </div>
                    <div>{friend.address} </div>
                    <div>{friend.city} </div>
                    <div>{friend.language} </div>
                    <div>{friend.salary} </div>
                </div>

            </figure>
            ))}
            
      </div>

      <div>
            <h1>Friend </h1>
           {
            childList.map((child, index)=>(

            <figure key={index+'def'}>

                <img src={child.avatar} alt={child.firstName} />

                <div>
                    <div>{child.firstName} </div>
                    <div>{child.gender} </div>
                    <div>{child.birthday} </div>
                </div>

            </figure>
            
            ))
           }
      </div>

 
 
    </section>
  );
}

function PersonInfo(props) {
  const person = props.person;

  return (
    <section>
      <h1>Persons</h1>

      <figure>
        <img src={person.avatar} alt={person.first_name} />

        <div>
          <div> Firstname: {person.first_name} </div>
          <div> Lastname: {person.last_name} </div>
          <div> Adress: {person.address} </div>
          <div> Salary: {person.salary} </div>
          <div> Gender: {person.gender} </div>
          <div> Email: {person.email} </div>
        </div>
      </figure>
    </section>
  );
}
