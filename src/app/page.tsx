import Aside from "./Aside";
import Chat from "./Chat";

export default function Home() {
  return (
    <main className="flex">
      <Aside />
      <Chat />
    </main>
  );
}
