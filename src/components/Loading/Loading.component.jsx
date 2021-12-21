import React from "react";
import {Fade,CircularProgress} from '@material-ui/core';
import { timeLoading } from "../../config";

const Loading = () => {
    const [load,setLoad] = React.useState(true);

    React.useEffect(()=>{
        let timer = setTimeout(() => {
            setLoad((prevState) => !prevState);
          }, timeLoading);
    },[]);
    

    return(
        <>
            <Fade in={load} unmountOnExit>
            <div style={{
                position:'absolute',
                top:0,
                left:0,
                width:'100vw',
                height:'100vh',
                background:'rgb(51 51 51 / 94%)',
                zIndex:2
            }}>
                <CircularProgress style={{position: 'absolute',top: '40%'}}/>
            </div>
            </Fade> 
        </>
    )
}

export default Loading;

