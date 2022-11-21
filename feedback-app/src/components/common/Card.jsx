import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return <div className={"card ${reverse && 'reverse'}"}>{children}</div>;
}

// Default prop
Card.defaultProps = {
  reverse: false,
};
// Setting prop types
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
