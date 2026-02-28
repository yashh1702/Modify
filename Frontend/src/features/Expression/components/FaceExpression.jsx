import { useEffect, useRef, useState } from "react";
import { detect,init } from "../utils/utils";


export default function FaceExpression() {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");

    useEffect(() => {
        init({landmarkerRef,videoRef,streamRef});

        const currentLandmarker = landmarkerRef.current;
        const currentStream = videoRef.current?.srcObject;

        return () => {
            if (currentLandmarker) {
                currentLandmarker.close();
            }

            if (currentStream) {
                currentStream
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <video
                ref={videoRef}
                style={{ width: "400px", borderRadius: "12px" }}
                playsInline
            />
            <h2>{expression}</h2>
            <button onClick={()=>{detect({landmarkerRef,videoRef,setExpression})}} >Detect expression</button>
        </div>
    );
}