import { formattedCountries } from "@/utils/countries";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const name = "country";
function CountriesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2 w-full">
      <Label
        htmlFor={name}
        className="capitalize mb-1"
      >
        country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={name}
        required
      >
        <SelectTrigger
          id={name}
          className="w-full"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          {formattedCountries.map((country) => {
            return (
              <SelectItem
                key={country.code}
                value={country.code}
              >
                <span className="emoji flex items-center gap-2">
                  {country.flag} {country.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountriesInput;
