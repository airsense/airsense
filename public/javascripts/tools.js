function click_heatmap() {
  if (document.getElementById("heatmap_button").className != "list-group-item active") {
    console.log("clicked heatmap");
    changeToHeatmap();
    document.getElementById("heatmap_button").className = "list-group-item active";
    document.getElementById("district_button").className = "list-group-item";
  }
}

function click_district() {
  if (document.getElementById("district_button").className != "list-group-item active") {
    console.log("clicked district");
    document.getElementById("district_button").className = "list-group-item active";
    document.getElementById("heatmap_button").className = "list-group-item";
    changeToDistrict();
  }
}
