import React from "react";

import CatalogToolbar from "../components/CatalogToolbar"; // 🌟 Fixed: changed capital 'B' to lowercase 'b'
import CatalogContent from "../components/CatalogContent";
import CatalogHero from "../components/CatalogHero";

// 🌟 Fixed: Changed function name from 'Catalogue' to 'Catalog' to match your filename
function Catalog() {
  return (
    <>
    <CatalogHero />
      <CatalogToolbar />
      <CatalogContent />
    </>
  );
}

// 🌟 Fixed: Exporting the clean matching name
export default Catalog;