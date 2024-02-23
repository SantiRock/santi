import { Nav } from "./Nav"

export function Header ({header, nav}) {

    return (
        <header className="text-center pt-2 sm:text-left mb-5 sm:mb-16 sm:pt-3">
            <Nav nav={nav}/>
            <div className="sm:flex mt-8 items-center justify-center gap-3">
                <img className="w-1/4 m-auto sm:w-28 sm:m-0" src="./santi.webp" alt="Santiago Quintero"/>
                <div>
                    <h1 className="text-4xl mb-1">Santiago Quintero</h1>
                    <p>{header}</p>
                    <a href="https://sqpweb.netlify.app/" target="_blank"><i>Site</i></a>
                </div>
            </div>
        </header>
    )

}