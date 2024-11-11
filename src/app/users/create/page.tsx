'use client';

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, FormEvent } from "react";

// export const metadata: Metadata = {
//     title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
//     description:
//       "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

export default function Page() {
    let msgvalue: any = null;
    const formUrl = 'http://localhost:7777/api/users/add';
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(msgvalue);
    const [successMessage, setSuccessMessage] = useState(msgvalue);
   
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      setIsLoading(true) // Set loading to true when the request starts
   
      try {
        const formData = new FormData(event.currentTarget)
        
        const response = await fetch('http://localhost:7777/api/users/add', {
          method: 'POST',
          body: formData,
        });
   
        // Handle response if necessary
        const data = await response.json()
        if (data.result === 'error') {
            setErrorMessage("An error occurred");
            setSuccessMessage(null);
        } else {
            setErrorMessage(null);
            setSuccessMessage('User saved successfully');
        }
        console.log(data);
      } catch (error) {
        // Handle error if necessary
        console.error(error)
      } finally {
        setIsLoading(false) // Set loading to false when the request completes
      }
    }
   
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Add New User" />
            <div className="flex flex-col gap-9">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Add New
                    </h3>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="p-6.5">
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Name
                            </label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="Enter your name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Email
                            </label>
                            <input 
                            type="text" 
                            name="email" 
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Age
                            </label>
                            <input 
                            type="text" 
                            name="age" 
                            id="age"
                            placeholder="Enter your age"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <button type="submit"  disabled={isLoading} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>

                        <div>
                            {errorMessage && <p>{errorMessage}</p>}
                        </div>
                        <div>
                            {successMessage && <p>{successMessage}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </DefaultLayout>
    )
  }