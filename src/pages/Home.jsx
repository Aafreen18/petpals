import PackageSection from '../components/PackageSection';
import Carousel from '../components/Carousel';
import HelpButtonModal from '../components/HelpButtonModal';
import MembershipSection from '../components/MembershipSection';
import Service from '../components/Service';
import AppointmentSection from '../components/AppointmentSection';
import DoctorsMeet from '../components/DoctorsMeet';
import PetConnect from '../components/PetConnect';
import Testimonial from '../components/Testimonial';
import PressAndMedia from '../components/PressAndMedia';

import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

function Home() {
  const [heroSlides, setHeroSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "heroSlide"]{
            _id,
            title,
            description,
            imageUrl,
            "image": image.asset->url
          }
        `);

        // Convert Portable Text (title) to React fragments
        const transformed = data.map((slide, index) => ({
          ...slide,
          title: slide.title?.map((block, i) => (
            <React.Fragment key={i}>
              {block.children?.map(child => child.text).join('')}
              {i !== slide.title.length - 1 && <br />}
            </React.Fragment>
          )),
          image: slide.imageUrl || slide.image // Use imageUrl if available
        }));

        setHeroSlides(transformed);
      } catch (error) {
        console.error('Error fetching hero slides:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  return (
    <>  
      <HelpButtonModal />
      <Carousel slides={heroSlides} />
      <MembershipSection />
      <PackageSection />
      <Service />
      <AppointmentSection/>
      <DoctorsMeet />
      <PetConnect />
      <Testimonial />
      <PressAndMedia />
    </>
  );
}

export default Home;