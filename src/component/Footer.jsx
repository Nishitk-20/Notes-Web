import React from "react";

const date = new Date();
const d=date.getFullYear();

function Footer(){
    return (
        <footer>
            <p>Copyright © {d}</p>
        </footer>
    )
}

export default Footer;