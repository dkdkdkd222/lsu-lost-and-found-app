import supabase from "../supabase-setup/supabase-client";

export async function getItems() {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log("items error", error);
    return [];
  }

  return data || [];
}

export async function claimItem(itemId) {
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData || !userData.user) {
    return { ok: false, reason: "not-logged-in" };
  }

  const userId = userData.user.id;

  const { error } = await supabase
    .from("items")
    .update({
      claimed_by: userId,
      status: "claimed",
    })
    .eq("id", itemId);

  if (error) {
    console.log("claim error", error);
    return { ok: false, reason: "update-failed" };
  }

  return { ok: true };
}
