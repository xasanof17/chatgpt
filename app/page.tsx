import Layout from "components/Layout";
import { Chat } from "../components";

interface Props {
  chatId: string;
}

export default function Home({ chatId }: Props) {
  return (
    <Layout>
      <Chat chatId={chatId} />
    </Layout>
  );
}
