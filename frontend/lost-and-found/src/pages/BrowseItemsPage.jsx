import React, { useState, useEffect } from "react";
import "../styles/BrowseItems.css";
import supabase from "../supabase-setup/supabase-client";

const BrowseItemsPage = () => {
  const [filterType, setFilterType] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load items
  useEffect(() => {
    async function loadItems() {
      setLoading(true);

      const { data, error } = await supabase
        .from("items")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log("items error:", error);
        setItems([]);
        setLoading(false);
        return;
      }

      const mapped = (data || []).map((row) => ({
        id: row.id,
        title: row.title,
        type: row.type,
        location: row.location,
        category: row.category || "Misc",
        image: row.image_url || null,
        createdAt: row.created_at,
        claimed: !!row.claimed_by || row.status === "claimed",
      }));

      setItems(mapped);
      setLoading(false);
    }

    loadItems();
  }, []);

  // CLAIM handler
  const handleClaim = async (itemId) => {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData || !userData.user) {
      alert("You need to log in to claim an item.");
      return;
    }

    const userId = userData.user.id;

    const { error } = await supabase.from("calims").insert({
      item_id: itemId,
      claimer_id: userId,
      status: "pending",
    });

    if (error) {
      console.log("claim error:", error);
      alert(error.message || "Something went wrong.");
      return;
    }

    setItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, claimed: true } : i))
    );

    alert("Claim request sent.");
  };

  // Apply filters
  const filteredItems = items
    .filter((i) => (filterType === "all" ? true : i.type === filterType))
    .filter((i) => (category === "all" ? true : i.category === category))
    .filter((i) => (location === "all" ? true : i.location === location))
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  return (
    <div className="browseWrapper">
      <div className="browseHeader">
        <h1 className="browseTitle">Browse items</h1>
        <p className="browseText">
          Look through recently reported lost and found items on campus.
        </p>

        {/* FILTER GROUP ROW */}
        <div className="browseFiltersRow">

                <div className="browseFilterGroup">
                <p className="browseFilterLabel">Sort By</p>
                <div className="browseFilterPills">
                  <button
                  className={
                    sortOrder === "newest"
                    ? "browseFilterBtn activeFilter"
                    : "browseFilterBtn"
                  }
                  onClick={() => setSortOrder("newest")}
                  >
                  Newest to Oldest
                  </button>

                  <button
                  className={
                    sortOrder === "oldest"
                    ? "browseFilterBtn activeFilter"
                    : "browseFilterBtn"
                  }
                  onClick={() => setSortOrder("oldest")}
                  >
                  Oldest to Newest
                  </button>
                </div>
                </div>

                {/* CATEGORY */}
          <div className="browseFilterGroup">
            <p className="browseFilterLabel">Category</p>
            <div className="browseFilterPills">
              {["all", "Bags", "Books", "Electronics", "Clothes", "School supplies", "Misc"].map(
                (c) => (
                  <button
                    key={c}
                    className={
                      category === c ? "browseFilterBtn activeFilter" : "browseFilterBtn"
                    }
                    onClick={() => setCategory(c)}
                  >
                    {c === "all" ? "All Categories" : c}
                  </button>
                )
              )}
            </div>
          </div>

          {/* LOCATION */}
          <div className="browseFilterGroup">
            <p className="browseFilterLabel">Location</p>
            <div className="browseFilterPills">
              {[
                "all",
                "Parking Lot",
                "Student Union",
                "Restroom",
                "Library",
                "Patrick F Taylor Hall",
                "Other",
              ].map((loc) => (
                <button
                  key={loc}
                  className={
                    location === loc ? "browseFilterBtn activeFilter" : "browseFilterBtn"
                  }
                  onClick={() => setLocation(loc)}
                >
                  {loc === "all" ? "All Locations" : loc}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* GRID */}
      <div className="browseGrid">
        {loading ? (
          <p className="browseEmptyState">Loading items...</p>
        ) : filteredItems.length === 0 ? (
          <div className="browseEmptyState">
            <p>No items match this filter.</p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} className="browseCard">
              <div className="browseCardImage" style={{ "--item-image": `url(${item.image})` }}>
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div className="browseImagePlaceholder">
                    <span>{item.title.charAt(0).toUpperCase()}</span>
                  </div>
                )}
              </div>

              <div className="browseCardBody">
                <div className="browseTagRow">
                  <span className={item.type === "found" ? "browseTag tagFound" : "browseTag tagLost"}>
                    {item.type.toUpperCase()}
                  </span>
                  <span className="browseCategory">{item.category}</span>
                </div>

                <h2 className="browseItemName">{item.title}</h2>
                <p className="browseItemLocation">{item.location}</p>
                <p className="browseItemMeta">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>

                {item.type === "found" && !item.claimed && (
                  <button className="browseClaimBtn" onClick={() => handleClaim(item.id)}>
                    Claim item
                  </button>
                )}

                {item.claimed && (
                  <p className="browseClaimedText">Claim request submitted.</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseItemsPage;
