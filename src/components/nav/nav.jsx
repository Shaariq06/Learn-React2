import './nav.css';

const Nav = ({links}) => {
  return (
    <div>
        <section>
            left section
        </section>
        <section>
        {links.map(({link, label}, i) => (
        <div key={i}>
        <p>{link}</p>
        <p>{label}</p>
        </div>

      ))}
        </section>
    </div>
  )
}

export default Nav