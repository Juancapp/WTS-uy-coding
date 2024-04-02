import "./index.css";

function Loading({
  title,
  errorMessage,
}: {
  title: string;
  errorMessage?: string;
}) {
  return (
    <div className="loadingContainer">
      <h1>{title}</h1>
      {!!errorMessage?.length && <p>{errorMessage}</p>}
    </div>
  );
}

export default Loading;
