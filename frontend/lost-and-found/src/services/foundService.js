import supabase from "../supabase-setup/supabase-client.js";

export async function submitFoundItem(backgroundInfo) {
  return await supabase.from("found").insert([
    {
      firstname: backgroundInfo.firstname,
      lastname: backgroundInfo.lastname,
      email: backgroundInfo.email,
      itemtype: backgroundInfo.itemtype,
      itemname: backgroundInfo.itemname,
      itemfound: backgroundInfo.itemfound,
      phonenumber: backgroundInfo.phonenumber,
      details: backgroundInfo.details,
    },
  ]);
}
