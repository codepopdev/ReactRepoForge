import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { NavLink } from "react-router";
const Sidebar = () => {
  const [Navitems, setNavitems] = useState([]);

  useEffect(() => {
    setNavitems(Menu);
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="w-full ">
          <div className="logo uppercase sticky text-teal-600 flex items-center text-3xl font-black bg-white   shadow-sm px-6 min-h-20 leading-tight ">
            POP
            <span className="capitalize text-amber-500 ml-2 font-medium">
              Mart
            </span>
          </div>
          <div className="menu  py-2 w-full">
            {Menu.map((item) => (
              <Collapsible key={item.label} className="text-xl text-white">
                <CollapsibleTrigger className=" w-full text-start">
                  <NavLink key={item.label} to={item.path}>
                    <div className="w-full py-2 px-3 hover:bg-amber-500 hover:rounded-br-full hover:rounded-tr-full text-sm">
                      {item.label}
                    </div>
                  </NavLink>
                </CollapsibleTrigger>
                {item.child && (
                  <CollapsibleContent>
                    {item.child.map((child) => (
                      <NavLink to={child.path}>
                        <div className="w-full py-2 px-3 hover:bg-amber-500 hover:rounded-br-full hover:rounded-tr-full text-sm">
                          {child.label}
                        </div>
                      </NavLink>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
