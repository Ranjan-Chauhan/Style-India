import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Dialog,
  PopoverButton,
  Popover,
  PopoverGroup,
  PopoverPanel,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { navigation } from "./NavData.js";
import { useNavigate } from "react-router-dom";
// import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  const [isOpen, setIsOpen] = useState(false); // for profile dropdown
  const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const handelUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.name}`);
    close();
  };

  const reload = () => {
    window.location.reload();
  };
  const handleLogout = () => {
    navigate("/");
    handleCloseUserMenu();
    reload();
  };

  return (
    <div className="bg-white shadow-lg py-2">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                {/* <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* ----Laptop view ---- */}
      <header className=" bg-white px-12">
        <div className="container mx-auto">
          <nav aria-label="Top" className="">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="flex lg:ml-0 rounded-full">
                <Link to="/">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://img.freepik.com/premium-vector/letter-s-modern-colorful-logo-business-s-letter-identity-logo-vector-design_135595-1206.jpg?w=740"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              {/* <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-50">
                <div className="flex h-full space-x-8">
                  {navigation?.categories?.map((category) => (
                    <Popover key={category.name} className="flex ">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex ">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "border-pink-600 text-pink-600"
                                  : "border-transparent text-gray-900 hover:text-pink-500",
                                "relative z-10 -mb-px flex items-center border-b-4 pt-px font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name.toUpperCase()}
                            </PopoverButton>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <link
                                            to={item.to}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() => {
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    );
                                                  }}
                                                  className="cursor-pointer hover:text-gray-700 hover:font-medium"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </PopoverGroup> */}

              <div className="flex space-x-6 items-center p-4 bg-white">
                {/* Main Nav Items */}
                <NavLink
                  to="/men"
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-600 border-pink-600 border-b-4"
                      : "hover:text-pink-600 hover:border-b-4 hover:border-b-pink-600"
                  }
                  onMouseEnter={() => setIsMenDropdownOpen(true)}
                  onMouseLeave={() => setIsMenDropdownOpen(false)}
                >
                  MEN
                </NavLink>
                <NavLink to="/women" className="hover:text-pink-600">
                  WOMEN
                </NavLink>
                <NavLink to="/kids" className="hover:text-pink-600">
                  KIDS
                </NavLink>
                <NavLink to="/home-living" className="hover:text-pink-600">
                  HOME & LIVING
                </NavLink>
                <NavLink to="/beauty" className="hover:text-pink-600">
                  BEAUTY
                </NavLink>

                {/* Men Dropdown Menu */}
                {isMenDropdownOpen && (
                  <div
                    className="absolute top-20 left-0 w-8/12 bg-white shadow-lg border-t border-gray-200 z-50"
                    onMouseEnter={() => setIsMenDropdownOpen(true)}
                    onMouseLeave={() => setIsMenDropdownOpen(false)}
                  >
                    <div className="flex justify-around px-4 text-gray-700">
                      <div className="space-y-1 py-4 px-10">
                        <h3 className="font-semibold text-pink-600">Topwear</h3>
                        <p className="hover:text-pink-600 cursor-pointer">
                          T-Shirts
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Casual Shirts
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Formal Shirts
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Sweatshirts
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Sweaters
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Jackets
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Blazers & Coats
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Suits
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Rain Jackets
                        </p>
                      </div>

                      <div className="space-y-1 bg-gray-50 py-4 px-10">
                        <h3 className="font-semibold text-pink-600">
                          Bottomwear
                        </h3>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Jeans
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Casual Trousers
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Formal Trousers
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Shorts
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Track Pants & Joggers
                        </p>
                      </div>

                      <div className="space-y-1 py-4 px-10">
                        <h3 className="font-semibold text-pink-600">
                          Footwear
                        </h3>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Casual Shoes
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Sports Shoes
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Formal Shoes
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Sneakers
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Sandals & Floaters
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Flip Flops
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Socks
                        </p>
                      </div>

                      <div className="space-y-1 bg-gray-50 py-4 px-10">
                        <h3 className="font-semibold text-pink-600">
                          Fashion Accessories
                        </h3>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Wallets
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Belts
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Perfumes & Body Mists
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Trimmers
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Deodorants
                        </p>
                        <p className="hover:text-pink-600 cursor-pointer">
                          Caps & Hats
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center space-x-10 ml-44">
                {/* Search Bar */}
                <div className="flex justify-center items-center border rounded bg-gray-100 focus-within:bg-white px-3 py-1.5 w-[500px]">
                  <SearchIcon className="flex text-gray-800 " />
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="bg-transparent outline-none text-sm placeholder-gray-400 focus:bg-white w-[500px] mx-2 px-4"
                    onChange={(e) => onSearch(e.target.value)}
                  />
                </div>

                {/* Profile Icons */}
                <div className="flex items-center space-x-8 font-semibold text-xs px-1">
                  <div
                    className="relative text-gray-800 hover:text-pink-600 font-bold"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <div className="flex flex-col items-center cursor-pointer">
                      <PersonOutlineIcon className="mx-1.5 text-sm" />
                      Profile
                    </div>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute right- mt-5 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="p-4 border-b">
                          <p className="text-gray-900 font-medium">
                            Hello RANJAN
                          </p>
                          <p className="text-gray-500 text-sm">9372139568</p>
                        </div>
                        <ul className="py-2">
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Orders
                          </li>
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Wishlist
                          </li>
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Contact Us
                          </li>

                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Coupons
                          </li>
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Saved Cards
                          </li>
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Saved Addresses
                          </li>
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Edit Profile
                          </li>
                          <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Logout
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/wishlist"
                    className="relative text-gray-800 hover:text-pink-600 font-bold"
                  >
                    <div>
                      <FavoriteBorderIcon className="mx-2 text-sm" />
                    </div>
                    Wishlist
                  </Link>

                  <Link
                    to="/Cart"
                    className="relative text-gray-800 hover:text-pink-600 font-bold "
                  >
                    <div className="">
                      <ShoppingBagIcon className="text-sm" />
                      {counter > 0 && (
                        <span className="absolute -top-2 -right-7 bg-pink-600 text-white rounded-full text-xs h-5 w-5 flex items-center justify-center mx-4">
                          {counter}
                        </span>
                      )}
                    </div>
                    Bag
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
