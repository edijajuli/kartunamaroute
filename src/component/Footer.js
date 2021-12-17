import { Typography } from "@mui/material";
import React from "react";
import { Container } from "reactstrap";
import * as Icon from "react-icons/md";

export default function Footer() {
    const getYear = () => {
        return new Date().getFullYear();
    };

    return (
        <>
            <Container
                fluid
                className="p-2 mx-auto"
                style={{ background: "#22668a" }}
            >
                <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    color="white"
                    className="text-center"
                >
                    Edi Jajuli
                    <br />
                    <Icon.MdCopyright /> {getYear()} Created with love
                </Typography>
            </Container>
        </>
    );
}