export default function Contact() {
  return (
    <div className="m-2">
      <div className="bg-neutral-400 rounded-xl">
        <h2 className="  flex justify-left pl-8 pt-2 font-semibold font-mono ">
          Contact me
        </h2>
        <div className="flex items-center flex-col ">
          <input
            type="text"
            placeholder="Your email:"
            className="w-11/12 h-8 rounded-xl p-4 bg-neutral-600 mt-4"
          />
          <input
            type="text"
            placeholder="Message:"
            className=" rounded-xl p-4 bg-neutral-600 w-11/12 h-24 m-3"
          />
        </div>
        <div className="flex justify-end pr-8 pt-1 pb-4 ">
          <button className="w-20 h-6 rounded-lg font-semibold font bg-neutral-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
