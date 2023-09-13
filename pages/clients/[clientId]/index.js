import { useRouter } from "next/router";

function DetailCLient() {
    const router = useRouter();
    function loadProjectDetail() {
        router.push({
            pathname: '/clients/[clientId]/[projectId]',
            query: {
                clientId: router.query.clientId,
                projectId: 'Project detail'
            }
        })
    }
    return (
        <div>
            <h1>Hello I'm {router.query.clientId}</h1>
            <button onClick={loadProjectDetail}>Load project of {router.query.clientId}</button>
        </div>
    )
}

export default DetailCLient;