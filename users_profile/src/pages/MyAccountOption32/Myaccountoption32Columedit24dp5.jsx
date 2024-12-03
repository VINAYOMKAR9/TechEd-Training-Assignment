
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import React from "react"
import { Heading } from "../../components/Heading/index"
import { Img } from "../../components/Img";
import { ChipView } from "../../components/ChipView"
export default function Myaccountoption32Columnedit24dp5() {

    const [chipoptions1, setChipoptions1] = React.useState(() => [
        { value: 1, label: `Web Development` },
        { value: 2, label: `Mobile Development` },
        { value: 3, label: `Programming Languages` },
        { value: 4, label: `Leadership` },
        { value: 5, label: `Career Development` },
        { value: 6, label: `Digital Marketing` },
    ]);

    const [selectedChipoptions1, setSelectedChipOptions1] = React.useState([]);
    const [chipoptions, setChipoptions] = React.useState(() => [
        { value: 1, label: `English` },
        { value: 2, label: `Hindi` },
    ]);

    const [selectedChipoptions, setselectedChipOptions] = React.useState([]);
    return (
        <div className="flex flex-col items-center gap-3 px-6 sm:px-5">
            <div className="container-xs flex flex-col gap-6 self-stretch rounded-[20px] border border-solid border-blue_gray-50 py-[22px] sm:py-5">
                <div className="mx-6 flex items-start justify-between gap-5 md:mx-0">
                    <Heading size="headings" as="h2" className="font-satoshi text-[20px] font-bold capitalize text-black-900_01">
                        Personal Information
                    </Heading>
                    <Button
                        color="gray_300_01"
                        variant="outline"
                        rightIcon={
                            < Img
                                src="images/img_edit_24dp_5f636.svg"
                                alt="Edit 24dp 5f6368 Fille wght400 Grade Opsz24 1"
                                className="my-1 h-[16px] w-[16px] object-contain"
                            />
                        }
                        className="min-w-[84px] gap-1 self-center rounded-[22px] !border font-satoshi font-medium capitalize"
                    >
                        Edit
                    </Button>
                </div>
                <div>
                    <div className="flex flex-col gap-[18px]">
                        <div>
                            <div className="flex flex-col gap-3">
                                <div className="mx-6 flex flex-wrap items-center gap-[109px] md:mx-e md:gap-5">
                                    <Heading
                                        size="texts"
                                        as="p"
                                        className="font-satoshi text-[13px] font-medium uppercase text-black-900_7a"
                                    >
                                        Age
                                    </Heading>
                                    <Heading as="p" className="font-satoshi text-[16px] font-medium capitalize text-black-900_01">
                                        35
                                    </Heading>
                                </div>
                                <div className="h-px bg-black-900_19" />
                            </div>
                        </div>
                        <div className="mx-6 flex flex-wrap items-center gap-[135px] md:mx-0 md:gap-5">
                            <Heading size="texts" as="p" className="font-satoshi text-[13px] font-medium uppercase text-black-900_7a">
                                GENDER
                            </Heading>
                            <Heading as="p" className="font-satoshi text-[16px] font-medium capitalize text-black-900_01">
                                Male
                            </Heading>
                        </div>
                        <div>
                            <div className="flex flex-col gap-[22px]">
                                <div className="h-px bg-black-900_19" />
                                <div className="mx-6 flex items-start gap-[129px] md:mx-0 sm:flex-col sm:gap-5">
                                    <Heading
                                        size="texts"
                                        as="p"
                                        className="font-satoshi text-[13px] font-medium uppercase text-black-900_7a"
                                    >
                                        Address
                                    </Heading>
                                    <Heading
                                        as="p"
                                        className="w-[50%] self-center font-satoshi text-[16px] font-medium capitalize leading-[150%] text-black-900_01 sm:w-full"
                                    >
                                        2nd Floor, 99, 5th Cross Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095
                                    </Heading>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xs flex self-stretch rounded-[20px] border border-solid border-blue_gray-50 py-4">
                <div className="mt-2 flex w-full flex-col items-center">
                    <Heading
                        size="headings"
                        as="h5"
                        className="ml-6 self-start font-satoshi text-[20px] font-bold capitalize text-black-900_01 md:ml-0"
                    >
                        Contact Information
                    </Heading>
                    <div className="mt-[38px] self-stretch">
                        <div className="flex flex-col gap-3">
                            <div className="mx-6 flex flex-wrap items-center gap-[145px] md:mx-0 md:gap-5">
                                <Heading
                                    size="texts"
                                    as="p"
                                    className="font-satoshi text-[13px] font-medium uppercase text-black-900_7a"
                                >
                                    EMAIL
                                </Heading>
                                <Heading as="p" className="font-satoshi text-[16px] font-medium capitalize text-black-900_01">
                                    rakeshraushan@gmail.com
                                </Heading>
                            </div>
                            <div className="h-px bg-black-900_19" />
                        </div>
                    </div>
                    <div className="mx-6 mt-3.5 flex flex-wrap items-center gap-[82px] self-stretch md:mx-0 md:gap-5">
                        <Heading size="texts" as="p" className="font-satoshi text-[13px] font-medium uppercase text-black-900_7a">
                            PHONE NUMBER
                        </Heading>
                        <Heading as="p" className="font-satoshi text-[16px] font-medium capitalize text-black-900_01">
                            +91 9922004856
                        </Heading>
                    </div>
                </div>
            </div>
          
            <div className="container-xs flex flex-col gap-1 self-stretch rounded-[20px] border border-solid border-blue_gray-50 p-5">
                <div className="flex items-start justify-between gap-5">
                    <Heading size="headings" as="h5" className="font-satoshi text-[28px] font-bold capitalize text-black-900_01">
                        Preferred Language{" "}
                    </Heading>
                    <Button
                        color="gray_300_01"
                        variant="outline"
                        rightIcon={
                            <Img
                                src="images/img_edit_24dp_5f636.svg"
                                alt="Edit 24dp 5f6368 Fill0 Wght400 Grad0 Opsz24 1"
                                className="my-1 h-[16px] w-[16px] object-contain"
                            />
                        }
                        className="min-w-[84px] gap-1 self-center rounded-[22px] !border font-satoshi font-medium capitalize"
                    >
                        Edit
                    </Button>
                </div>
                <ChipView
                    options={chipoptions}
                    setoptions={setChipoptions}
                    values={selectedChipoptions}
                    setValues={setselectedChipOptions}
                    className="flex flex-wrap gap-3"
                >
                    {(option) => (
                        <React.Fragment key={option.index}>
                            {option.isSelected ? (
                                <div
                                    onclick={option.toggle}
                                    className="flex h-[46px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[22px] border border-solid border-gray-400_4c bg-black-900_33 px-[18px] font-satoshi text-[18px] font-medium text-black-900_01"
                                >
                                    <span>{option.label}</span>
                                </div>
                            ) : (
                                <div
                                    onclick={option.toggle}
                                    className="flex h-[46px] cursor-pointer flex-row items-center rounded-[22px] border border-solid border-gray-400_4c px-[18px] font-medium text-black-900_01"
                                >
                                    <span>{option.label}</span>
                                </div>
                            )}
                        </React.Fragment>
                    )}
                </ChipView>
            </div>
            <div className="container-xs flex flex-col gap-3.5 self-stretch rounded-[20px] border border-solid border-blue_gray-50 p-5">
                <div className="flex items-start justify-between gap-5">
                    <Heading size="headings" as="h5" className="font-satoshi text-[20px] font-bold capitalize text-black-900_01">
                        Interested Topic
                    </Heading>
                    <Button
                        color="gray_300_01"
                        variant="outline"
                        rightIcon={
                            <Img
                                src="images/img_edit_24dp_5f636.svg"
                                alt="Edit 24dp 5f6368 Fill0 wght400 Grad0 Opsz24 1"
                                className="my-1 h-[16px] w-[16px] object-contain"
                            />
                        }
                        className="min-w-[84px] gap-1 self-center rounded-[22px] !border font-satoshi font-medium capitalize"
                    >
                        Edit
                    </Button>
                </div>
                <ChipView
                    options={chipoptions1}
                    setoptions={setChipoptions1}
                    values={selectedChipoptions1}
                    setvalues={setSelectedChipOptions1}
                    className="flex flex-wrap gap-3"
                >
                    {(option) => (
                        <React.Fragment key={option.index}>
                            {option.isSelected ? (
                                <div
                                    onclick={option.toggle}
                                    className="flex h-[46px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[22px] border border-gray-400_4c bg-black-900_33 px-[18px] font-satoshi text-[18px] font-medium text-black-900_01"
                                >
                                    <span>{option.label}</span>
                                </div>
                            ) : (
                                <div
                                    onClick={option.toggle}
                                    className="flex h-[46px] cursor-pointer flex-row items-center rounded-[22px] border border-solid border-gray-400_4c px-[18px] font-satoshi text-[18px] font-medium text-black-900_01"
                                >
                                    <span>{option.label}</span>
                                </div>
                            )}
                        </React.Fragment>
                    )}
                </ChipView>
            </div>
            <div className="container-xs flex flex-col gap-2 self-stretch rounded-[20px] border border-solid border-blue_gray-50 p-5">
                <div className="flex items-start justify-between gap-5">
                    <Heading size="headings" as="h5" className="font-satoshi text-[28px] font-bold capitalize text-black-900_01">
                        Social Media
                    </Heading>
                    <Button
                        color="gray_300_01"
                        variant="outline"
                        rightIcon={
                            <Img
                                src="images/img_edit_24dp_5f636.svg"
                                alt="Edit 24dp 5f6368 Fill0 Wght400 Grad0 Opsz24 1"
                                className="my-1 h-[16px] w-[16px] object-contain"
                            />
                        }
                        className="min-w-[84px] gap-1 self-center rounded-[22px] !border font-satoshi font-medium capitalize"
                    >
                        Edit
                    </Button>
                </div>
                <div className="mb-1.5 flex gap-[30px]">
                    <Img src="images/img_link.svg" alt="Link" className="h-[38px]" />
                    <Img src="images/img_social_icons.svg" alt="Socialicons" className="h-[38px]" />
                    <Img src="images/img_social_icons_red_500.svg" alt="Socialicons" className="h-[38px]" />
                    <Img src="images/img_close_pink_700.svg" alt="Close" className="h-[38px]" />
                </div>
            </div>
        </div>

    );
}
