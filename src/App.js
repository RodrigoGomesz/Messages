import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MessagesList } from "./MessagesList";
import { NewMessage } from "./NewMessage";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  async function updatesMessagesList() {
    const a = await getMessages()
    setMessages(a)
  }

  useEffect(() => {
    updatesMessagesList();
  }, []);

  return (
    <div className="App">
      <NewMessage 
        newMessage={newMessage} 
        setNewMessage={setNewMessage} 
        sendNewMessage={sendNewMessage}
        update={updatesMessagesList}
      />
      <ul>
        { 
          messages === undefined 
            ? "O_O" 
            : <MessagesList 
                messages={messages} 
                deleteMessage={deleteMessage}
                update={updatesMessagesList}
              />
        }
      </ul>
    </div>
  );
}

const apiUrl = process.env.REACT_APP_API_URL

async function getMessages(){
  var messages = await axios.get( apiUrl + "/getMessages" || "http://localhost:8000/getMessages")
    .then((res) => {
     return res.data.message;
    })
    .catch((err) => console.log(err));
  return messages;
}

function sendNewMessage(msg) {
   axios.post( apiUrl + "getMessages" || "http://localhost:8000/sendMessage", {
     name: "Anônimo", // Maybe do something later. 
     message: msg
   })
   .then((res) => console.log(res.data))
   .catch((error) => console.log(error))
}

function deleteMessage(msgId) {
  console.log(msgId)
  axios.delete( apiUrl + "deleteMessage" || "http://localhost:8000/deleteMessage", { data: { id: msgId } })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}

export default App; 
