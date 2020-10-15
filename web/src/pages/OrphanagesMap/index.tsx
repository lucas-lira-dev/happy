import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight, FiSun, FiMoon } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { useTheme } from '../../hooks/Themes';

import { Container, Aside } from './styles';

import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import mapMarkerImg from "../../assets/map-marker.svg";

import 'leaflet/dist/leaflet.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const { ToggleTheme, theme } = useTheme();
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  },[]);

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
        center={[-3.7881761,-38.6227908]}
        zoom={15}
        style={{
          width: '100%', height: '100%'
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${theme.title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {orphanages.map(orphanage => {
          return (
            <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </Container>
  );
}

export default OrphanagesMap;
