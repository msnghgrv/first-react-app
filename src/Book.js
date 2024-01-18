const Book = (props) => {
  const { img, author, title, getBook, id , number} = props;
  console.log(number)
  return (
    <article className="book">
      <img src={img}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{number+1}</span>
    </article>
  );
};
export default Book