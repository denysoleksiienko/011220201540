import photo from 'assets/photo.png';

export const User = ({ name, job, service }) => {
  return (
    <section className="user">
      <div className="user__inner">
        <div className="user__avatar">
          <img src={photo} alt="avatar" />
        </div>
        <div className="user__about">
          <h1>{name}</h1>
          <p>{job}</p>
          <div className="user__about-desc">
            <span>{service}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
