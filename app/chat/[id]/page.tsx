import { Chat } from "components";
import Layout from "components/Layout";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <Layout>
      <Chat chatId={id}/>
    </Layout>
  );
};

export default ChatPage;
