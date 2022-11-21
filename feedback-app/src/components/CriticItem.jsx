import PropTypes from 'prop-types';
import Card from './common/Card';

function CriticItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

// Setting prop types
CriticItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CriticItem;
