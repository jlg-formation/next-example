export default function LoadingCircle() {
  return (
    <svg
      className="animate-spin h-6 w-6 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-10"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <circle
        className="opacity-100"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="10,90"
      ></circle>
    </svg>
  )
}
