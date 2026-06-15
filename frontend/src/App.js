import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import ServiceDetail from "@/pages/ServiceDetail";
import Insights from "@/pages/Insights";
import ArticleDetail from "@/pages/ArticleDetail";
import { Toaster } from "@/components/ui/sonner";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/services/:slug" element={<ServiceDetail />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/insights/:slug" element={<ArticleDetail />} />
                </Routes>
            </BrowserRouter>
            <Toaster position="bottom-center" />
        </div>
    );
}

export default App;
