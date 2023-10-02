"use client";
import { useSession, signOut } from "next-auth/react";
import {Metadata} from "next";

const Profile = () => {
  const session = useSession();
  return (
    <>
      Profile {session?.data?.user?.name}
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
};

export default Profile;
