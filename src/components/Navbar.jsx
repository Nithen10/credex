import DarkModeToggle from './DarkModeToggle'; // adjust the path if needed

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">SoftSell</h1>
      <ul className="flex gap-6 font-medium">
        <li><a href="#how" className="hover:text-blue-500">How It Works</a></li>
        <li><a href="#why" className="hover:text-blue-500">Why Us</a></li>
        <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li><DarkModeToggle /></li>
      </ul>
    </nav>
  );
}
