const getYear = ({ release_date }) => new Date(release_date).getFullYear();

export default getYear;
