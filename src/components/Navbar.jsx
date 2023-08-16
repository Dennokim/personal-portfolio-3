export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 p-10 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Denis Mwangi</h1>
          <ul className="flex space-x-6 text-2xl font-medium">
            <li><a href="/">Work</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
