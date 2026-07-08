import { FiMenu, FiHeadphones, FiMapPin, FiBell } from "react-icons/fi";

import {
  Avatar,
  AvatarFallback,
  AvatarBadge,
  AvatarImage,
} from "@/components/ui/avatar";
import userFalback from "../../../assets/images/user-falback.png";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/components/shared/utils/context/AuthContext";
const Header = () => {
  const { logout, user } = useAuth();
  return (
    <>
      <div className="flex justify-between shadow-sm items-center bg-white z-9 max-h-20 min-h-20 py-4 px-6 border border-solid border-b-gray-200 sticky h-full w-full ">
        <div className="w-1/4">
          <FiMenu className="text-teal-600 font-black text-xl cursor-pointer" />
        </div>
        <div className="w-2/4">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="janesmith"
            className="block  grow w-[80%] outline-0 bg-white rounded-md py-2 px-5  border-teal-600 border border-solid shadow-teal-600   text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
        <div className="menu-action flex flex-row justify-end items-center gap-5 w-1/4 text-end">
          <div>
            <FiBell className="text-gray-600 text-xl cursor-pointer" />
          </div>
          <div>
            <FiHeadphones className="text-gray-600 text-xl cursor-pointer" />
          </div>
          <div>
            <FiMapPin className="text-gray-600 text-xl cursor-pointer" />
          </div>
          <div className="">
            <div className="w-full">
              <DropdownMenu className="p-0">
                <DropdownMenuTrigger
                  render={
                    <Button
                      className="cursor-pointer flex items-center rounded-full w-full hover:bg-transparent"
                      variant="ghost"
                      size="icon"
                    >
                      <div>
                        <Avatar>
                          <AvatarImage src={userFalback} />
                          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                        </Avatar>
                      </div>
                      <div className="text-start ml-3">
                        <p className="text-gray-800">
                          {user?.email ?? "Kevin Kanta"}
                        </p>
                        <p className="text-gray-500 text-[12px]">{"Master"}</p>
                      </div>
                    </Button>
                  }
                />
                <DropdownMenuContent className="w-32 rounded-md">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="rounded-md hover:rounded-sm">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md hover:rounded-sm">
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md hover:rounded-sm">
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup className="rounded-md p-0 hover:rounded-sm bg-gray-200">
                    <DropdownMenuItem
                      onClick={logout}
                      className="text-gray-400 hover:rounded-sm"
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
