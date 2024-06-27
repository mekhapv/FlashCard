export function SubmitButton({ handleSubmit }) {
  return (
    <div>
      <button
        type="submit"
        class=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  );
}
