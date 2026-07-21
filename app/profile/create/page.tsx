import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>

      <div className="border p-8 rounded max-w-lg">
        <form action={createProfileAction}>
          <FormInput
            name="firstName"
            type="text"
            label="First Name"
            placeholder="sushant"
          />
          <Button
            type="submit"
            size="lg"
            className="cursor-pointer"
          >
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProfilePage;
