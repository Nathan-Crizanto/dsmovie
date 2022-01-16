import { BASE_URL } from "assets/utils/requests";
import axios from "axios";


import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { MoviePage } from "assets/types/movie";
import { useEffect, useState } from "react";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);


    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=1`).then(
            respose=>{
                const data = respose.data as MoviePage;
                console.log(data)
                setPageNumber(data.number);

            });
    },[ ]);

    

    return (
        <>
            <p>
                {pageNumber}
            </p>
            
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Listing