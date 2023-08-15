const BlogContents = (props) => {
  return (
    <div className="flex mb-20">
      <div className="max-w-sm">
        <div className="">
          <img src={props.image} alt={props.alt} className="mb-2 h-60" />
          <div className="ml-4">
            <h1 className="text-lg font-semibold">{props.imgDescription}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContents;

