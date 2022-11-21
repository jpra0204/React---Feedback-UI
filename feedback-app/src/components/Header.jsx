import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  );
}

// Setting up defaults
Header.defaultProps = {
  text: 'Criticizeable',
};

// Setting up props types
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
