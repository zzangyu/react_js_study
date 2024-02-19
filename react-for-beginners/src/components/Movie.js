import PropTypes from "prop-types";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres.map((g) => (g != null ? <li key={g}>{g}</li> : null))}</ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
