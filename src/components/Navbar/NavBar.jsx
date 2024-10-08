import { Navbar, NavbarBrand, NavbarContent, Button, DropdownItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu } from "@nextui-org/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);


    return (
        <Navbar className="max-w-7xl mx-auto">

            <NavbarContent>
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>


            {!user && <>
                <NavbarContent className=" md:flex md:justify-center md:items-center">
                    <div className="flex gap-2 md:block">
                        <Link to="/login">
                            <Button color="success" href="#" variant="flat">
                                Log In
                            </Button>
                        </Link>

                        <Link to="/signUp">
                            <Button color="primary" href="#" variant="flat" className=" md:ml-4">
                                Sign Up
                            </Button>
                        </Link>
                    </div>

                </NavbarContent>
            </>}

            {
                user && <>
                    <NavbarContent as="div" justify="end">
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>


                            <DropdownMenu aria-label="Profile Actions" variant="flat">

                                <DropdownItem key="logout" color="danger" onClick={logOut}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                </>
            }



        </Navbar>
    );
};

export default NavBar;