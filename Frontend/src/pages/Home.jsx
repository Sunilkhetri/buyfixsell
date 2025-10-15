 import React from 'react'
 import Herosection from '../components/Herosection'
import ServicesSection from '../components/ServicesSection'
import ProductsSection from '../components/ProductsSection'
import ReviewsFAQSection from '../components/ReviewsFAQSection'
 
 const Home = () => {
   return (
     <div>
        <Herosection></Herosection>
        <ServicesSection></ServicesSection>
        <ProductsSection></ProductsSection>
        <ReviewsFAQSection></ReviewsFAQSection>
     </div>
   )
 }
 
 export default Home