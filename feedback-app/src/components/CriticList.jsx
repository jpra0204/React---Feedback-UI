import PropTypes from 'prop-types';
import CriticItem from './CriticItem';

function CriticList({ critic }) {
  if (!critic || critic.length == 0) {
    return <p>You gud, no critics yet, not to get cocky tho</p>;
  }

  return (
    <div className='critic-list'>
      {critic.map((item) => (
        <CriticItem key={item.id} item={item} />
      ))}
    </div>
  );

  // Setting prop types
  CriticList.propTypes = {
    critic: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ),
  };
}

export default CriticList;
