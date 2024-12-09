import { Route, Routes } from "react-router-dom"
import Home from "@/pages/home"
import Snowfall from "react-snowfall"
import Footer from "@/components/shared/Footer"

const Routers = () => {
    return (
        <div style={{ height: '100%', width: "100%", position: 'relative' }}>
            <Snowfall />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Routers