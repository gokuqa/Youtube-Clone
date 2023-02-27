import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";



const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);


    const { id } = useParams();
    useEffect(() => {

        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
            .then((data) => setVideos(data?.items));


    }, [id]);
    console.log(channelDetail, videos);
    return (

        <Box minHeight="95vh">
            <Box>

                <div style={{
                    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,5,80,1) 26%, rgba(9,9,121,1) 35%, rgba(7,94,146,1) 47%, rgba(6,107,158,1) 52%, rgba(4,144,192,1) 69%, rgba(2,170,216,1) 81%, rgba(0,212,255,1) 100%)",
                    zindex: 10,
                    height: "300px"
                }}

                />



                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />


            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos}></Videos>
            </Box>
        </Box>


    )
}

export default ChannelDetail