import  Link  from 'next/link'
import Head from 'next/head'
import Container from '../components/container'

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Welcome Page</title>
            </Head>
            <Container>
                <h1 className="center">Welcome to Next!!!</h1>
                <p className="center">
                    <Link href="modules/hello">Come say Hello!</Link>
                </p>
                <div>
                {props.content}
                </div>
            </Container>
        </>
    )
}
export async function getStaticProps(context) {
    const response = await fetch("http://localhost:8080/content")
    const data = await response.json()
    console.log("CONTENT DATA==>", data)
    return {
        props: {
            content: data.content
        }
    }

}
export default HomePage