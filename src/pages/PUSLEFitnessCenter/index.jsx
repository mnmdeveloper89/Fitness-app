import React from "react";

import { Button, Img, Line, List, Text } from "components";

const PUSLEFitnessCenterPage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-archivo items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-900 flex flex-col items-center justify-start pt-[47px] w-full">
            <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start w-full">
              <div className="flex flex-col gap-11 items-center justify-start max-w-[1708px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-[73%] md:w-full">
                    <Img
                      className="h-[37px]"
                      src="images/img_layer1.svg"
                      alt="layerOne"
                    />
                    <div className="flex md:mt-0 mt-[5px] relative w-[63%] md:w-full">
                      <div className="bg-yellow-900 h-10 my-auto rounded-[50%] w-10"></div>
                      <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-between ml-[-26px] mr-auto my-auto w-auto z-[1]">
                        <Text
                          className="sm:text-[18.33px] md:text-[20.33px] text-[22.33px] text-white-A700 w-auto"
                          size="txtArchivoSemiBold2233"
                        >
                          HOME
                        </Text>
                        <Text
                          className="sm:text-[18.33px] md:text-[20.33px] text-[22.33px] text-white-A700 w-auto"
                          size="txtArchivoSemiBold2233"
                        >
                          CATALOGS
                        </Text>
                        <Text
                          className="sm:text-[18.33px] md:text-[20.33px] text-[22.33px] text-white-A700 w-auto"
                          size="txtArchivoSemiBold2233"
                        >
                          BLOG
                        </Text>
                        <Text
                          className="sm:text-[18.33px] md:text-[20.33px] text-[22.33px] text-white-A700 w-auto"
                          size="txtArchivoSemiBold2233"
                        >
                          COLLECTIONS
                        </Text>
                        <a
                          href="javascript:"
                          className="sm:text-[18.33px] md:text-[20.33px] text-[22.33px] text-white-A700 w-auto"
                        >
                          <Text size="txtArchivoSemiBold2233">CONTACT US</Text>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-9 items-center justify-start mb-0.5 md:mt-0 mt-[9px] w-auto">
                    <div className="flex flex-col items-center justify-start w-[28%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="md:h-[25px] h-[26px] relative w-full">
                          <Img
                            className="absolute h-[25px] inset-y-[0] left-[0] my-auto"
                            src="images/img_vector.svg"
                            alt="cart"
                          />
                          <Text
                            className="absolute bg-yellow-900 flex h-[18px] items-center justify-center right-[0] rounded-[50%] text-[11.26px] text-center text-white-A700 top-[0] w-[18px]"
                            size="txtArchivoSemiBold1126"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[7px] items-center justify-center w-[41%] md:w-full">
                          <Img
                            className="h-[5px] w-[5px]"
                            src="images/img_vector_white_a700_5x5.svg"
                            alt="vector"
                          />
                          <Img
                            className="h-[5px] w-[5px]"
                            src="images/img_vector_white_a700_5x5.svg"
                            alt="vector_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-7 w-7"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                    <Img
                      className="h-[21px]"
                      src="images/img_megaphone.svg"
                      alt="megaphone"
                    />
                  </div>
                </div>
                <Line className="bg-white-A700_87 h-px w-full" />
              </div>
              <div className="font-oswald md:h-[519px] h-[867px] md:px-5 relative w-full">
                <div className="md:h-[519px] h-[867px] m-auto w-full">
                  <Text
                    className="absolute leading-[194.00px] left-[5%] md:text-5xl text-[198.68px] text-white-A700 top-[0]"
                    size="txtOswaldSemiBold19868"
                  >
                    <>
                      POWER
                      <br />
                      FROM WITHIN
                    </>
                  </Text>
                  <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <Img
                      className="h-[519px] sm:h-auto object-cover w-full"
                      src="images/img_pexelsvictorfreitas2261479.png"
                      alt="pexelsvictorfre"
                    />
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat h-[158px] md:h-[54px] inset-x-[0] mx-auto p-[52px] md:px-10 sm:px-5 top-[31%] w-[158px]"
                  style={{ backgroundImage: "url('images/img_group273.svg')" }}
                >
                  <Line className="absolute bg-black-900 h-0.5 inset-[0] justify-center m-auto w-[35%]" />
                  <Img
                    className="absolute h-[54px] inset-y-[0] my-auto right-[33%]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-px grid sm:grid-cols-[repeat(0,_1fr_2px)_1fr] md:grid-cols-[repeat(1,_1fr_2px)_1fr] grid-cols-[repeat(2,_1fr_2px)_1fr] justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[42px] md:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[163px] items-start justify-start mt-[13px] w-[97%] md:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                    size="txtArchivoSemiBold20"
                  >
                    FITNESS
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-auto"
                    size="txtOswaldSemiBold42"
                  >
                    IMPROVE YOUR STRENGH
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-base text-gray-900 tracking-[1.60px] uppercase"
                    size="txtArchivoBold16"
                  >
                    GET STARTED
                  </Text>
                  <Img
                    className="h-11 w-11"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
            <Line className="self-center h-[396px] bg-black-900 w-0.5" />
            <div className="flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[42px] md:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[163px] items-start justify-start mt-[13px] w-[97%] md:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                    size="txtArchivoSemiBold20"
                  >
                    BODYBUILDING
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-auto"
                    size="txtOswaldSemiBold42"
                  >
                    GET BEST BODY SHAPES
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-base text-gray-900 tracking-[1.60px] uppercase"
                    size="txtArchivoBold16"
                  >
                    GET STARTED
                  </Text>
                  <Img
                    className="h-11 w-11"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
            <Line className="self-center h-[396px] bg-black-900 w-0.5" />
            <div className="flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[42px] md:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[163px] items-start justify-start mt-[13px] w-[97%] md:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                    size="txtArchivoSemiBold20"
                  >
                    CROSSFIT
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-auto"
                    size="txtOswaldSemiBold42"
                  >
                    THE BEST DIETARY PLANS
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-base text-gray-900 tracking-[1.60px] uppercase"
                    size="txtArchivoBold16"
                  >
                    GET STARTED
                  </Text>
                  <Img
                    className="h-11 w-11"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
          </List>
          <div className="bg-gray-900 flex md:flex-col flex-row font-oswald md:gap-10 gap-[63px] items-center justify-end p-[106px] md:px-10 sm:px-5 w-full">
            <div className="h-[767px] md:h-[776px] md:mt-0 my-[11px] relative w-[78%] md:w-full">
              <div className="absolute md:h-[765px] h-[767px] inset-y-[0] my-auto right-[5%] w-[70%] md:w-full">
                <div className="absolute bg-white-A700_75 flex flex-col md:h-auto h-full inset-y-[0] items-start justify-end left-[0] my-auto p-[217px] md:px-10 sm:px-5 rounded-[383px] w-[767px]">
                  <div className="bg-white-A700 flex flex-col gap-[5px] items-center justify-start md:ml-[0] ml-[65px] mt-[49px] p-[35px] sm:px-5">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                      size="txtOswaldMedium30"
                    >
                      24G
                    </Text>
                    <Text
                      className="mb-[3px] text-base text-gray-500"
                      size="txtArchivoRegular16"
                    >
                      PROTEIN
                    </Text>
                  </div>
                  <div className="bg-yellow-900 flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[65px] p-[35px] sm:px-5">
                    <Text
                      className="md:ml-[0] ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                      size="txtOswaldMedium30"
                    >
                      5.5G
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[25px] text-base text-gray-900"
                      size="txtArchivoRegular16Gray900"
                    >
                      BCAAS
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[679px] object-cover right-[0] top-[3%] w-[52%]"
                  src="images/img_camada11.png"
                  alt="camadaEleven"
                />
              </div>
              <div className="absolute bg-yellow-900 h-[210px] md:h-[65px] p-[18px] right-[0] rotate-[25deg] rounded-[50%] top-[12%] w-[210px]">
                <Img
                  className="h-[65px] m-auto"
                  src="images/img_user.svg"
                  alt="user"
                />
                <List
                  className="absolute sm:flex-col flex-row gap-px grid grid-cols-2 h-[173px] inset-[0] justify-center m-auto p-[17px] w-[173px]"
                  orientation="horizontal"
                >
                  <div className="h-[126px] md:h-[19px] relative w-full">
                    <div className="absolute bottom-[0] h-[120px] md:h-[19px] inset-x-[0] mx-auto w-full">
                      <div className="absolute h-[118px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[15px] mb-[-7.7px] ml-[19px] w-[15px] z-[1]"
                          src="images/img_forward_white_a700.svg"
                          alt="forward_One"
                        />
                        <div className="h-[110px] md:h-[19px] mt-auto mx-auto w-full">
                          <div className="absolute bottom-[0] h-[103px] md:h-[19px] inset-x-[0] mx-auto w-full">
                            <div className="absolute h-[99px] inset-[0] justify-center m-auto w-full">
                              <Img
                                className="h-[19px] mb-[-1.95px] ml-0.5 w-[19px] z-[1]"
                                src="images/img_clock.svg"
                                alt="clock_One"
                              />
                              <div className="md:h-[19px] h-[82px] mt-auto mx-auto w-full">
                                <div className="absolute bottom-[0] md:h-[19px] h-[68px] inset-x-[0] mx-auto w-[98%]">
                                  <div className="absolute bottom-[0] md:h-[19px] h-[57px] inset-x-[0] mx-auto w-[97%]">
                                    <div className="absolute bottom-[0] md:h-[19px] h-[46px] right-[0] w-[94%]">
                                      <div className="absolute bottom-[0] md:h-[19px] h-[37px] right-[0] w-[89%]">
                                        <div className="absolute bottom-[0] md:h-[19px] h-[30px] right-[0] w-[89%]">
                                          <div className="absolute bottom-[0] md:h-[19px] h-[23px] right-[0] w-[83%]">
                                            <div className="absolute bottom-[0] md:h-3.5 h-[17px] right-[0] w-[65%]">
                                              <Img
                                                className="absolute bottom-[0] h-[13px] right-[0] w-3.5"
                                                src="images/img_user_white_a700.svg"
                                                alt="user"
                                              />
                                              <Img
                                                className="absolute h-3.5 left-[0] top-[0] w-3.5"
                                                src="images/img_contrast.svg"
                                                alt="contrast"
                                              />
                                            </div>
                                            <Img
                                              className="absolute h-[19px] left-[0] top-[0] w-[19px]"
                                              src="images/img_clock.svg"
                                              alt="clock"
                                            />
                                          </div>
                                          <Img
                                            className="absolute h-[15px] left-[0] top-[0] w-4"
                                            src="images/img_forward.svg"
                                            alt="forward"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-3.5 left-[0] top-[0] w-3.5"
                                          src="images/img_settings.svg"
                                          alt="settings"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-2.5 left-[0] top-[0]"
                                        src="images/img_arrowleft.svg"
                                        alt="arrowleft"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[13px] left-[0] top-[0] w-3.5"
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-[13px] left-[0] top-[0] w-3.5"
                                    src="images/img_contrast_white_a700.svg"
                                    alt="contrast_One"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[18px] left-[0] top-[0] w-[18px]"
                                  src="images/img_vector_white_a700.svg"
                                  alt="vector"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute h-[11px] left-[18%] top-[0] w-2.5"
                              src="images/img_contrast_white_a700_11x10.svg"
                              alt="contrast_Two"
                            />
                          </div>
                          <Img
                            className="absolute h-3.5 left-[18%] top-[0] w-[13px]"
                            src="images/img_cut.svg"
                            alt="cut"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-2.5 left-[43%] top-[0]"
                        src="images/img_contrast_white_a700_11x10.svg"
                        alt="contrast_Three"
                      />
                    </div>
                    <Img
                      className="absolute h-[13px] right-[34%] top-[0] w-3"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                  <div className="h-[126px] md:h-[19px] relative w-full">
                    <div className="absolute h-[120px] md:h-[19px] inset-x-[0] mx-auto top-[0] w-full">
                      <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                        <div className="h-[110px] md:h-[19px] mx-auto w-full">
                          <div className="absolute h-[103px] md:h-[19px] inset-x-[0] mx-auto top-[0] w-full">
                            <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                              <div className="md:h-[19px] h-[82px] mx-auto w-full">
                                <div className="absolute md:h-[19px] h-[68px] inset-x-[0] mx-auto top-[0] w-[98%]">
                                  <div className="absolute md:h-[19px] h-[57px] inset-x-[0] mx-auto top-[0] w-[97%]">
                                    <div className="absolute md:h-[19px] h-[47px] left-[0] top-[0] w-[94%]">
                                      <div className="absolute md:h-[19px] h-[37px] left-[0] top-[0] w-[89%]">
                                        <div className="absolute md:h-[19px] h-[30px] left-[0] top-[0] w-[89%]">
                                          <div className="absolute md:h-[19px] h-[23px] left-[0] top-[0] w-[83%]">
                                            <div className="absolute md:h-3.5 h-[17px] left-[0] top-[0] w-[65%]">
                                              <Img
                                                className="absolute h-[13px] left-[0] top-[0] w-3.5"
                                                src="images/img_user_white_a700.svg"
                                                alt="user"
                                              />
                                              <Img
                                                className="absolute bottom-[0] h-3.5 right-[0] w-3.5"
                                                src="images/img_contrast_white_a700.svg"
                                                alt="contrast"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[0] h-[19px] right-[0] w-[19px]"
                                              src="images/img_clock.svg"
                                              alt="clock"
                                            />
                                          </div>
                                          <Img
                                            className="absolute bottom-[0] h-[15px] right-[0] w-[15px]"
                                            src="images/img_forward.svg"
                                            alt="forward"
                                          />
                                        </div>
                                        <Img
                                          className="absolute bottom-[0] h-3.5 right-[0] w-3.5"
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-2.5 right-[0]"
                                        src="images/img_arrowleft.svg"
                                        alt="arrowleft"
                                      />
                                    </div>
                                    <Img
                                      className="absolute bottom-[0] h-[13px] right-[0] w-3.5"
                                      src="images/img_airplane_white_a700.svg"
                                      alt="airplane_One"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[0] h-[13px] right-[0] w-3.5"
                                    src="images/img_contrast.svg"
                                    alt="contrast_One"
                                  />
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-[18px] right-[0] w-[18px]"
                                  src="images/img_settings_white_a700.svg"
                                  alt="settings"
                                />
                              </div>
                              <Img
                                className="h-[19px] ml-auto mr-0.5 mt-[-2.02px] w-[19px] z-[1]"
                                src="images/img_clock.svg"
                                alt="clock_One"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[11px] right-[18%] w-2.5"
                              src="images/img_contrast_white_a700_11x10.svg"
                              alt="contrast_Two"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[0] h-3.5 right-[18%] w-[13px]"
                            src="images/img_cut.svg"
                            alt="cut"
                          />
                        </div>
                        <Img
                          className="h-[15px] ml-auto mr-[19px] mt-[-7.71px] w-[15px] z-[1]"
                          src="images/img_forward.svg"
                          alt="forward_One"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-2.5 inset-x-[0] mx-auto"
                        src="images/img_contrast_white_a700_11x10.svg"
                        alt="contrast_Three"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[13px] left-[32%] w-3"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                </List>
              </div>
              <Button
                className="!text-white-A700 absolute border-l-4 border-solid border-white-A700 bottom-[11%] cursor-pointer font-medium leading-[normal] left-[0] min-w-[213px] text-center text-xl"
                shape="square"
                size="sm"
              >
                READ MORE
              </Button>
              <Text
                className="absolute left-[0] md:text-5xl text-[120px] text-white-A700 top-[4%]"
                size="txtOswaldSemiBold120"
              >
                <span className="text-white-A700 font-oswald text-left font-semibold">
                  BE{" "}
                </span>
                <span className="text-yellow-900 font-oswald text-left font-semibold">
                  BETTER
                </span>
              </Text>
              <div className="absolute flex flex-col gap-2.5 items-start justify-start left-[0] top-[29%] w-auto">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtOswaldMedium30WhiteA700"
                >
                  OUR STORY
                </Text>
                <Text
                  className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-gray-500"
                  size="txtArchivoRegular16"
                >
                  Ac nec est ultrices varius morbi et non. Donec quam sed eget
                  purus. Elementum sed malesuada senectus feugiat faucibus morbi
                  a neque ultricies. Nisl maecenas eget ultricies in lobortis.
                </Text>
              </div>
              <div className="absolute bottom-[34%] flex flex-col gap-2.5 items-start justify-start left-[0] w-auto">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtOswaldMedium30WhiteA700"
                >
                  OUR MISSION
                </Text>
                <Text
                  className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-gray-500"
                  size="txtArchivoRegular16"
                >
                  Ac nec est ultrices varius morbi et non. Donec quam sed eget
                  purus. Elementum sed malesuada senectus feugiat.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[5%] md:w-full">
              <div className="flex flex-col gap-[54px] items-center justify-start w-[19%] md:w-full">
                <div className="bg-white-A700 h-3.5 rounded-[50%] w-3.5"></div>
                <div className="bg-white-A700 h-3.5 rounded-[50%] w-3.5"></div>
              </div>
              <Text
                className="border-[5px] border-solid border-yellow-900 flex h-[74px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[17.82px] md:text-[19.82px] text-[21.82px] text-center text-white-A700 w-[74px]"
                size="txtOswaldRegular2182"
              >
                3
              </Text>
              <div className="bg-white-A700 h-3.5 rounded-[50%] w-3.5"></div>
            </div>
          </div>
          <div className="flex flex-col font-oswald items-center justify-end py-[34px] w-full">
            <div className="overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row gap-[34px] items-center justify-center max-w-[1920px] overflow-auto w-full">
                <Text
                  className="md:text-5xl text-[100px] text-black-900 w-auto"
                  size="txtOswaldRegular100"
                >
                  APPROACH
                </Text>
                <div className="bg-yellow-900 h-3.5 md:px-5 rounded-[50%] w-3.5"></div>
                <Text
                  className="md:text-5xl text-[100px] text-black-900 w-auto"
                  size="txtOswaldRegular100"
                >
                  CARDIO
                </Text>
                <div className="bg-yellow-900 h-3.5 md:px-5 rounded-[50%] w-3.5"></div>
                <Text
                  className="md:text-5xl text-[100px] text-black-900 w-auto"
                  size="txtOswaldRegular100"
                >
                  KICKBOX
                </Text>
                <div className="bg-yellow-900 h-3.5 md:px-5 rounded-[50%] w-3.5"></div>
                <Text
                  className="md:text-5xl text-[100px] text-black-900 w-auto"
                  size="txtOswaldRegular100"
                >
                  JIU-JITSU
                </Text>
                <div className="bg-yellow-900 h-3.5 md:px-5 rounded-[50%] w-3.5"></div>
                <Text
                  className="md:text-5xl text-[100px] text-black-900 w-auto"
                  size="txtOswaldRegular100"
                >
                  BOXING
                </Text>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-100_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-[704px] md:h-auto object-cover w-full"
                src="images/img_pexelstimamir.png"
                alt="pexelstimamir"
              />
            </div>
            <div className="bg-blue_gray-100_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-[704px] md:h-auto object-cover w-full"
                src="images/img_stilllifeperf.png"
                alt="stilllifeperf"
              />
            </div>
            <div className="bg-blue_gray-100_01 flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-[704px] md:h-auto object-cover w-full"
                src="images/img_pexelspixabay416809.png"
                alt="pexelspixabayFortyOne"
              />
            </div>
          </List>
          <div className="font-archivo h-[1276px] md:h-[1325px] sm:h-[Infinitypx] md:px-5 relative w-full">
            <List
              className="absolute sm:flex-col flex-row gap-px grid sm:grid-cols-[repeat(0,_1fr_2px)_1fr] md:grid-cols-[repeat(1,_1fr_2px)_1fr] grid-cols-[repeat(2,_1fr_2px)_1fr] inset-x-[0] justify-center mx-auto top-[0] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between sm:ml-[0] p-[45px] md:px-10 sm:px-5 w-full">
                <Text
                  className="ml-2.5 text-base text-gray-900 tracking-[1.60px] uppercase"
                  size="txtArchivoBold16"
                >
                  GEAR
                </Text>
                <Img
                  className="h-11 mb-0.5 mt-1.5 w-11"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Line className="self-center h-36 bg-black-900 w-0.5" />
              <div className="flex flex-1 flex-row sm:gap-10 gap-[373px] items-center justify-end sm:ml-[0] p-[45px] md:px-10 sm:px-5 w-full">
                <Text
                  className="text-base text-gray-900 tracking-[1.60px] uppercase"
                  size="txtArchivoBold16"
                >
                  ACESSORIES
                </Text>
                <Img
                  className="h-11 mb-0.5 mt-1.5 w-11"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Line className="self-center h-36 bg-black-900 w-0.5" />
              <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between sm:ml-[0] p-[45px] md:px-10 sm:px-5 w-full">
                <Text
                  className="ml-2.5 text-base text-gray-900 tracking-[1.60px] uppercase"
                  size="txtArchivoBold16"
                >
                  DESIGN
                </Text>
                <Img
                  className="h-11 mb-0.5 mt-1.5 w-11"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </List>
            <div className="absolute bg-gray-900 bottom-[0] h-[1133px] md:h-[1325px] sm:h-[2016px] inset-x-[0] mx-auto p-[103px] md:px-10 sm:px-5 w-full">
              <div className="absolute bg-white-A700_75 h-[767px] left-[6%] rounded-[383px] top-[10%] w-[767px]"></div>
              <div className="absolute flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-auto">
                <Text
                  className="md:text-5xl text-[70px] text-white-A700 w-auto"
                  size="txtOswaldMedium70"
                >
                  OUR PROGRAMS
                </Text>
                <Text
                  className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-center text-gray-500"
                  size="txtArchivoRegular16"
                >
                  Ac nec est ultrices varius morbi et non. Donec quam sed eget
                  purus. Elementum sed malesuada senectus.
                </Text>
              </div>
              <div className="absolute bottom-[12%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[64%]">
                <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                  <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start w-full">
                      <Img
                        className="h-[488px] md:h-auto object-cover w-full"
                        src="images/img_pexelsannushkaahuja7991652.png"
                        alt="pexelsannushkaa"
                      />
                    </div>
                    <div className="bg-white-A700 h-[488px] relative w-full">
                      <Img
                        className="h-[488px] m-auto object-cover w-full"
                        src="images/img_pexelsivansamkov4162444.png"
                        alt="pexelsivansamko"
                      />
                      <div className="absolute bg-yellow-900_87 h-[488px] inset-[0] justify-center m-auto rotate-[180deg] w-full"></div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start w-full">
                      <Img
                        className="h-[488px] md:h-auto object-cover w-full"
                        src="images/img_pexelscottonbr.png"
                        alt="pexelscottonbr"
                      />
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row font-archivo gap-4 items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            COACHING
                          </Text>
                          <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            STRENGTH
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldSemiBold42WhiteA700"
                        >
                          GYM DAY
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start pb-[3px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row font-archivo gap-4 items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            COACHING
                          </Text>
                          <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            STRENGTH
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldSemiBold42WhiteA700"
                        >
                          CARDIO WORKOUT
                        </Text>
                      </div>
                      <div className="bg-yellow-900 h-2 mt-[18px] rotate-[-90deg] w-4/5"></div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row font-archivo gap-4 items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            COACHING
                          </Text>
                          <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            STRENGTH
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldSemiBold42WhiteA700"
                        >
                          BODY STRENGTH
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-900 flex flex-col font-archivo items-center justify-end p-[31px] sm:px-5 w-full">
            <div className="flex flex-row gap-7 items-center justify-center md:px-5 w-[16%] md:w-full">
              <Text
                className="text-base text-gray-900 tracking-[1.60px] uppercase"
                size="txtArchivoBold16"
              >
                VIEW FULL TIMETABLE
              </Text>
              <Img
                className="h-11 w-11"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
          <div className="bg-blue_gray-100_02 font-oswald md:h-[1684px] h-[832px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="bg-gray-400 flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                  <Img
                    className="h-[832px] md:h-auto object-cover w-full"
                    src="images/img_pexelscottonbr_832x960.png"
                    alt="pexelscottonbr_One"
                  />
                </div>
                <div className="bg-gray-400_01 h-[832px] relative w-1/2 md:w-full">
                  <Img
                    className="h-[832px] m-auto object-cover w-full"
                    src="images/img_pexelsannushkaahuja7991652_832x960.png"
                    alt="pexelsannushkaa_One"
                  />
                  <div className="absolute bg-lime-900_7f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[114px] md:px-10 sm:px-5 w-full">
                    <Img
                      className="h-[100px] w-[99px]"
                      src="images/img_.svg"
                      alt="One"
                    />
                    <Text
                      className="mt-[49px] sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700"
                      size="txtOswaldRegular55"
                    >
                      <>
                        “THIS PLACE HELP ME
                        <br />
                        ACCOMPLISHED MY
                        <br />
                        BIGGEST GOAL, BE IN SHAPE”
                      </>
                    </Text>
                    <Line className="bg-yellow-900 h-[3px] mt-[42px] w-[12%]" />
                    <div className="flex flex-col font-archivo gap-[11px] items-center justify-start mb-[31px] mt-[65px] w-auto">
                      <Text
                        className="text-center text-white-A700_99 text-xl w-auto"
                        size="txtArchivoRegular20"
                      >
                        Graphic Designer
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-auto"
                        size="txtArchivoBold30"
                      >
                        Monica Belsley
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[205px] inset-x-[0] mx-auto top-[35%] w-[205px]"
              src="images/img_layer1_yellow_900.svg"
              alt="layerOne_One"
            />
          </div>
          <div className="font-archivo h-[2296px] mt-40 md:px-5 relative w-full">
            <div className="flex flex-col font-oswald items-center justify-start mb-[-4px] mx-auto w-full z-[1]">
              <div className="flex flex-col md:gap-10 gap-[237px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[68%] md:w-full">
                  <div className="md:h-[621px] h-[623px] relative w-2/5 md:w-full">
                    <div className="absolute bg-yellow-900 h-[145px] left-[0] rounded-[72px] top-[0] w-[145px]"></div>
                    <div className="absolute flex flex-col gap-2.5 h-full inset-y-[0] items-start justify-start my-auto right-[0] w-auto">
                      <Text
                        className="md:text-5xl text-[100px] text-gray-900 w-auto"
                        size="txtOswaldSemiBold100"
                      >
                        PULSE
                      </Text>
                      <Text
                        className="md:text-5xl text-[100px] text-gray-900_75 w-auto"
                        size="txtOswaldSemiBold100Gray90075"
                      >
                        OUR STORY
                      </Text>
                      <Text
                        className="md:text-5xl text-[100px] text-gray-900_75 w-auto"
                        size="txtOswaldSemiBold100Gray90075"
                      >
                        APPROACH
                      </Text>
                      <Text
                        className="md:text-5xl text-[100px] text-gray-900_75 w-auto"
                        size="txtOswaldSemiBold100Gray90075"
                      >
                        OUR PLAN
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[50px] items-start justify-start md:mt-0 mt-[25px] w-auto sm:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtOswaldMedium30"
                      >
                        BEST GYM
                      </Text>
                      <Text
                        className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-gray-500"
                        size="txtArchivoRegular16"
                      >
                        Ac nec est ultrices varius morbi et non. Donec quam sed
                        eget purus. Elementum sed malesuada senectus feugiat
                        faucibus morbi a neque ultricies. Nisl maecenas eget
                        ultricies in lobortis.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtOswaldMedium30"
                      >
                        OUR PLAN
                      </Text>
                      <Text
                        className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-gray-500"
                        size="txtArchivoRegular16"
                      >
                        Ac nec est ultrices varius morbi et non. Donec quam sed
                        eget purus. Elementum sed malesuada senectus feugiat.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtOswaldMedium30"
                      >
                        TECHNIQUE
                      </Text>
                      <Text
                        className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-gray-500"
                        size="txtArchivoRegular16"
                      >
                        Ac nec est ultrices varius morbi et non. Donec quam sed
                        eget purus. Elementum sed malesuada senectus feugiat. At
                        faucibus morbi a neque ultricies. Nisl maecenas eget
                        ultricies in lobortis. Nec quam sed eget purus.
                        Elementum sed malesuada senectus
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[9px] h-[480px] sm:h-auto items-center justify-center outline outline-black-900 p-[115px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="mt-[21px] md:text-5xl text-[100px] text-center text-gray-900"
                      size="txtOswaldSemiBold100"
                    >
                      6
                    </Text>
                    <Text
                      className="mb-12 text-center text-gray-900 text-xl"
                      size="txtArchivoMedium20"
                    >
                      YEARS OF EXPERIENCES
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 h-[480px] sm:h-auto items-center justify-start outline outline-black-900 p-[136px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="md:text-5xl text-[100px] text-center text-gray-900"
                      size="txtOswaldSemiBold100"
                    >
                      20
                    </Text>
                    <Text
                      className="mb-[27px] text-center text-gray-900 text-xl"
                      size="txtArchivoMedium20"
                    >
                      SELECTED TRAINER
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 h-[480px] sm:h-auto items-center justify-start outline outline-black-900 p-[136px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="md:text-5xl text-[100px] text-center text-gray-900"
                      size="txtOswaldSemiBold100"
                    >
                      120K
                    </Text>
                    <Text
                      className="mb-[27px] text-center text-gray-900 text-xl"
                      size="txtArchivoMedium20"
                    >
                      CALORIES BURNED
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 h-[480px] sm:h-auto items-center justify-start outline outline-black-900 p-[136px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="md:text-5xl text-[100px] text-center text-gray-900"
                      size="txtOswaldSemiBold100"
                    >
                      432
                    </Text>
                    <Text
                      className="mb-[27px] text-center text-gray-900 text-xl"
                      size="txtArchivoMedium20"
                    >
                      HAPPY MEMBERS
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="bg-white-A700 flex sm:flex-1 flex-col h-[480px] sm:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Img
                      className="h-[480px] md:h-auto object-cover w-[480px] sm:w-full"
                      src="images/img_anastasemarago.png"
                      alt="anastasemarago"
                    />
                  </div>
                  <div className="bg-blue_gray-900 flex sm:h-auto md:pr-10 sm:pr-5 pr-[79px] relative w-[480px] sm:w-full">
                    <Img
                      className="h-[480px] my-auto object-cover w-[45%]"
                      src="images/img_vector_480x214.png"
                      alt="vector_Four"
                    />
                    <div className="flex flex-col gap-[30px] items-start justify-start ml-[-162px] my-auto w-auto z-[1]">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            TRAINING
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldMedium42"
                        >
                          BEST GYM
                        </Text>
                        <Text
                          className="leading-[27.00px] max-w-[349px] md:max-w-full text-base text-gray-500"
                          size="txtArchivoRegular16"
                        >
                          Ac nec est ultrices varius morbi et non. Donec quam
                          sed eget purus. Elementum sed
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-white-A700 tracking-[1.60px] uppercase w-auto"
                        >
                          <Text size="txtArchivoBold16WhiteA700">
                            READ MORE
                          </Text>
                        </a>
                        <Line className="bg-yellow-900 h-0.5 rotate-[-90deg] w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-1 flex-col h-[480px] sm:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Img
                      className="h-[480px] md:h-auto object-cover w-[480px] sm:w-full"
                      src="images/img_heavypowerliftinggym.png"
                      alt="heavypowerlifti"
                    />
                  </div>
                  <div className="bg-blue_gray-900 flex sm:flex-1 flex-col h-[480px] sm:h-auto items-start justify-center p-[52px] md:px-10 sm:px-5 w-[480px] sm:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start my-[76px] w-auto">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            TRAINING
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldMedium42"
                        >
                          WEIGHT LOSS
                        </Text>
                        <Text
                          className="leading-[27.00px] max-w-[349px] md:max-w-full text-base text-gray-500"
                          size="txtArchivoRegular16"
                        >
                          Ac nec est ultrices varius morbi et non. Donec quam
                          sed eget purus. Elementum sed
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-white-A700 tracking-[1.60px] uppercase w-auto"
                        >
                          <Text size="txtArchivoBold16WhiteA700">
                            READ MORE
                          </Text>
                        </a>
                        <Line className="bg-yellow-900 h-0.5 rotate-[-90deg] w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="bg-blue_gray-900 flex sm:flex-1 flex-col h-[480px] sm:h-auto items-start justify-center p-[52px] md:px-10 sm:px-5 w-[480px] sm:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start my-[76px] w-auto">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            TRAINING
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldMedium42"
                        >
                          BEST EQUIPMENT
                        </Text>
                        <Text
                          className="leading-[27.00px] max-w-[349px] md:max-w-full text-base text-gray-500"
                          size="txtArchivoRegular16"
                        >
                          Ac nec est ultrices varius morbi et non. Donec quam
                          sed eget purus. Elementum sed
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-white-A700 tracking-[1.60px] uppercase w-auto"
                        >
                          <Text size="txtArchivoBold16WhiteA700">
                            READ MORE
                          </Text>
                        </a>
                        <Line className="bg-yellow-900 h-0.5 rotate-[-90deg] w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 h-[480px] relative w-[480px] sm:w-full">
                    <Img
                      className="h-[480px] m-auto object-cover w-[480px]"
                      src="images/img_sushilghimire.png"
                      alt="sushilghimire"
                    />
                    <div className="absolute bg-yellow-900_7e h-[480px] inset-[0] justify-center m-auto rotate-[180deg] w-[480px]"></div>
                  </div>
                  <div className="bg-blue_gray-900 md:h-[302px] h-[480px] md:pl-10 sm:pl-5 pl-[52px] pt-[52px] relative w-[480px] sm:w-full">
                    <div className="absolute bg-white-A700_75 bottom-[0] h-[302px] right-[0] rounded-[151px] w-[63%]"></div>
                    <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-start justify-start left-[11%] my-auto w-auto">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            TRAINING
                          </Text>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldMedium42"
                        >
                          NUTRITION PLAN
                        </Text>
                        <Text
                          className="leading-[27.00px] max-w-[349px] md:max-w-full text-base text-gray-500"
                          size="txtArchivoRegular16"
                        >
                          Ac nec est ultrices varius morbi et non. Donec quam
                          sed eget purus. Elementum sed
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-white-A700 tracking-[1.60px] uppercase w-auto"
                        >
                          <Text size="txtArchivoBold16WhiteA700">
                            READ MORE
                          </Text>
                        </a>
                        <Line className="bg-yellow-900 h-0.5 rotate-[-90deg] w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-1 flex-col h-[480px] sm:h-auto items-center justify-start w-[480px] sm:w-full">
                    <Img
                      className="h-[480px] md:h-auto object-cover w-[480px] sm:w-full"
                      src="images/img_pexelsmaksimg.png"
                      alt="pexelsmaksimg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col font-oswald items-end justify-start md:pl-10 sm:pl-5 pl-[326px] w-full">
            <div className="flex flex-col gap-[38px] items-end justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start md:mt-0 mt-[103px]">
                  <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-[70px] text-white-A700 w-auto"
                      size="txtOswaldMedium70"
                    >
                      CLASSES TIMETABLE
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[83px] items-start justify-start w-auto md:w-full">
                    <div className="h-[43px] md:h-[45px] relative w-[18%] md:w-full">
                      <div className="absolute bg-yellow-900 h-[41px] inset-y-[0] left-[0] my-auto rounded-[20px] w-[41px]"></div>
                      <Text
                        className="absolute h-max inset-y-[0] my-auto right-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtOswaldMedium30WhiteA700"
                      >
                        ALL TRAINING
                      </Text>
                    </div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700_75 w-auto"
                      size="txtOswaldMedium30WhiteA70075"
                    >
                      BODYBUILDING
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700_75 w-auto"
                      size="txtOswaldMedium30WhiteA70075"
                    >
                      CARDIO
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700_75 w-auto"
                      size="txtOswaldMedium30WhiteA70075"
                    >
                      GYM
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700_75 w-auto"
                      size="txtOswaldMedium30WhiteA70075"
                    >
                      POWERLIFTING
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[342px] md:h-auto object-cover"
                  src="images/img_vector_342x207.png"
                  alt="vector_Six"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="sm:h-[1000px] md:h-[1465px] h-[650px] relative w-4/5 md:w-full">
                  <div className="sm:h-[1000px] md:h-[1465px] h-[650px] m-auto w-full">
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-full">
                      <div className="flex flex-col md:gap-10 gap-28 items-start justify-start w-full">
                        <Line className="bg-gray-600_01 h-px w-full" />
                        <Line className="bg-gray-600_01 h-px w-full" />
                        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <Line className="bg-gray-600_01 h-px w-[63%]" />
                          <Line className="bg-gray-600_01 h-px w-1/4" />
                        </div>
                        <Line className="bg-gray-600_01 h-px w-[38%]" />
                      </div>
                    </div>
                    <Line className="absolute bg-gray-600_01 bottom-[32%] h-px right-[12%] w-[38%]" />
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] w-[76%]"
                      style={{
                        backgroundImage: "url('images/img_group274.svg')",
                      }}
                    >
                      <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start mt-[19px] w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[96%] md:w-full">
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            MONDAY
                          </Text>
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            TUESDAY
                          </Text>
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            WEDNESDAY
                          </Text>
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            THURSDAY
                          </Text>
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            FRIDAY
                          </Text>
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            SATURDAY
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[55px] items-center justify-start w-full">
                          <List
                            className="flex flex-col gap-[55px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start mr-[155px] my-0 w-[84%] md:w-full">
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  FITNESS CLASS
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Mark Thompson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[47px] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BOXING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Sarah Anderson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[204px] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  OPEN GYM
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Jessica Roberts
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[45px] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BODYBUILDING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Michael Johnson
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between mb-[58px] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BOXING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Sarah Anderson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between mb-[58px] md:ml-[0] ml-[205px] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BODYBUILDING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Michael Johnson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[205px] md:mt-0 mt-[58px] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  FITNESS CLASS
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Mark Thompson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between mb-[58px] ml-10 md:ml-[0] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BOXING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Sarah Anderson
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:mt-0 mt-14 w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  OPEN GYM
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Jessica Roberts
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between mb-14 ml-52 md:ml-[0] w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BOXING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Sarah Anderson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[42px] md:mt-0 mt-14 w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  BODYBUILDING
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Michael Johnson
                                </Text>
                              </div>
                              <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[201px] md:mt-0 mt-14 w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtOswaldMedium20"
                                >
                                  FITNESS CLASS
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500 w-auto"
                                  size="txtArchivoRegular16"
                                >
                                  Mark Thompson
                                </Text>
                              </div>
                            </div>
                          </List>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[66%] md:w-full">
                            <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between w-auto">
                              <Text
                                className="text-center text-white-A700 text-xl w-auto"
                                size="txtOswaldMedium20"
                              >
                                BODYBUILDING
                              </Text>
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtArchivoRegular16"
                              >
                                Michael Johnson
                              </Text>
                            </div>
                            <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[43px] w-auto">
                              <Text
                                className="text-center text-white-A700 text-xl w-auto"
                                size="txtOswaldMedium20"
                              >
                                BOXING
                              </Text>
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtArchivoRegular16"
                              >
                                Sarah Anderson
                              </Text>
                            </div>
                            <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between ml-52 md:ml-[0] w-auto">
                              <Text
                                className="text-center text-white-A700 text-xl w-auto"
                                size="txtOswaldMedium20"
                              >
                                OPEN GYM
                              </Text>
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtArchivoRegular16"
                              >
                                Jessica Roberts
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-gray-600_01 bottom-[15%] h-px inset-x-[0] mx-auto w-full" />
                  <div className="absolute flex flex-col gap-[13px] inset-x-[0] items-start justify-start mx-auto top-[5%] w-[97%]">
                    <div className="flex flex-col md:gap-10 gap-[63px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[1139px] text-center text-gray-400_02 text-xl"
                        size="txtOswaldRegular20"
                      >
                        SUNDAY
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                          <Text
                            className="text-center text-gray-400_02 text-xl"
                            size="txtOswaldRegular20"
                          >
                            07:00 - 08:00
                          </Text>
                          <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between w-auto">
                            <Text
                              className="text-center text-white-A700 text-xl w-auto"
                              size="txtOswaldMedium20"
                            >
                              OPEN GYM
                            </Text>
                            <Text
                              className="text-base text-center text-gray-500 w-auto"
                              size="txtArchivoRegular16"
                            >
                              Jessica Roberts
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="mt-[69px] text-center text-gray-400_02 text-xl"
                          size="txtOswaldRegular20"
                        >
                          08:00 - 09:00
                        </Text>
                        <Text
                          className="mt-[83px] text-center text-gray-400_02 text-xl"
                          size="txtOswaldRegular20"
                        >
                          09:00 - 10:00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between md:ml-[0] ml-[1112px] w-auto">
                      <Text
                        className="text-center text-white-A700 text-xl w-auto"
                        size="txtOswaldMedium20"
                      >
                        BOXING
                      </Text>
                      <Text
                        className="text-base text-center text-gray-500 w-auto"
                        size="txtArchivoRegular16"
                      >
                        Sarah Anderson
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] text-center text-gray-400_02 text-xl"
                      size="txtOswaldRegular20"
                    >
                      10:00 - 11:00
                    </Text>
                  </div>
                  <div className="absolute bottom-[2%] flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto w-[97%]">
                    <Text
                      className="text-center text-gray-400_02 text-xl"
                      size="txtOswaldRegular20"
                    >
                      11:00 - 12:00
                    </Text>
                    <div className="flex flex-col gap-px h-[58px] md:h-auto items-center justify-between w-auto">
                      <Text
                        className="text-center text-white-A700 text-xl w-auto"
                        size="txtOswaldMedium20"
                      >
                        FITNESS CLASS
                      </Text>
                      <Text
                        className="text-base text-center text-gray-500 w-auto"
                        size="txtArchivoRegular16"
                      >
                        Mark Thompson
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[767px] md:h-auto md:mt-0 mt-[29px] object-cover"
                  src="images/img_vector_767x207.png"
                  alt="vector_Seven"
                />
              </div>
            </div>
          </div>
          <div className="bg-yellow-900 flex flex-col font-archivo items-center justify-end p-[31px] sm:px-5 w-full">
            <div className="flex flex-row gap-7 items-center justify-center md:px-5 w-[16%] md:w-full">
              <Text
                className="text-base text-gray-900 tracking-[1.60px] uppercase"
                size="txtArchivoBold16"
              >
                VIEW FULL TIMETABLE
              </Text>
              <Img
                className="h-11 w-11"
                src="images/img_arrowdown.svg"
                alt="arrowdown_One"
              />
            </div>
          </div>
          <div className="flex flex-col font-oswald md:px-5 relative w-full">
            <div className="h-[815px] mx-auto w-full">
              <Img
                className="h-[815px] m-auto object-cover w-full"
                src="images/img_pexelspixabay416778.png"
                alt="pexelspixabayFortyOne"
              />
              <div className="absolute bg-yellow-900 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[34px] sm:px-5 rounded-[50%] w-[122px]">
                <Img
                  className="h-[54px] mr-[5px]"
                  src="images/img_arrowright_white_a700.svg"
                  alt="arrowright_One"
                />
              </div>
            </div>
            <div className="flex flex-col gap-14 items-center justify-start mt-[-3px] mx-auto p-[154px] md:px-10 sm:px-5 w-full z-[1]">
              <Text
                className="md:text-5xl text-[70px] text-gray-900"
                size="txtOswaldMedium70Gray900"
              >
                OUR FITNESS CENTER
              </Text>
              <div className="sm:h-[406px] h-[441px] md:h-[676px] mb-14 relative w-[76%] md:w-full">
                <div className="bg-yellow-900 h-[59px] ml-[175px] mt-[102px] rounded-[29px] w-[59px]"></div>
                <List
                  className="absolute flex flex-col gap-[15px] inset-[0] items-start m-auto w-auto"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1210px] my-0 w-full">
                    <div className="flex flex-1 flex-row md:gap-10 gap-[111px] h-[58px] md:h-auto items-center justify-start max-w-[1149px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOswaldRegular20Gray900"
                      >
                        06:00 - 23:00
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtArchivoBold30Gray900"
                      >
                        Honolulu
                      </Text>
                    </div>
                    <Img
                      className="h-11 w-11"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Line className="self-center h-px bg-gray-900 w-full" />
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1210px] my-0 w-full">
                    <div className="flex flex-1 flex-row md:gap-10 gap-[111px] h-[58px] md:h-auto items-center justify-start max-w-[1149px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOswaldRegular20Gray900"
                      >
                        06:00 - 23:00
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtArchivoBold30Gray900"
                      >
                        Hilo
                      </Text>
                    </div>
                    <Img
                      className="h-11 w-11"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Line className="self-center h-px bg-gray-900 w-full" />
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1210px] my-0 w-full">
                    <div className="flex flex-1 flex-row md:gap-10 gap-[111px] h-[58px] md:h-auto items-center justify-start max-w-[1149px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOswaldRegular20Gray900"
                      >
                        06:00 - 23:00
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtArchivoBold30Gray900"
                      >
                        Lahaina
                      </Text>
                    </div>
                    <Img
                      className="h-11 w-11"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Line className="self-center h-px bg-gray-900 w-full" />
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1210px] my-0 w-full">
                    <div className="flex flex-1 flex-row md:gap-10 gap-[111px] h-[58px] md:h-auto items-center justify-start max-w-[1149px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOswaldRegular20Gray900"
                      >
                        06:00 - 23:00
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtArchivoBold30Gray900"
                      >
                        Kapolei
                      </Text>
                    </div>
                    <Img
                      className="h-11 w-11"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Line className="self-center h-px bg-gray-900 w-full" />
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1210px] my-0 w-full">
                    <div className="flex flex-1 flex-row md:gap-10 gap-[111px] h-[58px] md:h-auto items-center justify-start max-w-[1149px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOswaldRegular20Gray900"
                      >
                        06:00 - 23:00
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtArchivoBold30Gray900"
                      >
                        Pearl City
                      </Text>
                    </div>
                    <Img
                      className="h-11 w-11"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col md:gap-10 gap-[86px] items-center justify-end md:pl-10 sm:pl-5 pl-[103px] pt-[103px] w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-5xl text-[70px] text-white-A700 w-auto"
                size="txtOswaldMedium70"
              >
                MEET THE PROS
              </Text>
              <Text
                className="leading-[27.00px] max-w-[468px] md:max-w-full text-base text-center text-gray-500"
                size="txtArchivoRegular16"
              >
                Ac nec est ultrices varius morbi et non. Donec quam sed eget
                purus. Elementum sed malesuada senectus.
              </Text>
            </div>
            <div className="md:h-[1311px] sm:h-[2667px] h-[771px] relative w-full">
              <Img
                className="absolute h-[743px] inset-y-[0] my-auto object-cover right-[0] w-[42%]"
                src="images/img_vector_743x748.png"
                alt="vector_Eight"
              />
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[95%]">
                <List
                  className="sm:flex-col flex-row gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="bg-white-A700 h-[488px] relative w-full">
                      <Img
                        className="h-[488px] m-auto object-cover w-full"
                        src="images/img_pexelsannushkaahuja7991652.png"
                        alt="pexelsannushkaa"
                      />
                      <Button className="absolute flex h-[59px] items-center justify-center right-[9%] top-[6%] w-[59px]">
                        <Img src="images/img_trash.svg" alt="trash" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[27px] items-start justify-start pb-2.5 w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            BOXING COACH
                          </Text>
                        </div>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                          size="txtOswaldSemiBold32"
                        >
                          Sarah Anderson
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="bg-white-A700 h-[488px] relative w-full">
                      <Img
                        className="h-[488px] m-auto object-cover w-full"
                        src="images/img_unsplash3nkkbxhpcay.png"
                        alt="unsplash3nkkbxh"
                      />
                      <div className="absolute bg-yellow-900_87 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[30px] sm:px-5 w-full">
                        <Button className="flex h-[59px] items-center justify-center mb-[368px] mr-1 w-[59px]">
                          <Img src="images/img_trash.svg" alt="trash" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-2.5 w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            FITNESS COACH
                          </Text>
                        </div>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                          size="txtOswaldSemiBold32"
                        >
                          Mark Thompson
                        </Text>
                      </div>
                      <div className="bg-yellow-900 h-2 mt-[23px] rotate-[-90deg] w-[77%]"></div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="bg-white-A700 h-[488px] relative w-full">
                      <Img
                        className="h-[488px] m-auto object-cover w-full"
                        src="images/img_pexelspixabay416809_488x393.png"
                        alt="pexelspixabayFortyOne"
                      />
                      <Button className="absolute flex h-[59px] items-center justify-center right-[9%] top-[6%] w-[59px]">
                        <Img src="images/img_trash.svg" alt="trash" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[27px] items-start justify-start pb-2.5 w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            GYM COACH
                          </Text>
                        </div>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                          size="txtOswaldSemiBold32"
                        >
                          Jessica Roberts
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="bg-white-A700 h-[488px] relative w-full">
                      <Img
                        className="h-[488px] m-auto object-cover w-full"
                        src="images/img_unsplashuredfbdk1fe.png"
                        alt="unsplashuredfbd"
                      />
                      <Button className="absolute flex h-[59px] items-center justify-center right-[9%] top-[6%] w-[59px]">
                        <Img src="images/img_trash.svg" alt="trash" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[27px] items-start justify-start pb-2.5 w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <Text
                            className="text-xl text-yellow-900 tracking-[4.00px] w-auto"
                            size="txtArchivoSemiBold20"
                          >
                            BODYBULDING COACH
                          </Text>
                        </div>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                          size="txtOswaldSemiBold32"
                        >
                          Michael Johnson
                        </Text>
                      </div>
                      <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-oswald items-end justify-end md:pl-10 sm:pl-5 pl-[138px] py-[138px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1567px] mt-[21px] mx-auto w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-96 items-start justify-start mb-0.5 w-[15%] md:w-full">
                <Text
                  className="md:text-5xl text-[70px] text-gray-900"
                  size="txtOswaldMedium70Gray900"
                >
                  <>
                    LASTEST
                    <br />
                    BLOG
                  </>
                </Text>
                <Button
                  className="!text-white-A700 border-gray-900 border-l-4 border-solid cursor-pointer font-medium leading-[normal] min-w-[213px] text-center text-xl"
                  shape="square"
                  size="sm"
                >
                  READ MORE
                </Button>
              </div>
              <List
                className="flex sm:flex-col flex-row font-archivo gap-[35px] justify-start overflow-auto w-auto"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[497px] md:h-auto object-cover w-full"
                      src="images/img_pexelsandreap.png"
                      alt="pexelsandreap"
                    />
                  </div>
                  <div className="flex flex-col gap-[29px] items-center justify-end pt-[11px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[393px] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-400 tracking-[3.20px] w-auto"
                          size="txtArchivoSemiBold16"
                        >
                          21 FEBUARY 2023
                        </Text>
                      </div>
                      <Text
                        className="max-w-[393px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtArchivoSemiBold24"
                      >
                        Achieve Your Fitness Goals: Insights from Our Center
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[497px] md:h-auto object-cover w-full"
                      src="images/img_jesperaggergaa.png"
                      alt="jesperaggergaa"
                    />
                  </div>
                  <div className="flex flex-col gap-[29px] items-center justify-end pt-[11px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[393px] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-400 tracking-[3.20px] w-auto"
                          size="txtArchivoSemiBold16"
                        >
                          21 FEBUARY 2023
                        </Text>
                      </div>
                      <Text
                        className="max-w-[393px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtArchivoSemiBold24"
                      >
                        Achieve Your Fitness Goals: Insights from Our Center
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[497px] md:h-auto object-cover w-full"
                      src="images/img_lowangleview.png"
                      alt="lowangleview"
                    />
                  </div>
                  <div className="flex flex-col gap-[29px] items-center justify-end pt-[11px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[393px] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-400 tracking-[3.20px] w-auto"
                          size="txtArchivoSemiBold16"
                        >
                          21 FEBUARY 2023
                        </Text>
                      </div>
                      <Text
                        className="max-w-[393px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtArchivoSemiBold24"
                      >
                        Achieve Your Fitness Goals: Insights from Our Center
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-0.5 rotate-[-90deg] w-full" />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <footer className="bg-gray-900 flex font-oswald items-center justify-center mt-[25px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mt-[65px] w-full">
              <div className="flex flex-col md:gap-10 gap-[142px] items-center justify-center w-full">
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Img
                      className="h-[50px]"
                      src="images/img_layer1.svg"
                      alt="layerOne_Two"
                    />
                    <div className="h-[75px] relative w-[27%] md:w-full">
                      <div className="absolute bg-yellow-900 h-[75px] inset-y-[0] left-[0] my-auto rounded-[37px] w-[75px]"></div>
                      <Text
                        className="absolute h-full inset-y-[0] my-auto right-[0] sm:text-[36.27px] md:text-[42.27px] text-[50.27px] text-white-A700"
                        size="txtOswaldMedium5027"
                      >
                        POWER FROM WITHIN
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_87 h-px mt-[61px] w-full" />
                  <div className="flex md:flex-col flex-row font-archivo md:gap-5 items-start justify-start mt-[101px] w-full">
                    <div className="flex flex-col gap-[47px] items-start justify-start w-auto">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col font-archivo items-center justify-start w-auto">
                          <a
                            href="javascript:"
                            className="text-gray-500_01 text-xl w-auto"
                          >
                            <Text size="txtArchivoSemiBold20Gray50001">
                              CONTACT US
                            </Text>
                          </a>
                        </div>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldRegular42"
                        >
                          hello@pulse.com
                        </Text>
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldRegular42"
                        >
                          +907 683 8196
                        </Text>
                      </div>
                      <div className="flex flex-col gap-6 h-[66px] md:h-auto items-start justify-between w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-gray-500_01 text-xl w-auto"
                            size="txtArchivoSemiBold20Gray50001"
                          >
                            FOLLOW US
                          </Text>
                        </div>
                        <Img
                          className="h-5 w-[150px]"
                          src="images/img_frame425.svg"
                          alt="frame425"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[853px] w-auto">
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-gray-500_01 text-xl w-auto"
                          size="txtArchivoSemiBold20Gray50001"
                        >
                          OUR LOCATION
                        </Text>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                            size="txtOswaldRegular42"
                          >
                            Hawaii
                          </Text>
                          <Text
                            className="text-gray-500_01 text-xl"
                            size="txtArchivoRegular20Gray50001"
                          >
                            <>
                              828 Timbercrest Road,
                              <br />
                              Healy City, AK 99743
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                            size="txtOswaldRegular42"
                          >
                            New York
                          </Text>
                          <Text
                            className="text-gray-500_01 text-xl"
                            size="txtArchivoRegular20Gray50001"
                          >
                            <>
                              828 Timbercrest Road,
                              <br />
                              Healy City, AK 99743
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[166px] w-auto">
                      <Text
                        className="text-gray-500_01 text-xl w-auto"
                        size="txtArchivoSemiBold20Gray50001"
                      >
                        OPENING HOURS
                      </Text>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldRegular42"
                        >
                          Monday-Friday
                        </Text>
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtArchivoRegular20Gray50001"
                        >
                          <>
                            Our doors are open
                            <br />
                            06:00 - 22:00
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                          size="txtOswaldRegular42"
                        >
                          Weekends
                        </Text>
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtArchivoRegular20Gray50001"
                        >
                          <>
                            Our doors are open
                            <br />
                            10:00 - 21:00
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900 flex flex-col font-archivo items-start justify-end p-[34px] sm:px-5 w-full">
                  <Text
                    className="md:ml-[0] ml-[73px] text-base text-white-A700_90"
                    size="txtArchivoMedium16"
                  >
                    <span className="text-white-A700 font-archivo text-left font-medium">
                      Copyright{" "}
                    </span>
                    <span className="text-white-A700 font-archivo text-left font-bold">
                      Dotcreativemarket
                    </span>
                    <span className="text-white-A700 font-archivo text-left font-medium">
                      , All Rights Reserved
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PUSLEFitnessCenterPage;
