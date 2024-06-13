// src/pages/index.js

import React from 'react';

import { Link } from 'gatsby';
import TwoButtons from '../components/TwoButtons/TwoButtons';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
  <main>
    <Header />
    <Carousel />
    <TwoButtons />
    <Footer/>
  </main>
);

export default IndexPage;
