export default function Id() {
  return (
    <>
      <div className="bg-[#FFFFFF] bg-opacity-35 rounded-xl m-2 font-mono grid grid-cols-6 box-border p-2">
        <div className="col-span-1 ">
          <img
            src="src\assets\a.jpg"
            alt="profile"
            className="w-20 rounded-full border-2 border-[#343434] box-content"
          ></img>
        </div>
        <div className="col-span-5 text-[#292929] grid grid-cols-5">
          <div className="ml-4 col-span-4">
            <div>
              <h3 className="text-2xl sm:text-2xl">Mohammad Nickmagham</h3>
            </div>
            <div>
              <h3 className="text-l mt-2 ml-3">Frontend Developer</h3>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-2 content-center gap-5">
            <div className="">
              <div className="pb-4">
                <a
                  href="https://www.linkedin.com/in/mohammad-nickmagham-821a83236/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
              <div className="">
                <a href="https://telegram.me/jptrl" target="_blank">
                  <i className="fab fa-telegram fa-lg"></i>
                </a>
              </div>
            </div>
            <div className="">
              <div className="pb-4">
                <a href="https://x.com/mohammad_nm_" target="_blank">
                  <i className="fab fa-twitter-square fa-lg"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Amohammadnickmagham%40gmail.com%3Fsubject%3DWork%26body%3DHello!"
                  target="_blank"
                >
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
