"use client"
import {useSession, signOut} from "next-auth/react";

const Profile = () => {
  const session = useSession();
  return (
    <div>
      Profile {session?.data?.user?.name}
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Profile;