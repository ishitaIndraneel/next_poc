import Container from "../../components/container"

const Hello = (props) => {
    return (
        <>
            <Container>
            <h1>Hello and welcome to Next JS</h1>
            <ul>
                {props.users?.map((user, index) => <li key = {`${user}_${index}`}>{user}</li>)}
            </ul>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:8080/")
    const data = await response.json()
    console.log("DATA ==>", data)
    return {
        props: {
            users: data.users
        }
    }
}
export default Hello