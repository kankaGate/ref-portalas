export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <p className="challenge-time">
        <h2>{title}</h2>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Time is running.../ Timer is inactive</p>
    </section>
  );
}
