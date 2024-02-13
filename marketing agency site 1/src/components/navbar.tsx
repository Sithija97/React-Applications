import logo from "../assets/logo.svg";

type IListItem = { id: number; value: string };

const listItems: IListItem[] = [
  { id: 1, value: "How it Works" },
  { id: 2, value: "Our Work" },
  { id: 3, value: "Pricing" },
  { id: 4, value: "About Us" },
];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-[88px] border-b border-gray-300">
      <div className="w-[1201px] px-10 flex justify-between items-center">
        <img src={logo} alt="logo" className="my-[10px]" />
        <ul className="hidden md:flex gap-[40px]">
          {listItems.map((item: IListItem) => (
            <li key={item.id} className="font-medium text-base">
              {item.value}
            </li>
          ))}
        </ul>
        <button className="bg-blue-700 text-white px-[24px] py-[16px] rounded-full">
          Book A Call
        </button>
      </div>
    </div>
  );
};
