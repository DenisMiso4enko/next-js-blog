"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { memo } from "react";

const Profile = () => {
  const session = useSession();
  return (
    <>
      Profile {session?.data?.user?.name}
      <button onClick={() => signOut()}>Logout</button>
      {session?.data?.user?.image && (
        <Image
          src={session?.data?.user?.image}
          alt={"image"}
          width={250}
          height={250}
        />
      )}
    </>
  );
};

export default memo(Profile);
