import bala_resume from "../assets/bala_resume.pdf";

const Download_resume = () => {
    return (
        <>
            <a href={bala_resume} download="Balakumar_Resume.pdf">
                Download Resume
            </a>
        </>
    );
};

export default Download_resume;