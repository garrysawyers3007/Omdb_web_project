import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import { baseUrl, axiosHeaders } from '../../utils/constants';
import axios from 'axios';
import Loader from 'react-loader-spinner';


export default function DetailsPage() {
    const params = useParams();
    const [data, setData] = useState({})
    const [isLoading, setLoadingState]=useState(true)
    const imdbID = params.imdbID;
    const uri = `${baseUrl}omdb/imdb/${imdbID}`;

    useEffect(()=>{
        axios.get(uri, axiosHeaders)
        .then(
            res=>{
                setData(res.data);
                setLoadingState(false);
            }
        )
    });
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */

    if(isLoading){
        return (
            <div
                style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
    )
    }

    return (
        
        <div className="container-md">
        <Card>
          <CardBody>
            <CardTitle><h4>{data.Title} ({data.Year})</h4></CardTitle>
            <CardText>{data.Rated} | {data.Runtime} | {data.Genre} | {data.Released}</CardText>
            <CardImg  src={data.Poster} style={{ width: '18rem'}} alt="Hello" />
            <CardText><br/><p>{data.Plot}</p></CardText>
            <CardText><b>Director(s):</b> {data.Director}</CardText>
            <CardText><b>Writers:</b> {data.Writer}</CardText>
            <CardText><b>Stars:</b> {data.Actors}</CardText>
            <CardText><b>MetaScore:</b> {data.Metascore} | <b>Rating:</b> {data.imdbRating}</CardText>
            <CardText><b>Awards:</b> {data.Awards}</CardText>
          </CardBody>
        </Card>
    </div>
       
    )
}