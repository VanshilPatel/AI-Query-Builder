// import React from 'react'
// import Avatar from 'react-avatar'

// const UserAiInteraction = () => {
//   return (
//     <div className="flex-1 p-4 overflow-y-auto">
//           <div className="flex items-start space-x-4 mb-4">
//             <Avatar name='M' round size='50px'/>
//             <div>
//               <div className="text-sm">M</div>
//               <div className="text-sm rounded-md p-2">hi tell me what langchain is</div>
//             </div>
//           </div>
//           <div className="flex items-start space-x-4">
//             <Avatar name='AI' round size='50px'/>
            
//             <div>
//               <div className="text-sm text-blue-500">
//                 LangChain is an open-source framework designed to make it easier to build applications that use large
//                 language models (LLMs). Think of LLMs as super-powered AI models trained on massive amounts of data,
//                 allowing them to generate text, translate languages, write different kinds of creative content, and
//                 answer your questions in an informative way. LangChain helps developers take these powerful LLMs and
//                 integrate them into useful applications.
//               </div>
//               <div className="text-sm  rounded-md p-2 mt-2">
//                 Here are some key things about LangChain:
//                 <ul className="list-disc pl-4">
//                   <li>
//                     Simpler development: LangChain provides pre-built building blocks that developers can use to create
//                     complex LLM applications without needing to write tons of custom code.
//                   </li>
//                   <li>
//                     More customization: LangChain allows developers to customize how LLMs are used in their
//                     applications. This lets them fine-tune the results to get exactly what they need.
//                   </li>
//                   <li>
//                     Data access: LangChain can connect LLMs to data sources beyond what they were trained on. This means
//                     you can incorporate your own specific information to the results.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default UserAiInteraction


import React, { useEffect, useRef } from "react";
import Avatar from "react-avatar";
import "../../public/scroll.css"

const UserAiInteraction = ({ messages }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className="flex items-start space-x-4 mb-4">
          <Avatar
            name={message.type === "user" ? "User" : "AI"}
            round
            size="50px"
          />
          <div>
            <div className="text-sm">
              {message.type === "user" ? "User" : "AI"}
            </div>
            <div className="text-sm rounded-md p-2">{message.text}</div>
          </div>
        </div>
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default UserAiInteraction;
