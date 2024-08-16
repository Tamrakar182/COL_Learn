import { Popover, PopoverPanel, Transition, PopoverButton } from "@headlessui/react"
import clsx from "clsx"
import React from "react"
import useDropdown from "@/context/useDropdown"
import { FaRegNoteSticky } from "react-icons/fa6";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Link, useNavigate } from "react-router-dom"
import Container from "@/components/common/container";
import { dummyMockTest } from "@/mock/data";
import TestCard from "@/components/test-card";

const TestsDropdown = () => {
    const { tests, handleTests } = useDropdown();
    const navigate = useNavigate();
    const tabSize = useMediaQuery("(min-width: 768px) and (max-width: 900px)");
    const numberOfCards = tabSize ? 2 : 3;

    return (
        <div
            onMouseEnter={() => handleTests(true)}
            onMouseLeave={() => handleTests(false)}
            className="h-full"
        >
            <div className="flex items-center h-full">
                <Popover className="h-full flex">
                    <>
                        <PopoverButton
                            className={clsx(
                                "relative h-full flex text-black items-center transition-all ease-out duration-200 focus:outline-none"
                            )}
                            onClick={() => navigate("/browse/tests")}
                        >
                            <div className='hidden md:flex flex-row gap-2 items-center cursor-pointer'>
                                <FaRegNoteSticky className='w-8 h-8' />
                                <p className='text-lg'>Tests</p>
                            </div>
                        </PopoverButton>

                        <Transition
                            show={tests}
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <PopoverPanel
                                static
                                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
                            >
                                <div className="relative bg-white py-8">
                                    <Container>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-col flex-1 max-w-[30%]">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                    Test Categories
                                                </h3>
                                                <div className="flex items-start">
                                                    <ul
                                                        className="min-w-[152px] max-w-[250px] pr-4"
                                                    >
                                                        <div
                                                            className="pb-3"
                                                        >
                                                            <Link
                                                                to={`/browse/tests/${1}`}
                                                                onClick={() => handleTests(false)}
                                                            >
                                                                ILETS Reading
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="pb-3"
                                                        >
                                                            <Link
                                                                to={`/browse/tests/${2}`}
                                                                onClick={() => handleTests(false)}
                                                            >
                                                                PTE Preparation
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="pb-3"
                                                        >
                                                            <Link
                                                                to={`/browse/tests/${2}`}
                                                                onClick={() => handleTests(false)}
                                                            >
                                                                Loksewa Preparation
                                                            </Link>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                    Popular Tests
                                                </h3>
                                                <div className="flex flex-row gap-2">
                                                    {
                                                        dummyMockTest.slice(0, numberOfCards).map((test) => (
                                                            <TestCard
                                                                key={test.id}
                                                                onClick={() => handleTests(false)}
                                                                showTakeTest={false}
                                                                test={test} />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </>
                </Popover>
            </div>
        </div>
    )
}

export default TestsDropdown
