import { LuUser } from "react-icons/lu";
LuUser;

function UserIcon({ profileImage }: { profileImage: string | null }) {
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className="w-5 h-5 rounded-full object-cover"
      />
    );
  }

  return (
    <LuUser className="w-6 h-6 bg-primary rounded-full text-white object-cover" />
  );
}

export default UserIcon;
