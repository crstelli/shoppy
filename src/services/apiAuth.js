import { supabase } from "../supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;
  return data;
}

// export async function changePassword

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;
  return data.user;
}
