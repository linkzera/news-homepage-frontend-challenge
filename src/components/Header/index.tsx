import logoImg from "../../assets/logo.svg";

const links = [
  {
    title: "Home",
  },
  {
    title: "New",
  },
  {
    title: "Popular",
  },
  {
    title: "Trending",
  },
  {
    title: "Categories",
  },
];

export function Header() {
  return (
    <nav className="flex justify-between items-center mb-12">
      <img src={logoImg} />
      <ul className="flex gap-10">
        {links.map((link) => {
          return (
            <li
              key={link.title}
              className="text-blue-dark-grayish hover:text-orange-soft font-semibold transition-colors cursor-pointer"
            >
              {link.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
