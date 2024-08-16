import { Navbar, NavbarBrand, NavbarContent, Button, DropdownItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu } from "@nextui-org/react";
import { Link } from "react-router-dom";


const NavBar = () => {
    const user = false;

    return (
        <Navbar >

            <NavbarContent>
                <NavbarBrand>

                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>


            {!user && <>
                <NavbarContent className=" relative mt-2 md:mt-3 ml-2 md:ml-[85px] lg:ml-32">
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
                </NavbarContent>
            </>}


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

                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;