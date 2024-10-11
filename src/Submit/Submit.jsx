import "./Submit.css";

export function SubmitButton() {
  return (
    <div className="button-container">
      <button
        type="submit"
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded "
      >
        Create
      </button>
    </div>
  );
}
