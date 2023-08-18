export default function Projects(props) {

const styles = {
    backgroundColor: props.backgroundColor,
}

  return (
    <div className= "flex mb-20">
      <div className="container h-screen mr-24 ml-24 flex justify-between items-center" style={styles}>
        <div className="w-1/2">
          <h1 className="text-7xl font-medium pl-28">{props.title}</h1>
          <h1 className="text-4xl font-medium mt-80 pl-28">
            {props.subTitles}
          </h1>
        </div>
        <div className="w-1/2 p-8 flex justify-end items-center">
          <img
            src={props.imageSource}
            alt={props.altText}
            className="h-screen  max-w-full rounded-ful pr-20"
          />
        </div>
      </div>
    </div>
  );
}

