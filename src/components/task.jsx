export default function Task({  description }) {
  return (
    <>
      <div className="p-6 rounded-2xl font-semibold  bg-[#f6f5f9] w-full sm:w-72">
        
        <p>{description}</p>
      </div>
    </>
  );
}