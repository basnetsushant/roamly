import { createClient } from "@supabase/supabase-js";

const bucket = "temp-home-away";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image);

  console.log(data);
  console.log(error);

  if (error) throw new Error(error.message);

  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
