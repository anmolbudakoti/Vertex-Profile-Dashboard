export default function SocialIcon({ type }) {
  return (
    <button
      className={`w-8 h-8 rounded flex items-center justify-center cursor-pointer`}
    >
      {type === "linkedin" && (
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt="linkedin"
        />
      )}
      {type === "twitter" && (
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
          alt="linkedin"
          className="bg-white rounded-lg"
        />
      )}
      {type === "email" && (
        <img
          src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
          alt="linkedin"
        />
      )}
    </button>
  );
}
