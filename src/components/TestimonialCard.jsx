// components/TestimonialCard.jsx
export default function TestimonialCard({ text, name, active }) {
  return (
    <div
      className={`rounded-lg p-6 flex justify-evenly items-center flex-col  transition-all duration-300 md:h-60 h-52 ${
        active
          ? "bg-gradient-to-br from-[#504132] to-[#332518] text-white"
          : "bg-white text-[#606060]"
      }`}
    >
      <div className="flex justify-center mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
      </div>
      <p className="md:text-sm text-xs mb-4  text-center">“{text}”</p>
      <p className="font-semibold md:text-base text-sm">{name}</p>
    </div>
  );
}
