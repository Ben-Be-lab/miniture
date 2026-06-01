import React from "react";
import CatalogHero from "../components/CatalogueHero"; // Kept your exact file spelling
import CatalogToolbar from "../components/CatalogToolbar"; // 🌟 Fixed: changed capital 'B' to lowercase 'b'
import CatalogContent from "../components/CatalogContent";

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