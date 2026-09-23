import {useEffect, useState } from 'react';
export const useCustomHook = (entries) => {
  const [state, setState] = useState(entries);
    const [showModal, setShowModal] = useState(false);

    const [winner, setWinner] = useState("");

 const [votes, setVotes] = useState(() => {
     const saved = localStorage.getItem("emojiVotes");
     return saved ? JSON.parse(saved) : entries;
   });
    
 useEffect(() => {
         localStorage.setItem("emojiVotes", JSON.stringify(votes));
     }, [votes]);
  return [votes, setVotes, winner, setWinner,showModal,setShowModal ];
};