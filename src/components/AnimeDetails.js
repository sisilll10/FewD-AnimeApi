import React from 'react';
import { Link } from 'react-router-dom';

const AnimeDetails = (props) => {
  console.log(props)

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src={props.anime.image_url} />
                </div>
                <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">{props.anime.title}</h1>
                    <div className="small mb-1">Episode: {props.anime.episodes}</div>
                    
                    <div className="fs-5 mb-5">
                        <span>Synopsis</span>
                    <p className="lead">{props.anime.synopsis}</p>
                    </div>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AnimeDetails;
