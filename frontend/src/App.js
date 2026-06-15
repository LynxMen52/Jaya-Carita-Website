import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import ServiceDetail from "@/pages/ServiceDetail";
import { Toaster } from "@/components/ui/sonner";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/services/:slug" element={<ServiceDetail />} />
                </Routes>
            </BrowserRouter>
            <Toaster position="bottom-center" />
        </div>
    );
}

export default App;
