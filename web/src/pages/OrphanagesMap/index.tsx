import React from 'react';
import { Link } from "react-router-dom";
import { FiPlus, FiSun, FiMoon } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import { useTheme } from '../../hooks/Themes';

import { Container, Aside } from './styles';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from "../../assets/map-marker.svg";

const OrphanagesMap: React.FC = () => {
  const { ToggleTheme, theme } = useTheme();

  return (
    <Container>
      <Aside>
        <header>
          <img src={mapMarkerImg} alt="Logo Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceara</span>

          <button type="button" onClick={ToggleTheme}>
            {theme.title === 'light' ? (
              <FiMoon size={32} color='#fff' /> 
            ): (
              <FiSun size={32} color='#fff' /> 
            ) }
          </button>
        </footer>
      </Aside>

      <Map 
        center={[-3.7862587,-38.6215175]}
        zoom={15}
        style={{
          width: '100%', height: '100%'
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${theme.title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </Container>
  );
}

export default OrphanagesMap;