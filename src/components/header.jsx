import React from "react";
import { Button } from "./ui/button";
import logo from './logo.png';
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    // Define a click handler
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="relative w-full flex justify-between py-2 bg-transparent">
            <div className="flex gap-2 py-2" onClick={handleClick}>
                <img src={logo} className="w-12 h-10 rounded-xl" alt="Logo" />
                <div className="text-white font-extrabold py-2">
                    FITNESS PLANNER
                </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white mt-2 hover:from-purple-700 hover:to-purple-900 shadow-lg transform transition duration-150 ease-in-out hover:scale-105 mr-2"
            onClick={() => navigate("/signup")}>
                Sign Up
            </Button>
        </div>
    );
}
