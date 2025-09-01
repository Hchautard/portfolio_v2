// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Card({ children, className = '' }) {
  return (
    <div
      className={`glass flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
