const ButtonBM = ({ handleBookMark }) => {
  return (
    <button
      onClick={handleBookMark}
      className="rounded-lg bg-cyan-300 px-5 py-3"
    >
      Bookmarks
    </button>
  );
};

export default ButtonBM;
