import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

type Props = {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
};

const HomePage = async ({ searchParams }: Props) => {
  const { category, search } = await searchParams;

  console.log({ category, search });

  return (
    <section>
      <CategoriesList
        category={category}
        search={search}
      />
      <PropertiesContainer
        category={category}
        search={search}
      />
    </section>
  );
};

export default HomePage;
