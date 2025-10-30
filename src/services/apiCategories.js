import { supabase } from "../supabase";

export async function getCategories() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) throw error;
  return categories;
}

export async function addCategory(data) {
  const { error } = await supabase.from("categories").insert(data);

  if (error) throw error;
}

export async function deleteCategory(id) {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) throw error;
}
