import React from "react";
import { FooterStyle, WrapperIcon, Fb, Insta, Git, Tg } from "../Styles/Styles";

export default function Footer() {
    return (
        <FooterStyle>
            <h1>SOCIAL</h1>
            <WrapperIcon>
                <span>
                    <a
                        target="blank"
                        href="https://www.facebook.com/rivojiddin.abdunazarov.3/"
                        >
                        <Fb />
                    </a>
                </span>
                <span>
                    <a
                        target="blank"
                        href="https://www.instagram.com/iam_abdunazarov/"
                    >
                        <Insta />
                    </a>
                </span>
                <span>
                    <a target="blank" href="https://github.com/din0497">
                        <Git />
                    </a>
                </span>
                <span>
                    <a target="blank" href="https://t.me/IamAbdunazarov">
                        <Tg />
                    </a>
                </span>
            </WrapperIcon>
        </FooterStyle>
    );
}
