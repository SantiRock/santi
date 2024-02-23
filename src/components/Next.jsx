export const Next = ({ next }) => {
  return (
    <section
      id="next"
      name="next"
      className=" bg-red-100 px-10 py-5 shadow-xl sm:mb-10 rounded-xl"
    >
      <div>
        <h2>{next.title}</h2>

        <h4>{next.titlep}</h4>
        <ul className="mb-2">
          {next.proyects.map((proyect) => (
            <li key={proyect.id}>- {proyect.description}</li>
          ))}
        </ul>
        <h3>{next.titlea}</h3>
        <ul className="mb-2">
          {next.learning.map((proyect) => (
            <li key={proyect.id}>
              <i>{proyect.description}</i>
            </li>
          ))}
        </ul>
        <h4>{next.titleap}</h4>
        <ul className="mb-2">
          {next.learnext.map((proyect) => (
            <li key={proyect.id}>
              <i>{proyect.description}</i>
            </li>
          ))}
        </ul>
        <h4>{next.titleaf}</h4>
        <ul>
          {next.learnf.map((proyect) => (
            <li key={proyect.id}>
              <i>{proyect.description}</i>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-4 px-5">
        <a href={next.link} target="_blank">
          <img src={next.image} alt={next.title} className="rounded-lg" />
        </a>
      </div>
    </section>
  );
};
