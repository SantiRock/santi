import { About } from "./About"
import { Next } from "./Next"

const Section = ({content}) => {
    
    return(
        <section id={content.id} name={content.title} className=" bg-blue-100 px-10 py-5 shadow-xl sm:mb-10 rounded-xl">
            <h3 className="mb-1">{content.title}</h3>
            <div className="my-4 px-5"><a href={content.link} target="_blank"><img src={content.image} alt={content.title} className="rounded-lg"/></a></div>
            <p className="indent-8 text-justify mb-3" dangerouslySetInnerHTML={{__html: content.text }}></p>
            <ul>
                {content.links.map(link => (
                    <li key={link.id} className="py-1"><a href={link.link} target="_blank" className="">{link.name}</a> {link.plus}</li>
                ))}       
            </ul>
        </section>
    )
}

//  <div className="my-5 px-5"><img src={content.image} alt={content.title} className="rounded-lg"/></div>

const Contact = ({contact}) => {

    return(
        <section id="contact" name="contact" className=" bg-blue-100 px-10 py-5 shadow-xl sm:mb-10 rounded-xl">
            <h3 className="mb-1">{contact.title}</h3>
            <p className="text-gray-700">sqp.dev@gmail.com</p>
            <div className="my-4 px-5"><a href={contact.link} target="_blank"><img src={contact.image} alt={contact.title} className="rounded-lg"/></a></div>
        </section>
    )
}

const Last = ({last}) => {
    return(
        <section id="last" name="last proyect" className=" bg-blue-100 px-10 py-5 shadow-xl sm:mb-10 rounded-xl">
            <h3 className="mb-1">{last.title}</h3>
            <a href={last.link} target="_blank"><h4 className="mb-1 hover:text-gray-500">{last.name}</h4></a>
            <div className="my-4 px-5"><a href={last.link} target="_blank"><img src={last.image} alt={last.name} className="rounded-lg"/></a></div>
            <p className="indent-8 text-justify mb-3">{last.description}</p>
        </section>
    )

}


export const Body = ({content}) => {

    return(
        <main className="mb-5 m-auto max-w-2xl">
            <About about={content.about} />
            <Last last={content.last}/>
            <Section content={content.pixel} />
            <Section content={content.frameworks} />
            <Section content={content.api} />
            <Contact contact={content.contact}/>
            <Next next={content.next}/>
        </main>
    )

}