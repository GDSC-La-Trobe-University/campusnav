import React, { useState } from 'react';
import MapView from '../../components/MapView/MapView';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import MarkerDetails from '../../components/MarkerDetails/MarkerDetails';
import './Home.css';

const Home = () => {
  const [isMapFrozen, setIsMapFrozen] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (locationData) => {
    setSelectedLocation(locationData);
  };

  const handleToggleFreeze = (freeze) => {
    setIsMapFrozen(freeze);
  };

  return (
    <div className="home-container">
      <Search onToggleFreeze={handleToggleFreeze} onLocationSelect={handleLocationSelect} />
      <MarkerDetails locationData={selectedLocation} />
      <MapView isMapFrozen={isMapFrozen} locationData={selectedLocation} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
