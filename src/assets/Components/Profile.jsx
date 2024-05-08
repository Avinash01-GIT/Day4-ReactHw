import { CgProfile } from "react-icons/cg";
function Profile() {
  return (
    <div className="w-[50%] m-auto flex pt-10 bg-white border-l-2  border-r-2">
      <div>
        <CgProfile className="text-[#ff6347] text-[5.5rem] mt-10 ml-5" />
        <h1 className="font-extrabold text-center text-xl mt-1 ml-4">
          Profile
        </h1>
      </div>
      <div className=" border-r-4 border-black border-b-4 px-6 mt-5 py-6">
        <h1 className="font-extrabold text-3xl">
          Avinash <br />
          Manigam
        </h1>
        <p className=" tracking-wider">Frontend Developer</p>
      </div>
      <div className="border-b-4 border-black px-6 mt-10 ">
        <p>
          Hi, i'm Avinash Manigam front end developer Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.
        </p>
        <h1 className="">
          <strong>Email : </strong>avinash.m1302@gmail.com
        </h1>
        <h1>
          <strong>Website : </strong> https://github.com/Avinash01-GIT
        </h1>
      </div>
    </div>
  );
}

export default Profile;
