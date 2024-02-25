import React from "react";

import { Img, List, Text } from "components";

const FramePage = () => {
  return (
    <>
      <div className="bg-gray-400 flex flex-col font-abhayalibreextrabold items-center justify-start mx-auto w-full">
        <header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="sm:flex-1 h-[65px] md:h-auto sm:ml-[0] ml-[27px] sm:mt-0 my-[19px] object-cover w-[15%] sm:w-full"
            src="images/img_logo10.png"
            alt="logoTen"
          />
          <Text
            className="ml-8 sm:ml-[0] sm:mt-0 my-[42px] text-[15px] text-white-A700 tracking-[1.04px] uppercase"
            size="txtAbhayaLibreExtraBold15"
          >
            {" "}
            Home
          </Text>
          <Text
            className="sm:ml-[0] ml-[41px] sm:mt-0 my-[42px] text-[15px] text-white-A700 tracking-[1.04px] uppercase"
            size="txtAbhayaLibreExtraBold15"
          >
            Branches
          </Text>
          <Text
            className="sm:ml-[0] ml-[38px] sm:mt-0 my-[42px] text-[15px] text-white-A700 tracking-[1.04px] uppercase"
            size="txtAbhayaLibreExtraBold15"
          >
            Information
          </Text>
          <Text
            className="sm:ml-[0] ml-[26px] sm:mt-0 my-[42px] text-[15px] text-white-A700 tracking-[1.04px] uppercase"
            size="txtAbhayaLibreExtraBold15"
          >
            Contact
          </Text>
          <Text
            className="sm:ml-[0] ml-[370px] sm:mt-0 my-[42px] text-[15px] text-white-A700 tracking-[1.04px] uppercase"
            size="txtAbhayaLibreExtraBold15"
          >
            Join
          </Text>
          <a
            href="javascript:"
            className="ml-9 sm:ml-[0] mr-[72px] sm:mt-0 my-[42px] text-[15px] text-white-A700 tracking-[1.04px] uppercase"
          >
            <Text size="txtAbhayaLibreExtraBold15">Login</Text>
          </a>
        </header>
        <div className="h-[749px] md:px-5 relative w-full">
          <Img
            className="h-[749px] m-auto object-cover w-full"
            src="images/img_image.png"
            alt="image"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[82px] inset-x-[0] items-center justify-start mx-auto top-[21%]">
            <Text
              className="md:text-5xl text-9xl text-center text-shadow-ts text-white-A700"
              size="txtAclonicaRegular128"
            >
              <span className="text-gray-700 font-aclonica font-normal">
                Ek
              </span>
              <span className="text-red-300 font-aclonica font-normal">va</span>
              <span className="text-gray-600 font-aclonica font-normal">
                to
              </span>
              <span className="text-gray-400_01 font-aclonica font-normal">
                ri
              </span>
              <span className="text-gray-700_01 font-aclonica font-normal">
                al
              </span>
            </Text>
            <Text
              className="leading-[90.00px] md:text-5xl text-8xl text-center text-white-A700 w-full"
              size="txtAbhayaLibreExtraBold96"
            >
              The company is a large manufacturer of clothing and workwear.
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-[33px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1129px] mb-[31px] mt-[27px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
              size="txtAbhayaLibreExtraBold39"
            >
              Branches
            </Text>
            <Img
              className="h-[65px] md:h-auto mt-4 object-cover w-[15%] sm:w-full"
              src="images/img_logo10.png"
              alt="logoTwo"
            />
            <Text
              className="leading-[22.00px] mt-6 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[41%] sm:w-full"
              size="txtAbhayaLibreExtraBold24"
            >
              A Branches page will help you and your company make a first
              impression. It is also important to increase brand awareness,
              trust and customer loyalty
            </Text>
            <div className="flex flex-col gap-11 items-center justify-start mt-11 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[255px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <Img
                  className="h-[255px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[255px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <Img
                  className="h-[255px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mx-auto pb-[55px] w-full">
            <div className="md:h-[443px] h-[445px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] w-full"
                style={{ backgroundImage: "url('images/img_group1.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mb-[169px] w-[70%] md:w-full">
                  <Text
                    className="sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
                    size="txtAbhayaLibreExtraBold39"
                  >
                    history of the company
                  </Text>
                  <Img
                    className="h-[65px] md:h-auto mt-3.5 object-cover w-[21%] sm:w-full"
                    src="images/img_logo10.png"
                    alt="logoThree"
                  />
                  <Text
                    className="leading-[22.00px] mt-[22px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtAbhayaLibreExtraBold24"
                  >
                    <>
                      The history of the company, currently known to the market
                      under the name “Ekvatorial”, dates back more than 15
                      years.
                      <br />
                      The company is the largest enterprise in the clothing
                      industry of Uzbekistan, specializing in the production of
                      denim products and uniforms for all industries
                    </>
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[0] right-[14%] sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
                size="txtAbhayaLibreExtraBold39"
              >
                Activity
              </Text>
            </div>
            <Img
              className="h-[65px] md:h-auto mt-[13px] object-cover w-[15%]"
              src="images/img_logo10.png"
              alt="logoFour"
            />
            <Text
              className="leading-[22.00px] mt-7 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[93%] sm:w-full"
              size="txtAbhayaLibreExtraBold24"
            >
              The EKVATORIAL GROUP company produces products in strict
              accordance with the technical specifications provided by the
              customer: Depending on the type of operation performed, different
              types of sewing equipment are used when sewing products. The
              experimental workshop is equipped with a computer-aided design
              system. In addition, an automated pattern output system is used,
              which allows us to provide all sewing factories with original
              patterns and ensure high and uniform quality of the finished
              product. All production processes have adopted the latest
              technologies, and are expanding annually taking into account the
              dynamic development of the company.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[-15px] mx-auto p-7 sm:px-5 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-6 w-[97%] md:w-full">
              <div className="flex flex-col relative w-[24%]">
                <Text
                  className="mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
                  size="txtAbhayaLibreExtraBold39"
                >
                  Assortments
                </Text>
                <Img
                  className="h-[65px] mt-[-0.07px] mx-auto object-cover w-[65%] z-[1]"
                  src="images/img_logo10.png"
                  alt="logoFive"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[77px] items-start justify-start mt-[3px] w-full">
                <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                  <div className="h-[520px] relative w-[32%] md:w-full">
                    <Img
                      className="h-[520px] m-auto object-cover w-full"
                      src="images/img_image_520x350.png"
                      alt="image_One"
                    />
                    <div className="absolute bottom-[7%] flex flex-col gap-3.5 inset-x-[0] items-start justify-start mx-auto">
                      <Text
                        className="sm:text-[35px] md:text-[37px] text-[39px] text-gray-900 text-shadow-ts1"
                        size="txtAclonicaRegular39"
                      >
                        {" "}
                        jeans
                      </Text>
                      <Text
                        className="leading-[28.00px] text-base text-gray-900 text-shadow-ts1 w-full"
                        size="txtAbhayaLibreExtraBold16"
                      >
                        All production processes have adopted the latest
                        technologies, and are expanding annually taking into
                        account the dynamic development of the company.
                      </Text>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[29px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="h-[520px] sm:ml-[0] relative w-full">
                      <Img
                        className="h-[520px] m-auto object-cover w-full"
                        src="images/img_image_2.png"
                        alt="image"
                      />
                      <Text
                        className="absolute bottom-[26%] inset-x-[0] mx-auto md:text-4xl sm:text-[34px] text-[38px] text-shadow-ts1 text-white-A700 w-max"
                        size="txtAclonicaRegular38"
                      >
                        denim suits
                      </Text>
                      <Text
                        className="absolute bottom-[2%] leading-[28.00px] right-[0] text-base text-gray-900 text-shadow-ts1 w-[95%] sm:w-full"
                        size="txtAbhayaLibreExtraBold16"
                      >
                        All production processes have adopted the latest
                        technologies, and are expanding annually taking into
                        account the dynamic development of the company.
                      </Text>
                    </div>
                    <div className="h-[520px] sm:ml-[0] relative w-full">
                      <Img
                        className="h-[520px] m-auto object-cover w-full"
                        src="images/img_image_6.png"
                        alt="image"
                      />
                      <Text
                        className="absolute bottom-[26%] left-[3%] md:text-3xl sm:text-[28px] text-[32px] text-shadow-ts1 text-white-A700"
                        size="txtAclonicaRegular32"
                      >
                        Military uniform
                      </Text>
                      <Text
                        className="absolute bottom-[2%] inset-x-[0] leading-[28.00px] mx-auto text-base text-shadow-ts1 text-white-A700 w-[98%] sm:w-full"
                        size="txtAbhayaLibreExtraBold16WhiteA700"
                      >
                        All production processes have adopted the latest
                        technologies, and are expanding annually taking into
                        account the dynamic development of the company.
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex flex-row gap-[47px] items-center justify-start md:ml-[0] ml-[5px] w-[9%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pb-[63px] w-full">
          <div className="md:h-[443px] h-[457px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[123px] w-[67%] md:w-full">
                <Text
                  className="sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
                  size="txtAbhayaLibreExtraBold39"
                >
                  Materials and fabrics
                </Text>
                <Img
                  className="h-[65px] md:h-auto mt-3.5 object-cover w-[21%] sm:w-full"
                  src="images/img_logo10.png"
                  alt="logoSix"
                />
                <Text
                  className="leading-[22.00px] mt-[22px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                  size="txtAbhayaLibreExtraBold24"
                >
                  The materials used in sewing uniforms and departmental
                  outerwear undergo serious multi-level tests by specialized
                  laboratories and meet stringent standard requirements.All
                  production processes have adopted the latest technologies, and
                  are expanding annually taking into account the dynamic
                  development of the company.
                </Text>
              </div>
            </div>
            <Text
              className="absolute bottom-[0] right-[12%] sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
              size="txtAbhayaLibreExtraBold39"
            >
              Standards
            </Text>
          </div>
          <Img
            className="h-[65px] md:h-auto mt-[13px] object-cover w-[14%] sm:w-full"
            src="images/img_logo10.png"
            alt="logoSeven"
          />
          <Text
            className="leading-[22.00px] mt-[38px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
            size="txtAbhayaLibreExtraBold24"
          >
            <>
              All clothing produced by the Company meets the requirements of
              Uzbek and foreign standards, and also has certificates and test
              reports issued by international laboratories.
              <br />
              All clothing is hemmed in strict accordance with the
              specifications provided by the customer.
            </>
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start pl-[3px] py-[3px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mb-[27px] mt-6 w-full">
            <div className="flex flex-col md:mt-0 mt-[61px] md:px-5 relative w-[29%] md:w-full">
              <Img
                className="h-[335px] mx-auto object-cover w-[336px]"
                src="images/img_image6_335x336.png"
                alt="imageSix"
              />
              <Img
                className="h-[177px] mt-[-39px] mx-auto object-cover w-full z-[1]"
                src="images/img_telegramcloud.png"
                alt="telegramcloud"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[37px] items-center justify-start mb-[59px] md:px-5 w-2/5 md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-[36%] md:w-full">
                <Text
                  className="sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
                  size="txtAbhayaLibreExtraBold39"
                >
                  Gallery
                </Text>
                <Img
                  className="h-[65px] md:h-auto object-cover w-full"
                  src="images/img_logo10.png"
                  alt="logoEight"
                />
              </div>
              <Img
                className="h-[310px] md:h-auto object-cover w-full"
                src="images/img_telegramcloud_310x473.png"
                alt="telegramcloud_One"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[37px] items-center justify-start md:mt-0 mt-[122px] md:px-5 w-[27%] md:w-full">
              <Img
                className="h-[199px] md:h-auto object-cover w-full"
                src="images/img_image7.png"
                alt="imageSeven"
              />
              <Img
                className="h-44 md:h-auto object-cover w-full"
                src="images/img_telegramcloud_176x315.png"
                alt="telegramcloud_Two"
              />
            </div>
          </div>
        </div>
        <div className="md:h-[414px] h-[415px] md:px-5 relative w-full">
          <Img
            className="h-[414px] m-auto"
            src="images/img_rectangle.svg"
            alt="rectangle"
          />
          <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[83%]">
            <div className="flex md:flex-col flex-row font-abhayalibreextrabold md:gap-10 items-start justify-between md:ml-[0] ml-[46px] w-[83%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[87px] justify-start w-[42%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[21px] sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 uppercase"
                  size="txtAbhayaLibreExtraBold39"
                >
                  Contact
                </Text>
                <Img
                  className="h-[97px] sm:h-auto object-cover w-full"
                  src="images/img_logo10.png"
                  alt="logoNine"
                />
              </div>
              <div className="flex flex-col font-inter gap-[19px] items-start justify-start md:mt-0 mt-[120px] w-[39%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterMedium24"
                >
                  ekvatorialjeans@email.com
                </Text>
                <div className="flex flex-row gap-3.5 items-start justify-start w-[68%] md:w-full">
                  <Img
                    className="h-8 w-[31px]"
                    src="images/img_save.svg"
                    alt="save"
                  />
                  <Img
                    className="h-8 w-[31px]"
                    src="images/img_info.svg"
                    alt="info"
                  />
                  <Img
                    className="h-8 w-[31px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-7"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[26px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[555px] mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtInterMedium24"
            >
              +998 931-873-602
            </Text>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-start mt-9 w-full">
              <Text
                className="text-base text-white-A700"
                size="txtInterMedium16"
              >
                Copyright © 2024 K_M_K{" "}
              </Text>
              <Text
                className="sm:ml-[0] ml-[104px] text-base text-white-A700"
                size="txtInterMedium16"
              >
                All rights reserved
              </Text>
              <Text
                className="sm:ml-[0] ml-[79px] text-base text-white-A700"
                size="txtInterMedium16"
              >
                Privacy Policy Terms of Use Sales and Refunds Legal Site Map
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramePage;
