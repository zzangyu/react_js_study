import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ShowDetail({ id, coverImg, title, rating, runtime, genres }) {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <h2>{rating}</h2>
      <h2>{runtime}</h2>
      <ul>{genres.map((g) => (g != null ? <li key={g}>{g}</li> : null))}</ul>
      <h1>
        <Link to={`/`}>Go Home</Link>
      </h1>
    </div>
  );
}

ShowDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShowDetail;
