export default function Aboutphoto() {
    return (
      <div className="flex">
        <div className="container h-screen bg-gray-100 mr-24 ml-24 flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-7xl font-medium pl-28">
              Nice to <br /> meet you
            </h1>
            <h1 className="text-4xl font-medium mt-80 pl-28">About me</h1>
          </div>
          <div className="w-1/2 p-8 flex justify-end items-center">
            <img
              src="./portrait-img.png"
              alt="Person"
              className="h-screen  max-w-full rounded-ful pr-20"
            />
          </div>
        </div>
      </div>
    );
  }