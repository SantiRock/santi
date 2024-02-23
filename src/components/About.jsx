
export const About = ({about}) => {

    return(
        <section id="about" name="about" className="max-w-2xl m-auto mb-5 sm:mb-10 bg-green-100 px-10 py-5 pb-7 shadow-xl rounded-xl">
              <h2 className="mb-1">{about.title}</h2>
              <div className="my-4 px-5"><a href={about.link} target="_blank"><img src={about.image} alt={about.title} className="rounded-lg"/></a></div>
                <div dangerouslySetInnerHTML={{ __html: about.about }} className="indent-8 text-justify mb-3"/>
                <div dangerouslySetInnerHTML={{ __html: about.about2 }} className="indent-8 text-justify mb-3"/>
                <div dangerouslySetInnerHTML={{ __html: about.about3 }} className="indent-8 text-justify mb-3"/>
                <div dangerouslySetInnerHTML={{ __html: about.about4 }} className="indent-8 text-justify "/>   
        </section>
      
    )
}