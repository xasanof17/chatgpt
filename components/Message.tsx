"use client";

import { DocumentData } from "firebase/firestore";

interface Props {
  message: DocumentData;
}
const Message = ({ message }: Props) => {
  return <div>Message</div>;
};

export default Message;
