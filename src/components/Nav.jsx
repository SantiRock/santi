import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setLg } from "../redux/slice";
import { setShowModal } from "../redux/modalSlice";
import { getLg, getShowModal } from "../redux/selectors";
import styled, { keyframes } from "styled-components";

const BurguerMobile = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-7 h-7 border-2 border-emerald-600 hover:bg-emerald-200 mdd:hidden"
  ></button>
);

const NavModal = ({ nav }) => {
  const sm = useSelector(getShowModal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  const clickClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      dispatch(setShowModal(false));
    }
  };

  const modalClasses = `modal-container ${sm ? 'show' : 'hide'}`;

  return (
    <>
      {sm && (
        <div className={modalClasses} onClick={clickClose}>
        <div className="modal fixed top-0 right-0 z-10 bg-emerald-100 w-72 h-screen text-end py-2 px-11">
          <button
            onClick={closeModal}
            className="text-2xl hover:text-emerald-400"
          >
            X
          </button>
          <ul className="text-start mt-3">
            {nav.map((n) => (
              <li key={n.id} className="text-xl mb-5">
                <a
                  href={n.link}
                  onClick={closeModal}
                  className="text-emerald-700 font-normal"
                >
                  {n.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
    </>
  );
};

///////////

export const Nav = ({ nav }) => {
  //const [showModal, setShowModal] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch();
  const lg = useSelector(getLg);
  const sm = useSelector(getShowModal);

  /// Idioma

  const langChange = (event) => {
    dispatch(setLanguage(event.currentTarget.value));
    dispatch(setLg(event.currentTarget.value));
  };

  ///// Manejar estade del scroll para aparecer y desparecer menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScroll > currentScrollPos || currentScrollPos < 10);
      setPrevScroll(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  ///// Para offset para loslinks de las secciones

  document.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
      e.preventDefault();

      const targetId = target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -50; /* Ajusta el valor según tus necesidades */
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });

  ////...

  //// Abrir ymodal
  const openModal = () => {
    dispatch(setShowModal(true));
  };

  return (
    <div
      className={`fixed w-full left-0 top-0 pt-3 pb-2 px-6 md:px-10 bg-nav z-50 transition-opacity duration-300 ${
        !visible && "opacity-0"
      }`}
    >
      <nav className="flex justify-between max-w-5xl m-auto">
        <div className="flex">
          <select
            className="text-black bg-transparent focus:outline-0"
            value={lg}
            name="lang"
            onChange={langChange}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <a href="https://github.com/SantiRock" target="_blank">
            <img
              src="./images/github-mark.svg"
              alt="github"
              className="w-7 ml-3"
            />
          </a>
          <a href="https://github.com/santirockk" target="_blank">
            <img
              src="./images/github-mark1.svg"
              alt="github"
              className="w-7 ml-3"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-quintero-pinto/"
            target="_blank"
          >
            <img
              src="./images/linkedin.svg"
              alt="linkedin"
              className="w-7 ml-3"
            />
          </a>
        </div>

        <ul className="gap-5 hidden mdd:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={n.link} className="font-normal text-emerald-900">
                {n.text}
              </a>
            </li>
          ))}
        </ul>

        <BurguerMobile onClick={openModal} />
        <NavModal nav={nav} />
      </nav>
    </div>
  );
};

/*const NavMovile = () => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="17"
        viewBox="0 0 23 17"
        className="fill-gray-600 hover:fill-emerald-300"
      >
        <rect width="23" height="3" rx="1" />
        <rect y="7" width="23" height="3" rx="1" />
        <rect y="14" width="23" height="3" rx="1" />
      </svg>
    </button>
  );
}*/

/*
const NavModal = ({ nav, onClick, closeClick, showModall }) => {
  
  return (
    <div className='fixed top-0 left-0  w-screen h-screen' onClick={closeClick}>
      <div className='modal fixed top-0 right-0 z-10 bg-emerald-100 w-72 h-screen text-end py-2 px-11'>
        <button onClick={onClick} className="text-2xl hover:text-emerald-400">
          X
        </button>
        <ul className="text-start mt-3">
          {nav.map((n) => (
            <li key={n.id} className="text-xl mb-5">
              <a href={n.link} onClick={closeClick} className="text-emerald-700 font-normal">
                {n.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};*/
/*
useEffect(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dispatch(setShowModal(false));
    }
  });

  return () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dispatch(setShowModal(false));
      }
    });
  }
}, []);
*/
