
"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import Image from "next/image";
import TableOne from "@/components/Tables/TableOne";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import UserListTable from "@/components/Tables/UserListTable";

// export const metadata: Metadata = {
//   title: "Next.js Users | Miinventory",
//   description:
//     "Miinventory User List",
// };

const Users = () => {
    const apiURl = 'http://localhost:7777/api/users';
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        async function fetchUsers () {
            const resp = await fetch(apiURl);
            const data = await resp.json();
            setUserList(data);
        };
        fetchUsers();
    }, []);

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Users" />
            <div className="flex flex-col gap-10">
                <UserListTable users={userList} />
            </div>
            <Link
              href="/users/create"
              className="inline-flex items-center justify-center mt-3 rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Add New
            </Link>
        </DefaultLayout>
    );
};

export default Users;
