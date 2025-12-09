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
  // Check for authentication errors or missing user data
  if (userError || !userData || !userData.user) {
    console.log("claimItem auth error", userError);
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
    console.log("claimItem update error", error);
    return { ok: false, reason: "update-failed" };
  }

  return { ok: true };
}
    .eq("id", itemId)
    .is("claimed_by", null); // Prevent race condition

  if (error) {
    console.log("claim error", error);
    return { ok: false, reason: "update-failed" };
  }

  return { ok: true };
}
