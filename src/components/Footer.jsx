export const Footer = ({footer}) => {

    return(
        <footer className="text-center mt-auto text-sm mb-5">
            <p className="text-gray-200">{footer.texta} <b>Santiago Quintero</b> {footer.textb} <b>React</b> & <b>Tailwind</b></p>
            <p className="text-gray-200">Cali Colombia © 2024</p>

        </footer>
    )
}