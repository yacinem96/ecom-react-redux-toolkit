import React from 'react'
import './style.css'

export const Footer = () => {
    return (
        <>
            <footer className="text-center bg-dark " >

                <div className="container pt-3">

                    <section className="">

                        <a
                            className="btn btn-link btn-floating btn-lg text-white  m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i>
                        </a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i ></a>
                    </section>

                </div>

            </footer>
        </>
    )
}
