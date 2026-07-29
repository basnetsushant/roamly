import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import { fetchPropertiesDetails } from "@/utils/actions";
import { redirect } from "next/navigation";
import { FaShare } from "react-icons/fa";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const property = await fetchPropertiesDetails(id);
  if (!property) redirect("/");
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-semibold capitalize">
          {property.tagline}
        </h1>
        <div className="flex items-center gap-4">
          {/* share button */}
          <FaShare />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
    </section>
  );
}

export default page;
