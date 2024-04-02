import "./index.css";

function Successfully({ date }: { date: string }) {
  const dateDate = date.slice(0, 10);
  const hour = date.slice(-5);

  return (
    <div className="ticket">
      <img src="./images/ticket.png" alt="ticket" />
      <p>
        {`Tu entrada para la función ${dateDate} a las ${hour} ha sido canjeada.`}
      </p>
      <p>¡Te esperamos!</p>
    </div>
  );
}

export default Successfully;
