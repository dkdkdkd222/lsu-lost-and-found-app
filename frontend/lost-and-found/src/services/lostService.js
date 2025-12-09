import supabase from "../supabase-setup/supabase-client.js";

export async function submitLostItem(backgroundInfo) {
  return await supabase.from("lost").insert([
    {
      firstname: backgroundInfo.firstname,
      lastname: backgroundInfo.lastname,
      email: backgroundInfo.email,
      itemtype: backgroundInfo.itemtype,
      itemname: backgroundInfo.itemname,
      itemlastseen: backgroundInfo.itemlastseen,
      phonenumber: backgroundInfo.phonenumber,
      details: backgroundInfo.details,
    },
  ]);
}
