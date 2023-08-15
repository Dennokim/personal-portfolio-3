export default function Footer() {
  return (
    <div className="flex">
      <div className="container h-screen bg-white mr-24 ml-24 flex justify-between items-center">
        <div className="w-1/2 pt-10">
          <h1 className="text-8xl font-medium pl-20">
            Let&#39;s connect <br /> digitally
          </h1>
          <h1 className="text-xl font-medium pl-20 pt-10">&copy; 2023 Denis Mwangi. All rights reserved.</h1>
        </div>
        <div className="w-1/2">
          <ul className="text-5xl font-medium pl-40">
            <li>Email</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Medium</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
