import React from "react";
import * as Icon from "react-icons/md";

const SidebarData = [
    {
        title: "Home",
        icon: <Icon.MdHome />,
        path: "/",
        className: "text-white",
    },
    {
        title: "Create Card",
        icon: <Icon.MdAssignmentInd />,
        path: "/generateCard",
        className: "text-white",
    },
];

export default SidebarData;