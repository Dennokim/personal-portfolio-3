export default function BlogContents(props) {
    return (
      <div className="flex flex-row items-center mr-4">
        <img src={props.image} alt={props.alt} className="w-62 h-40 mb-2" />
        <div className="text-center">
          <h1 className="text-lg font-semibold">{props.imgDescription}</h1>
        </div>
      </div>
    );
  }
  