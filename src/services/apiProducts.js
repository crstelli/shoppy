import { supabase } from "../supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) throw error;
  return products;
}

export async function addProduct(item) {
  const { error } = await supabase.from("products").insert([item]);

  if (error) throw error;
}

export async function deleteProduct(item) {
  const { error } = await supabase.from("products").delete().eq("id", item);

  if (error) throw error;
}
