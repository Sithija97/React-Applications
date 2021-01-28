import './App.css';
import Header from './componets/Header'
import AddContact from './componets/AddContact'
import ContactList from './componets/ContactList'

function App() {

  const contacts = [
    {
      id:"1",
      name:"Sithija",
      email: "sithi@gmail.com"
    },
    {
      id:"2",
      name:"Shehara",
      email: "shee@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
