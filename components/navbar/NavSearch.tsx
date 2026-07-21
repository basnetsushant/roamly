import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <Input
      type="text"
      placeholder="Find a property..."
      className="max-w-xs dark:bg-muted"
    ></Input>
  );
};

export default NavSearch;
