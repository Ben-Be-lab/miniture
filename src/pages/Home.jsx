import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryPromoSection from '../components/CategoryPromoSection';
import FloatingSocialSidebar from '../components/FloatingSocialSidebar';
import NewArrivalsSection from '../components/NewArrivalsSection';
import ShopByCategoriesSection from '../components/ShopByCategoriesSection';
import ProductShowcaseGrid from '../components/ProductShowcaseGrid';
import FeaturesBannerSection from '../components/FeaturesBannerSection';
import CollectionFeatureGrid from '../components/CollectionFeatureGrid';
import RecommendationsGrid from '../components/RecommendationsGrid';
import ExclusiveBrandsSection from '../components/ExclusiveBrandsSection';
import NewsletterSection from '../components/NewsletterSection';

export default function Home() {
  return (
 
    <div className="w-full flex flex-col gap-16 md:gap-24 bg-white text-black antialiased overflow-x-hidden">
      
      <FloatingSocialSidebar />
      <HeroSection />
      <CategoryPromoSection />
      <NewArrivalsSection />
      <ShopByCategoriesSection />
      <ProductShowcaseGrid />
      <FeaturesBannerSection />
      <CollectionFeatureGrid />
      <RecommendationsGrid />
      <ExclusiveBrandsSection />
      <NewsletterSection />

    </div>
  );
}