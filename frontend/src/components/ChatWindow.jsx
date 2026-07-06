import Message from "./Message";
import Loader from "./Loader";
import EmptyState from "./EmptyState";
import { useEffect, useRef } from "react";

import "../styles/chat.css";

export default function ChatWindow({ messages, loading }) {

    const bottomRef = useRef(null);

    useEffect(()=>{

        bottomRef.current?.scrollIntoView({

            behavior:"smooth"

        });

    },[messages,loading]);

    return(

    <main className="chat">

      {

        messages.length === 0

        ?

        <EmptyState/>

        :

        messages.map((message,index)=>(

          <Message
            key={index}
            message={message}
          />

        ))

      }

      {

        loading && <Loader/>

      }

    </main>

  );

}