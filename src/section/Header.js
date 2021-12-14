import Logo from "assets/Logo.png";
import Image from "next/image";
import HeaderItem from "components/HeaderItem";
import data from "data/Header.data";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {data.map((item) => (
          <HeaderItem
            title={item.title}
            Icon={item.icon}
            path={item.path}
            key={item.id}
          />
        ))}
      </div>
      <Image className="object-contain logo" src={Logo} width={100} height={40} />
    </header>
  );
}
export default Header;
