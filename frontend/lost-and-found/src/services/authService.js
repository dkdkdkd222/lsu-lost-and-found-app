import supabase from "../supabase-setup/supabase-client.js";

export async function signUpWithEmail(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    alert("Sign up unsuccessful. Please try again.");
    setEmail("");
    setPassword("");
  }

  if (!error) {
    const user = data.user;
    await supabase.from("signup").insert({
      user_id: user.id,
      email: email,
    });
  }

  return { data, error };
}
