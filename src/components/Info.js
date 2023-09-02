import React from "react";

function Info() {
    return (
        <header>
            <img src="/images/headshot-star-small.png" alt="" />
            <h1>Cassie Lewis</h1>
            <h2>Software Engineer</h2>
            <h3><a href="clewisdev.com" target="blank">clewisdev.com</a></h3>
            <div className="header-links">
                <a href="mailto:casserolecodes@gmail.com" className="email-link">
                    <i class="fa-solid fa-envelope fa-sm"></i>
                    Email
                    </a>
                <a href="https://www.linkedin.com/in/clewisdev/" className="linkedin-link">
                    <i class="fa-brands fa-linkedin fa-sm"></i>
                    LinkedIn
                    </a>
            </div>
        </header>
    )
}

export default Info;