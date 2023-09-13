import { useRouter } from "next/router"

function ProjectIdDetail() {
    
    return (
        <div>
            <h1>Detail Project of {useRouter().query.projectId}</h1>
        </div>
    )
};

export default ProjectIdDetail