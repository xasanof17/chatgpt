import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiMessage, BiTrash } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

interface Props {
  id: string;
}

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, []);

  const removeChat = async (id: string) => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link href={`/chat/${id}`} className={`chatRow ${active && "active"}`}>
      <BiMessage className="text-[21px] text-grey-100" />
      <p className="inline-flex flex-1 truncate text-base font-medium text-grey-100">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <button
        onClick={() => removeChat(id)}
        className="justify-enter flex items-center"
      >
        <BiTrash className="text-[21px] text-grey-100 transition-all hover:text-red-600" />
      </button>
    </Link>
  );
};

export default ChatRow;
