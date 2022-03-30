/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import Countries from '../components/countries/countries';
import MainHeader from '../components/NavBar/MainHeader';

const HomePage = ({ countries }) => (
  <>
    <MainHeader title="World Data" />
    <Countries countries={countries} />
  </>
);

HomePage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomePage;
