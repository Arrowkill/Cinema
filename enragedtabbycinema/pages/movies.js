import { Navbar } from '../components'

export default function Movies() { 
    const page = {
        paddingTop: '60px'
    }
    return (
        <div>
            <Navbar />
            <div style={page}>
                <h2>Movies Page!</h2>
            </div>
        </div>
    )
}